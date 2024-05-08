const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
  rooms: {
    type: Number,
    required: [true, 'Please, enter number of rooms'],
    min: [1, 'Number of rooms should be more than 0'],
    max: [20, 'Number of rooms could not be more than 20'],
  },
  name: {
    type: String,
    required: [true, 'Please, enter name'],
    minLength: [3, 'The length of apratment name should be more than 2 symbols'],
    maxLength: [99, 'The length of apratment name should be less than 99 symbols'],
  },
  price: {
    type: Number,
    required: [true, 'Please, enter the price of apartment'],
    min: [1, 'The price of apartment should be more than 0'],
  },
  description: {
    type: String,
    required: [true, 'Please, enter the description'],
    maxLength: [999, 'The length of description should be less than 999 symbols'],
  },
  createdAt: { type: Date, default: Date.now },
});

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = Apartment;
