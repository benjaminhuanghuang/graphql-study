const mongoose = require('mongoose')

const MONGO_URI = "mongodb://127.0.0.1:27017"
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));
