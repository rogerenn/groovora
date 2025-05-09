const express = require('express');
const router = express.Router();
const { fetchAlbums } = require('../controllers/spotifyController');

// RUTA: GET /spotify/albums
router.get('/albums', fetchAlbums);

module.exports = router;
