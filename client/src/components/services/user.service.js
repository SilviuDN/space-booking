import axios from 'axios'

class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            withCredentials: true
        })
    }


    userEdit = (state, userId) => this.app.put(`/user/${userId}/edit`, state)

    userDetails = (user_id) => this.app.get(`/user/${user_id}/details`)

    userDelete = (user_id,) => this.app.delete(`/user/${user_id}/delete`)

    getUsers = () => this.app.get('/user')

    searchBox = (string) => this.app.get(`/user/search/${string}`)


    setflightInUser = (userId, flightId) => this.app.put(`/user/${userId}/bought/${flightId}/update`)

    updateRatedFlights = (user_id, flight_id) => this.app.put(`/user/${user_id}/${flight_id}/rate`)



}
export default UserService