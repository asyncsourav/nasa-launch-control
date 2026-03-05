const mongoose = require('mongoose');
const { Schema } = mongoose;

const launchesSchema = new Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date, 
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  customers: {
    type: [String],
    required: true,
    default: ['SpaceX'],
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Launch', launchesSchema);