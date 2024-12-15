import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "4aae5af4d77b4f4f87043d210825740d"
    }
})