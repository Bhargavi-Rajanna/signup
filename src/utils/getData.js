import axios from "axios";

export const getData = async()=>{
    const url = 'https://demo-api.now.sh/users'
    await axios.get(url)
        .then( res => {
                console.log(" console.log('response from first request', response)", res.data);
            }
        )
}