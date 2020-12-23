var express = require('express');
var router = express.Router();
var mongo = require('connect');
var url = require('url');

router.get('/', function(req, res, next) {
    const queryObject = url.parse(req.url,true).query;
    var searchQuery = {$or:
            {attacker_king: queryObject.king,
                location:queryObject.location,
                battle_type:queryObject.type}
    };
    var projection = {_id:0, name:1};
    var result = mongo.createConnection().db("got_Data").collection("gotData")
        .find(searchQuery)
        .project(projection).toArray();
    var object ={battles : result};
    res.end(JSON.stringify(object));
});

module.exports = router;
