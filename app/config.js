var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/shortlyTest');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
  console.log('Database connected');
})


var urls = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  created_at: Date,
  updated_at: Date

});

module.exports = db;