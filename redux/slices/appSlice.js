import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  featured_playlists: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFeaturedPlaylists: (state, action) => {
      state.featured_playlists = action.payload;
    },
  },
});

export const { setUser, setFeaturedPlaylists } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectFeaturedPlaylists = (state) => state.app.featured_playlists;

export default appSlice.reducer;
