## How to run this app

1. Checkout the source code.

##### Run the backend

1. install node. You will npm (node package manager), hence you will need node.
1. navigate to ```videos\server```.
2. install the backend dependencies using npm. It's very simple, just type ```npm install```

##### Run the database

1. You need to download mongodb version 4.4.6
2. You will need to populate the db (TODO: create a migration script)
3. Turn on the database

##### Run the frontend

1. Install the frontend dependencies. ```npm install```
2. Run the client app ```yarn start```(you'll need to install yarn) or ```npm start``` 

## How to build this app from scratch

### Client: Building the movie component

1. Open movies.jsx under components folder
2. Add the <Movies /> element to the app
3. Import movies using mock backend service
4. Create the design for the Delete button
5. Create the onclick delete event
6. Create the like component

### Backend: Creating movies model-controller and adding a route

I'm using mongoose to talk with MongoDB

1. Adding a route: I added a route to MoviesController
2. Creating a movie model: I've created a mongoose model to reflect the movie model on the app
3. Building the MoviesController: I've build the MoviesController and added the CRUD actions needed
