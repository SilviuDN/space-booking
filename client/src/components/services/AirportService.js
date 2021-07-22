import axios from 'axios'

class AirportService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/airport',
            withCredentials: true
        })
    }

    getAirports = () => this.app.get('/airports')

    airportDetails = (airportId) => this.app.get(`/${airportId}`)

    editAirport = (state) => this.app.put(`/${state.company_id}/edit`, state)

    deleteAirport = (airport_id) => this.app.delete(`/${airport_id}/delete`)
}
export default AirportService