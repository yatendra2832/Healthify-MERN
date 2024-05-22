const mongoose = require('mongoose');

// Define schema
const LabTestSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true
  },
  parameters: {
    type: Number,
    required: true
  },
  parametersNames: {
    type: [String],
    required: true
  },
  aboutTest: {
    type: String,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  offerAmount: {
    type: Number,
    required: true
  }
});

// Create model
const LabTestCard = mongoose.model('Labtestcard', LabTestSchema);

module.exports = LabTestCard;
