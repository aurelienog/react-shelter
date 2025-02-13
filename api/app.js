require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require("mongoose");
const helmet = require('helmet')
const secure = require("./middlewares/secure.mid");

require('./config/db.config');

const app = express();

const cors = require('./config/cors.config');
const { session, loadSessionUser } = require('./config/session.config');
app.use(cors);
app.use(express.json());
app.use(logger('dev'));
app.use(secure.cleanBody);
app.use(session);
app.use(loadSessionUser);
app.use(helmet());
const apiUsers = require('./config/routes/users.routes.config');
app.use("/api/v1", apiUsers);

const apiAnimals = require('./config/routes/Animals.routes.config');
app.use("/api/v1", apiAnimals);

//** Error Handling */
app.use((req, res, next) => (next(createError(404, 'Route not found'))));

app.use((error, req, res, next) => {
  
  if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error);
  } else if (error instanceof mongoose.Error.CastError && error.path === '_id') {
    error = createError(404, 'resource not found');
  } else if (error.message.includes("E11000")) {
    //Duplicate keys
    Object.keys(error.keyValue).forEach((key) => error.keyValue[key] = 'Already exists');
    error = createError(409, { errors: error.keyValue});
  } else if (!error.status) {
    error = createError(500, error);
  }
  console.error(error);
  
  const data = {
    message: error.message
  }

  if(error.errors){
    const errors = Object.keys(error.errors).reduce((errors, errorKey) => {
      errors[errorKey] = error.errors[errorKey]?.message || error.errors[errorKey];
      return errors;
    }, {});
    data.errors = errors;
  }

  res.status(error.status)
  .json(data)
})

const port = process.env.PORT || 3001;
app.listen(port, () => (console.info(`App is running at port ${port}`)));