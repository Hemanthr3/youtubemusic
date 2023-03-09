import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  featured_playlists: [],
  followed_artists: [],
  player_state:null,
  current_uri:null
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUri: (state , action) => {
      state.current_uri = action.payload;
    },
    setFollowingArtists: (state, action) => {
      state.followed_artists = [...state.followed_artists, action.payload];
    },
    setFeaturedPlaylists: (state, action) => {
      state.featured_playlists = action.payload;
    },
    setPlayer: (state, action) => {
      state.player_state = action.payload;
    },
  },
});

export const { setUser, setFeaturedPlaylists, setFollowingArtists,setPlayer,setUri } =
  appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectUri = (state) => state.app.current_uri;
export const selectFeaturedPlaylists = (state) => state.app.featured_playlists;
export const selectFollowingArtsis = (state) => state.app.followed_artists;
export const selectPlayer = (state) => state.app.player_state;

export default appSlice.reducer;
