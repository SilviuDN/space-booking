import axios from 'axios'

class AirportService {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL+'/airport',
            withCredentials: true
        })
    }

    getAirports = () => this.app.get('/airports')

    airportDetails = (airportId) => this.app.get(`/${airportId}`)

    editAirport = (airportObj, airportId) => this.app.put(`/${airportId}/edit`, airportObj)

    deleteAirport = (airport_id) => this.app.delete(`/${airport_id}/delete`)

    searchBoxData = (searchString) => this.app.get(`/airportsData/${searchString}`)

    searchAirport = (string) => this.app.get(`/search/${string}`)
}

export default AirportService