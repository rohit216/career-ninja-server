var express = require('express');
var router = express.Router();
var mongo = require('../connect');
var url = require('url');

router.get('/', function (req, res, next) {
    const queryObject = url.parse(req.url, true).query;
    var searchQuery = {
        $or: [{
            attacker_king: queryObject.king
        }
        , {
            location: queryObject.location
        }, {
            battle_type: queryObject.type
        }
        ]
    };

    mongo.createConnection(async function (err, client) {

        if (err) throw err;
        const db = await mongo.getDb();
        const options = {
            projection: {_id: 0, name: 1}
        };
        const result = await db.collection("gotData").find(searchQuery, options).toArray();
        console.log(result);
        const object = {battles: result};
        res.end(JSON.stringify(object));
    });
});

module.exports = router;
