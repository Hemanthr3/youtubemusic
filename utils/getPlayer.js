import axios from "axios";



async function getPlayer(){
    try{
        const r = await axios.get('	https://api.spotify.com/v1/me/player',{
            headers:{
                'Authorization':`Bearer `+localStorage.getItem('ACCESS_TOKEN')
            }
        })
        return r.data;
    }
    catch(e){
        console.log(e)
    }
}

export default getPlayer