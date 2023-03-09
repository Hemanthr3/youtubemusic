import axios from "axios";

async function playTrack(uri) {
  try {
    const r = await axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${localStorage.getItem(
        "DEVICE_ID"
      )}`,
      {
        context_uri: uri,

        position_ms: 0,
      },
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

export default playTrack;
