
//import axios
import axios from "axios";

//set the base URL for axios
const api = axios.create({
    baseURL: "http://localhost:5000/api/auth"
})

export default api;