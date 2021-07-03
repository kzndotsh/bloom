import { rest } from "msw";

let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd",
    },
    id: 5,
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba",
    },
    id: 6,
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99",
    },
    id: 7,
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99",
    },
    id: 8,
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd",
    },
    id: 9,
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca",
    },
    id: 10,
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2",
    },
    id: 11,
  },
];

let nextId = 12;

const urlBase = 'http://localhost:5000/api';

const correctCredientials = {
  username: "Lambda",
  password: "School",
  token:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
}


function authenticator(req) {
  const { authorization } = req.headers.map;
  return (authorization === correctCredientials.token);
}


export const handlers = [
  // Handles a POST /login request
  rest.post(`${urlBase}/login`, (req, res, ctx) => {
    const { username, password } = req.body;
    if (username === correctCredientials.username && password === correctCredientials.password) {
      return res(
          ctx.status(200),
          ctx.json({
              payload: correctCredientials.token,
          }))
    } else {
        return res(
            ctx.status(403),
            ctx.json({ error: "Username or Password incorrect. Please see Readme" })
        );
    }
  }),

  rest.post(`${urlBase}/logout`, (req, res, ctx) => {
    if (authenticator(req)) {
      return res(
        ctx.status(200),
        ctx.json({
            payload: correctCredientials.token,
        })
      );
    } else {
      res(
        ctx.status(403),
        ctx.json({ error: "User must be logged in to do that." })
      )
    }
  }),

  // Handles a GET /user request
  rest.get(`${urlBase}/colors`, (req, res, ctx) => {
    if (authenticator(req)) {
      return res(
        ctx.status(200),
        ctx.json(colors)
      );
    } else {
      res(
        ctx.status(403),
        ctx.json({ error: "User must be logged in to do that." })
      )
    }
  }),

  rest.post(`${urlBase}/colors`, (req, res, ctx) => {
    if (authenticator(req)) {
      if (req.body.color !== undefined && req.body.code !== undefined) {
        const newColor = req.body;
        newColor.id = nextId;
        colors.push(newColor);
      }
      nextId = nextId + 1;
      return res(
        ctx.status(201), 
        ctx.json(colors)
      );
    } else {
      return res(
        ctx.status(403),
        ctx.json({ error: "User must be logged in to do that." })
      )
    }
  }),

  rest.put(`${urlBase}/colors/:id`, (req, res, ctx) => {
    if (authenticator(req)) {
      if (!req.params.id) {
        return res(
          ctx.status(400),
          ctx.json("Your request is missing the color id")
        );
      }

      if (req.body.id === undefined || !req.body.color || !req.body.code) {
        return res(
          ctx.status(422),
          ctx.json("Make sure your request body has all the fields it needs")
        );
      }

      colors = colors.map((color) => {
        if (`${color.id}` === req.params.id) {
          return req.body;
        }
        return color;
      });

      return res(ctx.status(200), ctx.json(req.body));
    } else {
      return res(
        ctx.status(403),
        ctx.json({ error: "User must be logged in to do that." })
      );
    }
  }),

  rest.delete(`${urlBase}/colors/:id`, (req, res, ctx) => {
    if (authenticator(req)) {
      if (!req.params.id)
        return res(
          ctx.status(400),
          ctx.json("Your request is missing the color id")
        );
      colors = colors.filter((color) => `${color.id}` !== req.params.id);
      return res(ctx.status(202), ctx.json(req.params.id));
    } else {
      return res(
        ctx.status(403),
        ctx.json({ error: "User must be logged in to do that." })
      )
    }
  }),

  rest.get(urlBase, function (req, res, ctx) {
    return res(
      ctx.status(200),
      ctx.json("The App is working!")
    );
  })
];
