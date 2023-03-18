const { MongoClient } = require("mongodb");

const uri =
	"mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

let db;
const client = new MongoClient(uri);

async function mongoConnect() {
	try {
		db = client.db("e-commerce");
	} catch (error) {
		await client.close();
	}
}

function getDB() {
	return db;
}

module.exports = { mongoConnect, getDB };
