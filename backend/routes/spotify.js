const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

console.log('📦 SPOTIFY_CLIENT_ID:', process.env.SPOTIFY_CLIENT_ID ? '✔️ cargado' : '❌ faltante');
console.log('📦 SPOTIFY_CLIENT_SECRET:', process.env.SPOTIFY_CLIENT_SECRET ? '✔️ cargado' : '❌ faltante');

let token = null;

const getSpotifyToken = async () => {
  try {
    console.log('🚀 Solicitando token a Spotify...');
    const res = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }),
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    token = res.data.access_token;
    console.log('✅ Spotify token obtenido:', token.slice(0, 15) + '...');
  } catch (error) {
    console.error('❌ Error al obtener token de Spotify:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    throw error;
  }
};

router.get('/albums', async (req, res) => {
  try {
    if (!token) {
      console.log('🔑 No hay token, obteniendo uno nuevo...');
      await getSpotifyToken();
    }

    console.log('🎧 Obteniendo lanzamientos recientes desde Spotify...');

    const response = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=10',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const albums = response.data.albums.items.map((album) => ({
      id: album.id,
      name: album.name,
      artist: album.artists.map((a) => a.name).join(', '),
      image: album.images[0]?.url,
      url: album.external_urls.spotify,
    }));

    console.log(`✅ Se obtuvieron ${albums.length} álbumes`);
    res.json(albums);
  } catch (err) {
    console.error('❌ Error al obtener álbumes:', {
      status: err.response?.status,
      data: err.response?.data,
      message: err.message,
    });
    res.status(500).json({ error: 'Failed to fetch albums from Spotify' });
  }
});

module.exports = router;
