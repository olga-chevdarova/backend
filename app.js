// set PORT=3001 && node bin/www

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

// var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artRouter = require('./routes/artist');
var artRouterID = require('./routes/dynamic');

var app = express();
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db.sqlite');
// var db;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artist', artRouter);



// var uri = "mongodb+srv://onvak:gfynthf123@cluster0-ikhhq.gcp.mongodb.net/test?retryWrites=true";
// MongoClient.connect(uri, function(err, database) {
//
//     db = database;
// });



var towns = [{
    id: 1,
    town: 'Rio'
}, {
    id: 2,
    town: 'London'
},
    {
        id: 3,
        town: 'St. Ives'
    }
];

/* GET home page. */
app.get('/artist/:id', function(req, res, next) {
    console.log(req.params);
    var town = towns.find(function (town) {
        return town.id === +(req.params.id)
    } );
    res.send(town)
});

app.get('/new', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties WHERE (id=1)", (error, rows) => {
        res.json(rows);
    });

});

app.post('/db', function(req, res) {
    expName = 15;
    console.log(req.body.aaa);
    res.sendStatus(req.body.aaa);
    db.run("UPDATE duties SET date=?", [expName]);
});

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
