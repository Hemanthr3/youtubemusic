import axios from "axios";

async function playPrevious() {
  try {
    const r = await axios.post(
      `https://api.spotify.com/v1/me/player/previous?device_id=${localStorage.getItem(
        "DEVICE_ID"
      )}`,
      {},
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

export default playPrevious;
