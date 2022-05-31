const mongoose = require("mongoose");

const caffeineSchema = mongoose.Schema({
  name: String,
  price: Number,
  availability: Boolean,
  does_the_drink_contain_caffeine: Boolean,
  volume: Number,
  description_of_the_drink: String,
});

const caffeineModel = mongoose.model("caffeineModel", caffeineSchema);

module.exports = caffeineModel;
