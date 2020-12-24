var express = require('express');
var router = express.Router();
var mongo = require('../connect');

router.get('/', function (req, res, next) {

    mongo.createConnection(async function (err, client) {
        const db = mongo.getDb();
        const projection = {_id: 0, location: 1};
        const result = await db.collection("gotData").find().project(projection).toArray();
        const resultArray = [];
        result.forEach(data => {
            if (data.location !== null || data.location === '') {
                resultArray.push(data.location);
            }
        });
        res.end(JSON.stringify(resultArray));
    });

});

module.exports = router;
