const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
const listings = require('./routes/listings');
const details = require('./routes/details');
const messaging = require('./routes/messaging');
const { auth } = require('express-openid-connect');
const axios = require('axios');
const slackToken = 'xoxb-6104746594806-6108474493109-en6maSCmjbz5V0OVZvwYtI3W';
var apicall = "https://slack.com/api/conversations.create";
dotenv.load();

const app = express();

// Sets up view engine to use the ejs files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Auth0 settings
const config = {
  authRequired: false,
  auth0Logout: true
};

const port = process.env.PORT || 3000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

// Test database connection
const db = require('./routes/database');
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to kerbside database!");
});

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use('/', router);
app.use('/listings', listings);
app.use('/details', details);
app.use('/messaging', messaging)

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});

// Starts server
http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
  });

app.use(express.static('public'));