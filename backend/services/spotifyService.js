const axios = require('axios');
require('dotenv').config();

let accessToken = null;
let tokenExpiresAt = 0;

// Obtiene o reutiliza el token de Spotify
async function getAccessToken() {
  const now = Date.now();
  if (accessToken && now < tokenExpiresAt) {
    return accessToken;
  }

  const credentials = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  accessToken = res.data.access_token;
  tokenExpiresAt = now + res.data.expires_in * 1000;
  return accessToken;
}

// Lógica para obtener nuevos lanzamientos
async function getNewReleases() {
  const token = await getAccessToken();

  const res = await axios.get(
    'https://api.spotify.com/v1/browse/new-releases?limit=12',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.albums.items.map((album) => ({
    id: album.id,
    name: album.name,
    artist: album.artists.map((a) => a.name).join(', '),
    image: album.images[0]?.url,
    url: album.external_urls.spotify,
    release_date: album.release_date,
  }));
}

const getAlbumsByPlaylist = async (playlistId) => {
  const response = await spotifyApi.getPlaylistTracks(playlistId);
  return response.body.items.map((item) => ({
    id: item.track.id,
    name: item.track.name,
    artist: item.track.artists[0].name,
    image: item.track.album.images[0].url,
    url: item.track.external_urls.spotify,
  }));
};


module.exports = {
  getNewReleases,
};
