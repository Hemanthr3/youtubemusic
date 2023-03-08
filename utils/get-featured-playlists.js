import axios from "axios";

async function getFeaturedPlaylists() {
  try {
    const r = await axios.get(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
        },
      }
    );
    return r.data;
  } catch (e) {
    console.log(e);
  }
}

export default getFeaturedPlaylists;
