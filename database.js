require("dotenv").config()
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect(process.env.URL|| 'mongodb://localhost/your-app-name');