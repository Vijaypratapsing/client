import axios from "axios";

const axiosRequest= axios.create({
    baseURL: "https://api-service-bzwc.onrender.com",
    //baseURL: "http://localhost:8080",
    withCredentials: true
})

export default axiosRequest;