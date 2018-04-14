# MERN Boilerplate

* A code boilerplate for applications using the MERN(MongoDB, Express, React and NodeJs) stack.

- [MERN Boilerplate](#mern-boilerplate)
  - [Technologies](#technologies)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
  - [Installation](#installation)
  - [TODO](#todo)

## Technologies

### Frontend

* [React](https://facebook.github.io/react/) - The state based framework for your Views.
* [React Router](https://reacttraining.com/react-router/) - For routing to different paths.
* [Webpack](https://webpack.github.io/) - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js (you can change the filename of course) so you can include it in a HTML page.
* [Babel](https://babeljs.io/blog/2015/06/07/react-on-es6-plus) - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
* [Bootstrap](https://react-bootstrap.github.io/) - Framework for building responsive, mobile-first sites.
* [ejs](http://ejs.co/) - Template Engine.
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client.

### Backend

* [NodeJs](https://nodejs.org/en/) - JS Runtime environnement.
* [Express](http://expressjs.com/) The Nodejs framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html.

### Database

* [Mongoose](http://mongoosejs.com/) A NoSQL Database system.
* [MongoDB](https://www.mongodb.com/) - Non relational Database.

## Installation

1. `npm install`
2. `npm build`
3. `npm start`

## TODO

* Add `webpack.config.js` & `.babelrc` to the config folder for better overview.
  * customize webpack & babel path.
* Add Docker for virtualization