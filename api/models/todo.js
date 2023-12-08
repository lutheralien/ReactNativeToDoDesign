const mongoose = require('mongoose');

const toDOSchema = new mongoose.Schema({
  id: {type: String, required: true},
  title: {type: String, required: true},
});

module.exports = mongoose.model('ToDO', toDOSchema);

