const axios = require('axios');

let accessToken = null;
let tokenExpiresAt = 0;

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

  // Solo devuelve lo que el frontend necesita
  return res.data.albums.items.map((album) => ({
    name: album.name,
    artist: album.artists.map((a) => a.name).join(', '),
    image: album.images[0]?.url,
    id: album.id,
    url: album.external_urls.spotify,
  }));
}

module.exports = {
  getNewReleases,
};

