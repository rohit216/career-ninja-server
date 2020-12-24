var express = require('express');
var router = express.Router();
var mongo = require('../connect');

router.get('/', function(req, res, next) {
   mongo.createConnection(async function (err, client) {
       if(err) throw err;
       const db = mongo.getDb();
       const result = await db.collection("gotData").countDocuments();
           const object = {noOfBattles : result};
           res.end(JSON.stringify(object));
   });
});

module.exports = router;
