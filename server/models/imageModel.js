const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);
