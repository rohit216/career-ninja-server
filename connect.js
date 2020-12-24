
var mongoClient = require('mongodb');
const uri = "mongodb+srv://got_user:Rohit@136034@gotcluster.vobmh.mongodb.net/got_data?retryWrites=true&w=majority";
const client = mongoClient.MongoClient(uri, { useNewUrlParser: true });
var _db;
module.exports = {

    createConnection: async function(callback ) {
        await client.connect( function (err, client) {
            _db = client.db('got_data');
            return callback(err);
        });
    },

    getDb: function() {
        return _db;
    }

};
