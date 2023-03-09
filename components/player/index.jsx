import { selectPlayer } from "@/redux/slices/appSlice";
import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useSelector } from "react-redux";
import CurrentPlayercard from "../currentsongcard";

const Player = () => {
  const playerState = useSelector(selectPlayer);

  return (
    <div
      className={`${
        playerState?.is_playing ? "flex" : "hidden"
      }  bottom-0 w-full py-2 bg-gray-900 px-4 sticky  justify-between items-center text-white`}
    >
      <div className="flex items-center gap-3">
        <div className="flex gap-6 items-center">
          <button>
            <MdSkipPrevious className="text-2xl" />
          </button>
          <button>{!playerState?.is_playing ? <FaPlay /> : <FaPause />}</button>
          <button>
            <MdSkipNext className="text-2xl" />
          </button>
        </div>
        <p className="text-xs text-white/50">2:09 / 3:09</p>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <CurrentPlayercard player={playerState} />
      </div>
      <div>right</div>
    </div>
  );
};

export default Player;
