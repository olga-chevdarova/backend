var express = require('express');
var router = express.Router();


var towns = [{
    id: 1,
    town: 'Kiev'
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
router.get('/', function(req, res, next) {
    console.log(req.params);
    var town = towns.find(function (town) {
        return town.id === +(req.params.id)
    } );
    res.send(town)
});

module.exports = router;
