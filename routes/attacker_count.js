var express = require('express');
var router = express.Router();
var mongo = require('connect');

router.get('/', function(req, res, next) {
    var result = mongo.createConnection().db("got_Data").collection("gotData").count();
    var object ={count : result};
    res.end(JSON.stringify(object));
});

module.exports = router;
