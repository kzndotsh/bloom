# Client Side Routing w/ React Router v.5

Topics:

* React Router
* Using Link and NavLink to navigate to specific routes
* Passing Route Parameters
* Passing props to components rendered by the Router

## Instructions

### Task 1: Project Set-up

* [ ] **Fork** this repository, then clone your fork.
* [ ] **NOTE** You have 2 servers that you will be running here so read these instructions carefully.
* [ ] **In the root of this directory**: Run `npm install` to download dependencies.
* [ ] Run the server using `npm start` or `node server.js`. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future).
* [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
* [ ] Still inside the `client` folder run `npm start` to run the client application.

* [ ] Once your application is up and running on the client, you should see a browser window that looks like this at `localhost:3000` (although the port number will be different if 3000 is being used).

  ![Movies Home](https://tk-assets.lambdaschool.com/c6b3e8d8-afe0-4663-82da-60b1de76f649_movies-home.png)

### Task 2a: MVP

#### Set up Routes

* [ ] Wrap your app with the router.
* [ ] Inside your App file add two routes.
  * [ ] one route for `/` that loads the `MovieList` component. **This component will need the movies injected into it via props**.
  * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

#### Add Functionality

* [ ] Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie.
* [ ] When a user clicks on a movie card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie.
* [ ] You will need to modify line 13 of `Movie.js` in order to accept the correct id for the movie selected.
* [ ] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
* [ ] You should now be able to navigate back and forth between the individual movies and the home screen.

### Task 2b: Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/2Ns5Lre6aMBcCtPEq/wdQFNfsdiY5b3T). 

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3: Stretch Goals

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

#### Refactor so that our code is DRY

* [ ] You may notice that we are using essentially the same exact JSX code in the `Movie` component and the `MovieDetails` component in `MovieList.js` create a new component in `MovieCard.js` that returns this JSX code. Then remove the old code from `Movie` and `MovieDetails` and instead return the new `MovieCard` component.

#### Add `Save Movie` functionality

* [ ] You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button. You will need to uncomment lines 24-27 in `Movie.js` to complete this.

#### Turn your Saved Movie list into `Link`s

* [ ] Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.

#### Turn your Saved Movie `Link`s into `NavLink`s

* [ ] Navlink

## Submission Format

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
* [ ] Fill out your module retrospective form [here](https://forms.lambdaschool.com/module-retrospective) with a link to your PR
