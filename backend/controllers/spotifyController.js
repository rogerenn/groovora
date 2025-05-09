const { getNewReleases, getAlbumsByPlaylist } = require('../services/spotifyService');

const fetchAlbums = async (req, res) => {
  try {
    const { playlist } = req.query;

    let albums;

    if (playlist) {
      albums = await getAlbumsByPlaylist(playlist); // NUEVO
    } else {
      albums = await getNewReleases(); // default
    }

    res.status(200).json(albums);
  } catch (error) {
    console.error('❌ Error en controller.fetchAlbums:', error.message);
    res.status(500).json({ error: 'Error fetching albums from Spotify' });
  }
};

module.exports = {
    fetchAlbums,
  };
  