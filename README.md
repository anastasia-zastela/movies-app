## TEST MOVIES SEARCH APP

#### OVERVIEW

Full stack movies search app written on MERN stack. Allows user to add movie to a database, delete movie from the database, display all movies, sort movies in alphabetical order, search through movie title and stars name and surname. React-boostrap library used for UI. Unit tests written with Enzyme library.

#### FRONT END

ReactJS, Redux.

#### BACK END

NodeJS, ExpressJS, MongoDB.

#### ADDITIONAL INFO

App is divided by two parts: server(backend) and client(frontend).
Mongoose library is used to communicate with MongoDB database, create models, schemas. Server is created with express library.<br />
Seeder.js file seeds sample data to database. Server.js file configures and runs the server.
For Movie model created Movie schema with next fields: title, releaseYear, format, stars.
For creating requests is used axios.<br />

App uses global state(created with Redux), it connects to the app with Provider tag with store prop.
To manage creation, destroying, showing movies app is used reducers in global redux store.
App is built with functional components with React Hooks.<br />

App uses ESlint with Prettier for formatting.

#### HOW TO USE

To start app run 'npm run build'.<br />
To start app in development mode run 'npm run dev'.<br />
To import sample data to database 'npm run data:import'.<br />
To destroy data from database run 'npm run data:destroy'.<br />
To run tests run 'npm run test' inside client folder.
