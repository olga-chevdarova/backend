var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    console.log(req.body);
    res.send('post data')
});

module.exports = router;