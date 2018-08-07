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
app.get('/new2', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties ", (error, rows) => {
        res.json(rows);
    });

});


app.get('/router', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties ", (error, rows) => {
        res.json(rows);
    });

});
app.get('/router2', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties WHERE id=1", (error, rows) => {
        res.json(rows);
    });

});
app.get('/router3', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties", (error, rows) => {
        res.json(rows);
    });

});

app.get('/new3', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties ORDER BY date ASC", (error, rows) => {
        res.json(rows);
    });

});

app.get('/test_physical', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM duties", (error, rows) => {
        res.json(rows);
    });

});


// app.post('/db', function(req, res) {
//     expName = +req.body.id;
//     db.run("UPDATE duties SET date=?", [expName]);
// });

app.get('/points', function(req, res, next) {
    console.log(req.params);
    db.all("SELECT * FROM points", (error, rows) => {
        res.json(rows[0]);
    });

});
app.get('/points2', function(req, res, next) {
    db.all("SELECT SUM(points) FROM duties", (error, rows) => {
        res.json(Object.values(rows[0]))
    });

});
app.get('/points3', function(req, res, next) {
    db.all("SELECT SUM(points) FROM duties WHERE date < date('now')", (error, rows) => {
        res.json(Object.values(rows[0]))
    });
    db.run("UPDATE duties SET date = date('now') WHERE date < date('now')");
});
//
// app.get('/points5', function(req, res, next) {
//     let date;
//     db.all("SELECT * FROM memory", (error, rows) => {
//      date = (Object.values(rows[0]))
//     });
//     console.log(date);
//
// });


app.post('/db', function(req, res) {
    clickedId = +req.body.id;
    // db.run("UPDATE duties SET date=?", [expName]);
    db.run("UPDATE duties SET date = date( julianday(date('now'))+frequency)  WHERE  id=?", [clickedId]);
    db.run("UPDATE duties SET status = 1 WHERE  id=?", [clickedId]);

});
app.post('/db3', function(req, res) {
    newPoints = +req.body.points;
    db.run("UPDATE points SET points=? WHERE id='1'", [newPoints]);
});

app.post('/db4', function(req, res) {
    currentDate = req.body.selectedDay;

    db.run("UPDATE memory SET date=? WHERE id='1'", [currentDate]);
    // db.all("SELECT * FROM duties where date= date(?)", [currentDate], (error, rows) => {
    //     db.run("UPDATE memory SET date=? WHERE id='1'", [newPoints]);
    // });
    // db.all("SELECT * FROM memory", (error, rows) => {
    //     console.log(rows)
    // });
    // db.all(("SELECT * FROM duties WHERE date=?", [currentDate]), (error, rows) => {
    //     res.json(rows);
    // });
});

app.get('/date/:date', function(req, res, next) {
    console.log(req.params.date);
    let date = (req.params.date);
    db.all("SELECT * FROM duties WHERE date= date(?)", [date], (error, rows) => {
        res.json(rows);

    });
});

// app.get('/date/:date', function(req, res, next) {
//     db.all("SELECT * FROM duties where date= date(?)", [req.params.date], (error, rows) => {
//      console.log(rows);
//        res.json(rows)
//     });
//
// });
app.get('/data', function(req, res, next) {
    res.json([{
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
    ])

});

app.get('/data2', function(req, res, next) {
    res.json([{
        id: 1,
        town: 'Rio'
    }
    ])

});

app.get('/town/:id', function(req, res, next) {
    console.log(req.params.id);
    db.all("SELECT * FROM duties where id =?", +[req.params.id], (error, rows) => {
        console.log(rows);
        res.json(rows)
    });
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

// db.run("UPDATE duties SET date = date('now')");
// db.run("UPDATE points SET points=0 WHERE id='1'");
module.exports = app;
