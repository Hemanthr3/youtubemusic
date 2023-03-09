import Container from "@/components/container";
import Header from "@/components/header";
import ListMusicCard from "@/components/listcard";
import Player from "@/components/player";
import Section from "@/components/section";
import {
  selectFeaturedPlaylists,
  selectFollowingArtsis,
  selectUser,
  setFeaturedPlaylists,
  setFollowingArtists,
  setPlayer,
  setUser,
} from "@/redux/slices/appSlice";
import getFollowedArtsist from "@/utils/following-artists";
import getFeaturedPlaylists from "@/utils/get-featured-playlists";
import getPlayer from "@/utils/getPlayer";
import getUser from "@/utils/getUser";
import jsCookies from "js-cookies";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const featuredPlaylists = useSelector(selectFeaturedPlaylists);
  const followingArtists = useSelector(selectFollowingArtsis);

  console.log("Artissts", followingArtists);

  console.log(`Featured `, featuredPlaylists);

  useEffect(() => {
    document.body.addEventListener("scroll", (e) => {
      setScroll(e.target.scrollTop);
      console.log("scrollig");
    });

    async function fetchUser() {
      const u = await getUser();
      dispatch(setUser(u));
      console.log(u);
    }

    async function fetchFollowedArtists() {
      const fartists = await getFollowedArtsist();
      console.log("artists", fartists);
      dispatch(setFollowingArtists(fartists.artists.items));
    }

    async function fetchPlayer(){
      const playeState = await getPlayer();
      console.log('player state',playeState);
      dispatch(setPlayer(playeState));
    }

    async function fetchFeaturedPlaylists() {
      const featured = await getFeaturedPlaylists();
      console.log(featured);
      dispatch(setFeaturedPlaylists(featured.playlists.items));
    }

    if (
      localStorage.getItem("ACCESS_TOKEN") &&
      localStorage.getItem("REFRESH_TOKEN")
    ) {
      fetchUser();
      fetchFeaturedPlaylists();
      fetchFollowedArtists();
      fetchPlayer();
    }
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh] main relative">
        <Header scroll={scroll} />
        <Container>
          <section>
            <ul className="flex gap-4  ">
              <li>
                <button className=" px-3 py-1 rounded-md bg-white/30 text-white">
                  Relax
                </button>
              </li>
              <li>
                <button className=" px-3 py-1 rounded-md bg-white/30 text-white">
                  Enerzige
                </button>
              </li>
              <li>
                <button className=" px-3 py-1 rounded-md bg-white/30 text-white">
                  Commute
                </button>
              </li>
              <li>
                <button className=" px-3 py-1 rounded-md bg-white/30 text-white">
                  Workout
                </button>
              </li>
              <li>
                <button className=" px-3 py-1 rounded-md bg-white/30 text-white">
                  Focus
                </button>
              </li>
            </ul>
            <div>
              <div className="hero_section_header md:flex justify-between my-12">
                {user && (
                  <div className="header-avatar w-32 h-32 group border-2 border-white rounded-full overflow-hidden">
                    <img
                      src={user.images[0].url}
                      alt=""
                      className="w-full h-full rounded-full shadow-2xl  group-hover:scale-110 transition-all"
                    />
                  </div>
                )}
                <div className="header-text-content flex-1 text-white mt-3 md:mt-0 md:ml-12">
                  <h2 className="text-md text-white/50">
                    MUSIC TO GET YOU STARTED
                  </h2>
                  {user && (
                    <h1 className="text-4xl font-semibold">
                      Welcome {user.display_name}
                    </h1>
                  )}
                </div>
                <div className="section-nav-controls flex items-center gap-4 mt-3 md:mt-0">
                  <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                    <FiChevronLeft className="text-white" />
                  </button>
                  <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                    <FiChevronRight className="text-white" />
                  </button>
                </div>
              </div>
              <div className="hero-section-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
                {featuredPlaylists.map((featured_playlist, i) => {
                  return <ListMusicCard key={i} playlist={featured_playlist} />;
                })}
              </div>
            </div>
          </section>
          {followingArtists.length && (
            <Section name="Your Top Artists" items={followingArtists[0]} />
          )}
        </Container>
        <Player/>
      </main>
    </>
  );
}
