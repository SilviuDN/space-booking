import axios from 'axios'

class FlightService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/flight',
            withCredentials: true
        })
    }

    getFlights = () => this.app.get('/flights')

    getFlight = flight_id => this.app.get(`/${flight_id}`)

    saveFlight = flight_info => this.app.post('/new', flight_info)

    editFlight = flight_info => this.app.put(`/${flight_info.flight_id}/edit`, flight_info)

    deleteFlight = flight_id => this.app.delete(`/${flight_id}/delete`)

    searchFlight = searchString => this.app.get(`/search/${searchString}`)

    searchTravels = (airport, destination, fromDate, toDate) => this.app.get(`/search/travels/${airport}/${destination}/${fromDate}/${toDate}`)
}

export default FlightService