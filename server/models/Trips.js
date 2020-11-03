const mongoose = require("mongoose");
const db = require('./../../db/config.js');

const tripsSchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    date: Date,
    price: Number,
    description: String,
    activities: [],
    maxTravelers: Number,
    organizerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reservations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TripReservation'
    }],
    waitingList: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true
    }],
    travelers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true
    }],
    guide: [],
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripsSchema);

module.exports = Trip;
