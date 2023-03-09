import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  featured_playlists: [],
  followed_artists: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFollowingArtists: (state, action) => {
      state.followed_artists = [...state.followed_artists, action.payload];
    },
    setFeaturedPlaylists: (state, action) => {
      state.featured_playlists = action.payload;
    },
  },
});

export const { setUser, setFeaturedPlaylists, setFollowingArtists } =
  appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectFeaturedPlaylists = (state) => state.app.featured_playlists;
export const selectFollowingArtsis = (state) => state.app.followed_artists;

export default appSlice.reducer;
