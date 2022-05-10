# Backend

Node.js and Express.js website that allows users to add, edit, view and delete articles.

*Starting point: __index.js__ contains Http server wrapped in socket.io listening on port 5000*

*App: __src/app.js__ contains Express configurations and routes*

*Environment variables: __Src/Config/config.env__ [PORT, ORIGIN]*

*Testing: Unit test (__Jest__), Integration test (__Not Performed__)*


## Scripts

*__npm start__ [Runs the server]*

*__npm run dev__ [Runs the server in development environment via nodemon]*

*__npm prettify__ [Prettifies all the existing files]*

*__npm test__ [Performs jest and prettify checks]*


## Installed Dependencies

***npm i express socket.io dotenv cors***

***npm i --save-dev nodemon jest eslint prettier eslint-config-prettier***

- _[express](https://expressjs.com/)_
- _[socket.io](https://socket.io/)_
- _[dotenv](https://www.npmjs.com/package/dotenv)_
- _[cors](https://expressjs.com/en/resources/middleware/cors.html)_

- _[nodemon](https://www.npmjs.com/package/nodemon)_
- _[jest](https://jestjs.io/docs/getting-started)_
- _[eslint](https://eslint.org/docs/user-guide/getting-started)_
- _[prettier](https://prettier.io/docs/en/install.html)_
- _[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)_
