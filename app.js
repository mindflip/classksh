var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongodb = require("./mongodb/mongodb.connect");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let adminRouter = require('./routes/api/admin');
let studentsRouter = require('./routes/api/students');
let homeworkGroupsRouter = require('./routes/api/homeworkGroups');
let homeworksRouter = require('./routes/api/homeworks');
let homeworkScoreRouter = require('./routes/api/homeworkScore');

require('dotenv').config();

var app = express();
mongodb.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/admin', adminRouter);
app.use('/api/students', studentsRouter);
app.use('/api/homework_groups', homeworkGroupsRouter);
app.use('/api/homeworks', homeworksRouter);
app.use('/api/homeworkScore', homeworkScoreRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
