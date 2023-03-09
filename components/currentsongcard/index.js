import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";

const CurrentPlayercard = ({ player }) => {
    console.log()
  return (
    <div className="flex gap-4 items-center group relative ">
      <div className="song-cover w-10 h-10 bg-gray-300 relative">
        <img
          src={player?.item?.album.images[0].url}
          alt="song-cover"
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
      <div className="song-list-content">
        <h2 className="text-white text-xl font-semibold">{player?.item.name}</h2>
        <p className="text-white/50">{player?.item?.artists[0].name}</p>
      </div>

      <div className="song-list-controls flex gap-2">
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
};

export default CurrentPlayercard;
