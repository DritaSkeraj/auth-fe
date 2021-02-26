import axios from 'axios'

const backend = axios.create({
    baseURL: process.env.REACT_APP_DEV_BACKEND_URL, 
    headers: {
        Authorization: `Bearer ${localStorage.getItem["accessToken"]}`
    }
})

export default backend;