var express = require('express');
var router = express.Router();
var mongo = require('../connect');

router.get('/', function(req, res, next) {
  var projection = {_id:0, location:1};
  var result = mongo.createConnection().db("got_data").collection("gotData").find().project(projection).toArray();
  res.end(JSON.stringify(result));
});

module.exports = router;
