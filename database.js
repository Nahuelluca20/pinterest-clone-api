require("dotenv").config()
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const url = process.env.URL

mongoose.connect(
  url,
  {
    useNewUrlParser: true
  }
)
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err))
