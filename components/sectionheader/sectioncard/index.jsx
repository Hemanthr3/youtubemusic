import playAlbum from "@/utils/play-album";
import playTrack from "@/utils/playPlaylists";
import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
const SectionCard = ({ images, name, uri }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = async () => {
    const r = await playTrack(uri);
    setPlay(true);
  };
  return (
    <div className="w-full group">
      <div className="song-card-cover w-full h-[200px] bg-gray-300 relative rounded-md">
        <img
          src={images[0].url}
          alt=""
          className="rounded object-cover h-full w-full"
        />
        <div className="overlay w-full h-full  group-hover:bg-black/30 absolute z-5 inset-0">
          <button
            className="scale-0 group-hover:scale-100 transition-all absolute bottom-6 w-10 h-10 right-5 group-hover:bg-black/70 rounded-full flex items-center justify-center"
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
      <div className="song-card-footer mt-2">
        <h3 className="text-white">{name}</h3>
        <p className="text-white/70">Album description</p>
      </div>
    </div>
  );
};

export default SectionCard;
