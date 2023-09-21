# Client Side Routing w/ React Router

## Topics

* React Router
* Navigating to specific routes
* Consuming URL Parameters
* Passing props to components rendered by the Router

## Instructions

### Task 1: Project Set-up

* [ ] **Fork** this repository, then clone your fork.
* [ ] Execute `npm install` to download dependencies. The `react-router-dom` library is already installed!
* [ ] Execute `npm run start` to launch your Movies application in Chrome.

**Once your application is up and running**, you should see a browser window that looks like [this](https://tk-assets.lambdaschool.com/c6b3e8d8-afe0-4663-82da-60b1de76f649_movies-home.png) at `http://localhost:3000`.

### Task 2: MVP

#### Design Files

Once you are done your application will have two routes:

* [ ] [Screenshot of route '/'](https://tk-assets.lambdaschool.com/b9ced241-681f-432a-9047-ef2ba7e34946_first-route.png)
* [ ] [Screenshot of route '/movies/:id'](https://tk-assets.lambdaschool.com/06f9f448-2804-4b4a-9408-41904af96a4e_second-route.png)

#### Set up Routes

* [ ] Wrap the `App` component with `BrowserRouter` in `src/index.js`.
* [ ] Inside your App file add two routes.
  * [ ] one route for `/` that loads the `MovieList` component. This component will need the movies injected into it via props.
  * [ ] one route that will take an `id` parameter after`/movies/` (EG: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

#### Add Functionality

* [ ] When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie.
* [ ] You will need to modify line 7 of `Movie.js` to get the id of the selected movie from the URL.
* [ ] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
* [ ] You should now be able to navigate back and forth between the list of movies and the detailed view of a single movie.

### Task 3: Stretch Goals

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

#### Refactor so that our code is DRY

* [ ] You may notice that we are using very similar JSX in the `Movie` component and in the `MovieDetails` component in `MovieList.js`. The main difference is the list of stars, which only exists in the "detailed" view of the `Movie` component.
* [ ] Create a new component in `MovieCard.js` that returns a Movie Card. Then remove the old code from `Movie` and `MovieDetails` and instead return the new `MovieCard` component.
* [ ] The Movie Card should be flexible enough to handle displaying a movie with or without the list of stars.

#### Add `Save Movie` functionality

* [ ] You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button. You will need to uncomment lines 24-27 in `Movie.js` to complete this.

#### Turn your Saved Movie list into `Link`s

* [ ] Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.

## Submission Format

* [ ] Submit a link to your repository in canvas.
