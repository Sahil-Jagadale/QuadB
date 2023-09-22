require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const connectDB = require("./middlewares/db");
const fetchAndStore = require("./routes/fetchAndStoreRoute");
const fetchFromDB = require("./routes/fetchFomDBRoute");

connectDB();

app.use(cors());

app.use('/api',fetchAndStore);

app.get('/api', fetchFromDB);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
