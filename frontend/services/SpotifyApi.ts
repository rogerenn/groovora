// services/spotifyApi.ts
export async function fetchAlbums(playlistId?: string) {
    const url = playlistId
      ? `http://localhost:4000/spotify/albums?playlist=${playlistId}`
      : `http://localhost:4000/spotify/albums`;
  
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error fetching albums");
    return await res.json();
  }
  