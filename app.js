const createError = require('http-errors');
const express = require('express');
const path = require('path');
var schedule = require('node-schedule');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('jsonwebtoken')
const secret = require('./app/config/secret')
// add webpage api
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var about = require('./routes/about');
var solution2 = require('./routes/solution2');
var prediction = require('./routes/prediction');
var prediction2 = require('./routes/prediction2');
var approach = require('./routes/approach');
var home = require('./routes/home');
var twoway = require('./routes/twoway');
var questionstart = require('./routes/questionstart');
var farmprotect = require('./routes/farmprotect');
var mapexplore = require('./routes/mapexplore');



const dbController = require('./app/api/dbconnection')
var sess = [];


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));


// Start ==================== Temp Code//
// schedule.scheduleJob('*/10 * * * *', function(){
//   sess['email'] = '';
//   sess['pass'] = '';
//   console.log('reset the auth credential!');
// });

app.post('/login',(req,res,next) => {
  if (secret.email !== req.body.email || secret.password !== req.body.pass){
    sess['email'] = '';
    sess['pass'] = '';
    res.json(['Access Denied!']);
  }else {
    sess['email'] = req.body.email;
    sess['pass'] = req.body.pass;
    res.json(['success']);
  }
});

// app.use(function (req,res,next) {
//   const url = req.originalUrl;
//   console.log(sess.email);
//   if (url !== "/login" && sess.email !== secret.email && sess.pass !== secret.password) {
//     return res.redirect("/login");
//   }
//   next();
// })

// End ==================== Temp Code//

// ---- OAuth2.0 ---- //
// Helmet: enhance the security
app.use(helmet());
// enabling CORS for all requests
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', about);
app.use('/solution2', solution2);
app.use('/prediction', prediction);
app.use('/prediction2', prediction2);
app.use('/approach', approach);
app.use('/home', home);
app.use('/twoway', twoway);
app.use('/questionstart', questionstart);
app.use('/farmprotect', farmprotect);
app.use('/mapexplore', mapexplore);

// app.post('/login', function(req, res) {
//   var user={
//     username:'Apple',
//     password: '12345'
//   }
//
//   if (req.body.username == user.username&&req.body.password==user.password) {
//     const payload = {
//       check: true
//     };
//     var token = jwt.sign(payload, app.get('Secret'), {
//       expiresIn: 1440 //expires in 24hrs
//     })
//     res.json({
//       message: 'successful authentication',
//       token: token
//     });
//   } else {
//     res.send(404)
//   }
//
// });



app.use('/api', dbController);



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
module.exports = {
  username: 'Apple',
  password: '12345'
}

module.exports = app;
