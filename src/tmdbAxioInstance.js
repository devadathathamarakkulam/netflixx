import axios from "axios";

const tmdbAxioinstance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default tmdbAxioinstance;