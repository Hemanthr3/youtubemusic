import { selectPlayer, setPlayer } from "@/redux/slices/appSlice";
import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CurrentPlayercard from "../currentsongcard";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import playNext from "@/utils/PlayNeext";
import PauseSong from "@/utils/PauseSong";
import playPrevious from "@/utils/PlayPrevious";

const Player = () => {
  const playerState = useSelector(selectPlayer);
  const [up, setUp] = useState(false);
  const [play, setPlay] = useState(true);
  const dispatch = useDispatch();

  const handlePrevious = async () => {
    const feedback = await playPrevious();
    console.log(feedback);
  };

  const handlePlayNext = async () => {
    const feedback = await playNext();
    console.log(feedback);
  };

  const handlePause = async () => {
    const feeback = await PauseSong();
    console.log(feeback);
    dispatch(setPlayer(null));
    setPlay(false);
  };
  return (
    <div
      className={`${
        playerState?.is_playing ? "flex" : "hidden"
      }  bottom-0 w-full pt-8 pb-4 md:py-3 bg-gray-900 px-4 sticky  justify-between items-center text-white z-50`}
    >
      <div
        className={`transition-all absolute -top-5 left-[50%] translate-x-[-50%] md:translate-x-0 md:static flex items-center gap-3`}
      >
        <div className="flex gap-6 items-center">
          <button
            onClick={handlePrevious}
            className="px-3 md:px-0 py-3 md:py-0 bg-red-700 md:bg-transparent rounded-full md:rounded-none"
          >
            <MdSkipPrevious className="text-2xl" />
          </button>
          <button
            onClick={handlePause}
            className="px-3 md:px-0 py-3 md:py-0 bg-red-700 md:bg-transparent rounded-full md:rounded-none"
          >
            {!play ? <FaPlay /> : <FaPause />}
          </button>
          <button
            onClick={handlePlayNext}
            className="px-3 md:px-0 py-3 md:py-0 bg-red-700 md:bg-transparent rounded-full md:rounded-none"
          >
            <MdSkipNext className="text-2xl" />
          </button>
        </div>
        <p className="text-xs text-white/50 hidden md:block">2:09 / 3:09</p>
      </div>
      <div className="flex md:flex-1 justify-center items-center">
        <CurrentPlayercard player={playerState} />
      </div>
      <div>
        <button
          className="w-9 h-9 bg-white/30 flex items-center justify-center rounded-full"
          onClick={() => setUp(!up)}
        >
          <GoChevronUp />
        </button>
      </div>
      <div
        className={`player_more_info_modal w-full inset-x-0 z-5 h-[100vh] bg-black/90 fixed grid grid-cols-3 ${
          !up ? "bottom-[-1000px]" : "bottom-[-60px]"
        }`}
      >
        <div className="player-song-big-section col-span-2 flex items-center justify-center">
          <div className="w-[75%] h-[75%] flex items-center flex-col">
            <div className="player-type-switcher w-auto mx-auto my-6 bg-gray-300/50 rounded-l-full rounded-r-full">
              <button className="px-4 py-1 bg-white/60 text-white rounded-full">
                Audio
              </button>
              <button className="px-4 py-1 bg-transparent text-white">
                Video
              </button>
            </div>
            <div className="player-modal-cover w-[400px] h-[400px] bg-white/40 mx-auto my-auto">
              <img
                src="https://lh3.googleusercontent.com/ILK9oEbtJ4NKvJQTNamcDhS9oukw2P6_Q_u0y5lSqzo-evxwOnrRun3nvlKQVI76H7hkoefl92qRfN9q=w544-h544-l90-rj"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="player-modal-right">
          <div className="player-current-song-related-tracks">
            <div className="track-meta-header">
              <button>Up next</button>
              <button>Lyrics</button>
              <button>Related</button>
            </div>
            <div className="related-tracks-list">
              <div className="related-track-list-card">
                <div className="related-track-cover"></div>
                <div className="related-track-meta">
                  <div>
                    <h2>Track Name</h2>
                    <p>Track Descriptipn</p>
                  </div>
                  <p>02:59</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
