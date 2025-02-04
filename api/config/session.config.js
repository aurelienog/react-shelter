const session = require('express-session');
const MongoStore = require('connect-mongo');
const User = require('../models/user.model');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/aure-projects';

module.exports.session = session({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.SESSION_SECURE === 'false', //PRODUCTION PASAR A TRUE
    sameSite: "lax", //PRODUCTION PASAR A NONE
  },
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    ttl: 14 * 24 * 60 * 60 // = 14 days. Default
  })
})

module.exports.loadSessionUser = (req, res, next) => {
  const { userId } = req.session;

  if(userId) {
    User.findById(userId)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch(next); //TODO CREATE ERROR OR EXISTE MID
  } else {
    next();
  }
}