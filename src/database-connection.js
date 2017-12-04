const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectionString = process.env.DB_URL || 'mongodb://localhost/p2p-lending';

mongoose.connect(connectionString, { useMongoClient: true });
