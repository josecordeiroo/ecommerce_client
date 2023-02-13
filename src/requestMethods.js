import axios from "axios";

const BASE_URL = "htttp://localhost:5000/api/"

export const publicRequest = axios.create({
    baseUrl: BASE_URL
})