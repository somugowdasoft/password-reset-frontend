
//import axios
import axios from "axios";

//set the base URL for axios
const api = axios.create({
    baseURL: "https://password-reset-backend-1-o356.onrender.com/api/auth"
})

export default api;