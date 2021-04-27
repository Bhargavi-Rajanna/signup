import axios from "axios";
import {getData} from "./getData";

export const postData =async (data)=>{
    const url = 'https://demo-api.now.sh/users';
    await axios.post(url, data)
        .then(response => {
                console.log('response from first request', response.data)
                setTimeout(() => getData(), 4000);
            }
        )
}
