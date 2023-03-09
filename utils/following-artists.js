import axios from "axios";

async function getFollowedArtsist() {
  try {
    const r = await axios.get(
      `https://api.spotify.com/v1/me/following?type=artist`,
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

export default getFollowedArtsist;
