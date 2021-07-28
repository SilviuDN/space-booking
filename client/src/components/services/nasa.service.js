import axios from 'axios';

class APINasa {
    constructor() {
        this.baseUrl = 'https://images-api.nasa.gov'

        this.app = axios.create({
            baseURL: this.baseUrl,
        })
    }

    searchData = (planet) => this.app.get(`/search?q=${planet}`)
}

export default APINasa

