import {
  selectPlayer,
  selectUri,
  setPlayer,
  setUri,
} from "@/redux/slices/appSlice";
import getPlayer from "@/utils/getPlayer";
import playAlbum from "@/utils/play-album";
import playTrack from "@/utils/playPlaylists";
import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const SectionCard = ({ images, name, uri }) => {
  const [play, setPlay] = useState(false);

  const currentUri = useSelector(selectUri);
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);

  const handlePlay = async () => {
    if (!play) {
      const r = await playTrack(uri);
      dispatch(setUri(uri));
      setPlay(true);
      const state = await getPlayer();
      dispatch(setPlayer(state));
    } else {
      setPlay(false);
    }
  };
  return (
    <div className={`w-full group ${uri === currentUri && "bg-white/40"}`}>
      <div
        className={`song-card-cover w-full h-[200px] bg-gray-300 relative rounded-md`}
      >
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
            {player?.is_playing && uri === currentUri && play ? (
              <FaPause className="text-white" />
            ) : (
              <FaPlay className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="song-card-footer mt-2 px-3 rounded-b-md">
        <h3 className="text-white">{name}</h3>
        <p className="text-white/70">Album description</p>
      </div>
    </div>
  );
};

export default SectionCard;
