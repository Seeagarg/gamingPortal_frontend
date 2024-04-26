import axios from 'axios';
import {toast} from 'react-toastify'

// const BACKEND_URL = 'http://5.189.169.12:4080/api'
const BACKEND_URL = '/api'
// const BACKEND_URL = 'https://gaming-portal-backend.vercel.app/api'



export const fetchDataFromBackend=async()=>{
    console.log('here')
    try{
        const response = await axios.get(`${BACKEND_URL}/games`);
        // console.log(response);
        return response;
    }
    catch(err){
        console.log(err)
        toast.error(err.message)
        return err;
    }
}