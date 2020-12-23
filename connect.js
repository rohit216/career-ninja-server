
var mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://got_user:Rohit@136034@gotcluster.vobmh.mongodb.net/got_data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = {
     async createConnection() {
        try {
            // Connect to the MongoDB cluster
            return await client.connect();
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
};

createConnection().catch(console.error);
