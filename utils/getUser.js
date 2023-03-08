import axios from "axios";



async function getUser(){
    try{
        const r = await axios.get('	https://api.spotify.com/v1/me',{
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

export default getUser