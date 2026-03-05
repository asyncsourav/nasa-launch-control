const mongoose = require('mongoose');
const { Schema } = mongoose;

const planetsSchema = new Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

// Connect planetsSchema with the "planets" collection
module.exports = mongoose.model('Planet', planetsSchema);