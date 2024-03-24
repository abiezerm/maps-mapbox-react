import axios from "axios";

const searchApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    
    params: {
        limit: 5,
        country: "do",
        language: "es",
        access_token: import.meta.env.VITE_MAP_ACCESS_TOKEN
    },
});

export default searchApi;