var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongodb = require("./mongodb/mongodb.connect");
const session = require('express-session');
const passport = require('passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const teacherRouter = require('./routes/teacher');

const adminRouter = require('./routes/api/admin');
const studentsRouter = require('./routes/api/students');
const homeworkGroupsRouter = require('./routes/api/homeworkGroups');
const homeworksRouter = require('./routes/api/homeworks');
const homeworkScoreRouter = require('./routes/api/homeworkScore');
const passportConfig = require('./passport');

require('dotenv').config();

var app = express();
passportConfig();
mongodb.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/teacher', teacherRouter);

app.use('/api/users', usersRouter);
app.use('/api/admin', adminRouter);
app.use('/api/students', studentsRouter);
app.use('/api/homework_groups', homeworkGroupsRouter);
app.use('/api/homeworks', homeworksRouter);
app.use('/api/homework_score', homeworkScoreRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
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
