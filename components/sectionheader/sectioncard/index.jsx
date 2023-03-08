import React from 'react'
import { FaPlay } from "react-icons/fa";
const SectionCard = () => {
  return (
    <div className='w-full group'>
        <div className="song-card-cover w-full  bg-gray-300 relative rounded-md">
            <img src="https://yt3.ggpht.com/jxySJJ5HYa_qzwn5f-l9Ham0NcO3PzxuUmpD11B-QA5vAKM1_54TzM4pgM5UswNjWOcTttMT0_jQ=s576" alt="" className='rounded'/>
            <div className="overlay w-full h-full group-hover:bg-black/30 absolute z-5 inset-0">
            <button className="scale-0 group-hover:scale-100 transition-all absolute bottom-6 w-10 h-10 right-5 group-hover:bg-black/70 rounded-full flex items-center justify-center">
            <FaPlay className="text-white"/>
          </button>
            </div>
           
        </div>
        <div className="song-card-footer mt-2">
            <h3 className='text-white'>Album name</h3>
            <p className='text-white/70'>Album description</p>
        </div>
    </div>
  )
}

export default SectionCard