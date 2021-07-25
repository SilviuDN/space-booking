import axios from 'axios'

class DestinationService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/destination',
            withCredentials: true
        })
    }

    getDestinations = () => this.app.get('/')

    getDestination = destination_id => this.app.get(`/${destination_id}`)

    saveDestination = destination_info => this.app.post('/new', destination_info)

    editDestination = destination_info => this.app.put(`/${destination_info.destination_id}/edit`, destination_info)

    deleteDestination = destination_id => this.app.delete(`/${destination_id}/delete`)

    searchDestination = searchString => this.app.get(`/search/${searchString}`)

    searchBoxData = (searchString) => this.app.get(`/destinationsData/${searchString}`)
}

export default DestinationService