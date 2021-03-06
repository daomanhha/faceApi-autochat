require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const csrf = require('csurf');
const logger = require('morgan');

//Router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mainRouter = require('./routes/main.Router');
const webHookRouter = require('./routes/webhook.Router');
const loginRouter = require('./routes/login.Router');
const logoutRouter = require('./routes/logout.Router');

//middleware 
const authenticationLogin = require('./middleware/authentication.middleware');

const app = express();
const csrfProtection = csrf({ cookie: true });

//kết nối mongoose
mongoose.connect(process.env.DB);
mongoose.connection.once('open',()=>{
	console.log('connected');
});
mongoose.connection.on('error',(error)=>{
	console.log(error);
});

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',authenticationLogin.authenticationLoginOut, csrfProtection, loginRouter);
app.use('/logout', logoutRouter);
app.use('/main', authenticationLogin.authenticationLogin,  mainRouter);
app.use('/webhook', webHookRouter)

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
