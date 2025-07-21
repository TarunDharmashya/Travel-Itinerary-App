const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/itineraries', itineraryRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT || 8080, () => console.log('Server running on port 8080')))
  .catch((err) => console.error(err));