const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  sqft: {
    type: Number,
    require: [true, "SqFt is required"],
  },
  price: {
    type: Number,
    require: [true, "Price is required"],
  },
  garage: {
    type: Boolean,
    require: [true],
  },
  beds: {
    type: Number,
    require: [true, "Beds are required"],
  },
  baths: {
    type: Number,
    require: [true, "Baths are required"],
  },
  chimney: {
    type: Boolean,
    require: [true],
  },
  stories: {
    type: Number,
    require: [true, "Stories are required"],
  },
  layout: {
    type: String,
    require: [true, "Layout image required"],
  },
  img1: {
    type: String,
    require: [true, "Image 1 is required"],
  },
  img2: {
    type: String,
    require: [false],
  },
  img3: {
    type: String,
    require: [false],
  },
  img4: {
    type: String,
    require: [false],
  },
  img5: {
    type: String,
    require: [false],
  },
}, { timestamps: true });

const Plan = mongoose.model("entry", EntrySchema);
module.exports = Plan;