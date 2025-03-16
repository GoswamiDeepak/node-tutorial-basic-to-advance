const { MongoClient } = require('mongodb');

async function database() {
    try {
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();

        // Get the database
        const db = client.db('practice_database');
        console.log('Connected to MongoDB!');

        // Get the collection
        const collection = db.collection('users_collection');

        // Example: Find documents with specific criteria and projection
        const filteredDocs = await collection
            .find(
                { scores: { $gt: 70 } },
                { projection: { name: 1, "scores.$": 1, _id: 0 } } // _id: 0 excludes the _id field
            )
            .toArray();
        console.log('Filtered documents:', filteredDocs);

        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

database()
    .then((db) => {
        console.log('Database connection successful');
    })
    .catch((error) => {
        console.error('Failed to connect:', error);
    });
