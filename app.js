let express = require('express');
//let session = require('express-session');
//let SessionStore = require('express-mysql-session');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let app = express();
let reviews = require('./routes/reviews');
let db = require('./db');
let helmet = require('helmet');
let session_options = {
  checkExpirationInterval: 900000,
  expiration: 86400000,
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use(session({
  key: 'artline_session',
  secret: '7cl6mpv35vjsuy9sqb63nwdr0izkemlh5ho6hfrl',
  resave: true,
  saveUninitialized: true,
  store: new SessionStore(Object.assign(db.options, session_options))
}));
*/

app.use('/reviews', reviews);

// Connect to MySQL on start
db.connect(db.config.MODE_TEST, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.');
    process.exit(1);
  }
  console.log('start mysql');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
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
