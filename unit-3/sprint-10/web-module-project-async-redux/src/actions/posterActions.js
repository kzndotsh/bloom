export const CREATE_POSTER = 'CREATE_POSTER';

import dyna from '../api/dyna';

// we will create a poster using the DynaPictures API
// the image will be based on the movie poster from our tmdb api call/movie object
// the movie object contains poster_path, which is the path to the movie poster image
// the image url path fully constructed is: https://image.tmdb.org/t/p/w500/movie.poster_path

// the DynaPictures API expects a POST request with the following:

// {
//     "format": "jpeg",
//     "metadata": "some text",
//     "params": [
//       {
//         "name": "title",
//         "text": "<div>Movie <br></div><div>of the <br></div><div>Week!</div>"
//       },
//       {
//         "name": "poster",
//         "imageUrl": "https://dynapictures.com/b/rest/public/media/42ba889bf8/images/undefined"
//       }
//     ]
//   }

// imageUrl is the constructed image url from the movie poster path

const createPoster = (movie) => (dispatch) => {
    const poster = {
        format: 'jpeg',
        metadata: 'some text',
        params: [
            {
                name: 'background',
                imageUrl:
                    'https://dynapictures.com/b/rest/public/media/42ba889bf8/images/0ce80bb38f.png',
            },
            {
                name: 'image',
                imageUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            },
        ],
    };
    dyna.post('/designs/2ccecf6143', poster)
        .then((res) => {
            console.log(res);
            dispatch({ type: CREATE_POSTER, payload: res.data });
        })
        .catch((err) => {
            console.log(err);
        });
};

export default createPoster;
