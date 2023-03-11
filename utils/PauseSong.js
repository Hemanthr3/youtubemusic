import axios from "axios";

async function PauseSong() {
  try {
    const r = await axios.put(
      `https://api.spotify.com/v1/me/player/pause?device_id=${localStorage.getItem(
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

export default PauseSong;
