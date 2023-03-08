import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi';

function Header({scroll}) {
  
  return (
    <div className={`backdrop-blur-md p-4 mx-auto flex justify-between sticky top-0 z-50 ${scroll>0 && "bg-black/70"}`}>
       <a href="#">
        <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt="yt-logo" />
       </a>
       <nav>
            <ul className='flex gap-10 flex-1 items-center'>
                <li><a href="#" className='text-xl text-white font-semibold'>Home</a></li>
                <li><a href="#" className='text-xl text-white/50 font-semibold'>Explore</a></li>
                <li><a href="#" className='text-xl text-white/50 font-semibold'>Library</a></li>
                <li><a href="#" className='text-xl text-white/50 font-semibold'>Upgrade</a></li>
                <li><button className='flex items-center gap-3'>
                    <HiOutlineSearch className='text-white/50 text-xl font-bold'/>
                    <span className='text-xl text-white/50 font-semibold'>Search</span>
                    </button></li>
                
            </ul>
       </nav>
       <div>
        <a href="http://localhost:5001">
        <div className="avatar w-8 h-8 bg-gray-300 rounded-full"></div>
        </a>
       </div>
    </div>
  )
}

export default Header