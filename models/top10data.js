const mongoose = require('mongoose');

const top10DataSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const Top10Data = mongoose.model('Top10Data', top10DataSchema);

module.exports = Top10Data;
