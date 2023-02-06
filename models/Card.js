const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: false
  },
  userImg: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model("Card", cardSchema)