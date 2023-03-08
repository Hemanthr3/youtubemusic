import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function ListMusicCard() {
  return (
    <div className="flex gap-4 items-center group relative">
      <div className="song-cover w-10 h-10 bg-gray-300 relative">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
          alt="song-cover"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="overlay absolute z-5 group-hover:bg-black/70 w-full h-full flex items-center justify-center">
          <button className="scale-0 group-hover:scale-100 transition-all">
            <FaPlay className="text-white"/>
          </button>
        </div>
      </div>
      <div className="song-list-content">
        <h2 className="text-white text-xl font-semibold">
          ach Keh Raha Hai - Lofi
        </h2>
        <p className="text-white/50">Kishore Kumar, Sanam Rewind With Sanam</p>
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
