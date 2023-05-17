import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
    key: "cda0e9cc40de4bdc92be94c16cc00783"
    }
});