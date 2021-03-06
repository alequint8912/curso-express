var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

//database sync
const databaseSync = require('./models/syncModels')

//api routers
const productsRouter = require('./routes/api/products.router')
const usersRouter = require('./routes/api/user.router')
const categoryRouter = require('./routes/category.router')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//database sync
const { MODELS } = require('./utils/enum')
databaseSync.syncModel(MODELS.PRODUCT)
databaseSync.syncModel(MODELS.USER)
databaseSync.syncModel(MODELS.CATEGORY)


//api routers use
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/categories', categoryRouter)



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
