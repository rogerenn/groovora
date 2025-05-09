import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchAlbums } from '@/services/SpotifyApi'; // NUEVO


interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  url: string;
}

export default function AlbumCarousel() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetchAlbums()
      .then(setAlbums)
      .catch((err) => console.error('Error fetching albums:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-64 mx-auto mb-10">
      <Slider {...settings}>
        {albums.map((album) => (
          <a
            key={album.id}
            href={album.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2"
          >
            <img
              src={album.image}
              alt={album.name}
              className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="text-center text-sm">
              <p className="font-semibold">{album.name}</p>
              <p className="text-gray-500">{album.artist}</p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}  