import React, { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";
import playAlbum from "@/utils/play-album";

function ListMusicCard({ playlist }) {
  console.log(playlist);
  const [play, setPlay] = useState(false);

  const handlePlay = async () => {
    const r = await playAlbum(playlist.uri);
    setPlay(true);
  };
  return (
    <div className="flex gap-4 items-center group relative">
      <div className="song-cover w-10 h-10 bg-gray-300 relative">
        <img
          src={playlist.images[0].url}
          alt="song-cover"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="overlay absolute z-5 group-hover:bg-black/70 w-full h-full flex items-center justify-center">
          <button
            className="scale-0 group-hover:scale-100 transition-all"
            onClick={handlePlay}
          >
            {!play ? (
              <FaPlay className="text-white" />
            ) : (
              <FaPause className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="song-list-content">
        <h2 className="text-white text-xl font-semibold">{playlist.name}</h2>
        <p className="text-white/50">
          {playlist.description.length > 25
            ? playlist.description.slice(0, 35) + "..."
            : playlist.description}
        </p>
      </div>

      <div className="song-list-controls hidden group-hover:flex absolute right-0 top-0 gap-2">
        <button className="p-1 hover:bg-white/30 rounded-full">
          <BiDislike className="text-2xl text-white" />
        </button>
        <button className="p-1 hover:bg-white/30 rounded-full">
          <BiLike className="text-2xl text-white" />
        </button>
        <button className="p-1 hover:bg-white/30 rounded-full">
          <IoMdMore className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
}

export default ListMusicCard;
