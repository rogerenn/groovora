const express = require('express');
const cors = require('cors');
require('dotenv').config();

const spotifyRoutes = require('./routes/spotify');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/spotify', spotifyRoutes);

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});

