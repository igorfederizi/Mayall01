const {mongoClient} = require('mongodb');

// conexão db
const mongoUri = 'mongodb+srv://mayall01:<mayall01>@cluster0.mbuha.mongodb.net/markdb?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(mongoUri)

async function connect() {
   await client.connect()

    return client.db('markdb')


}

async function disconnect() {
    await client.disconnect()

}

module.exports = {connect, disconnect}