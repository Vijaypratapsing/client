import axios from "axios";

const axiosRequest= axios.create({
    baseURL: "https://api-service-bzwc.onrender.com",
    withCredentials: true
})

export default axiosRequest;