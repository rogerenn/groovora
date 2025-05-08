import { useEffect, useState } from 'react';

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  url: string;
}

export default function PopularThisWeek() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/spotify/albums')
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error('Error fetching albums:', err));
  }, []);

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">POPULAR THIS WEEK</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {albums.map((album) => (
            <a
              key={album.id}
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src={album.image}
                alt={album.name}
                className="h-48 w-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
