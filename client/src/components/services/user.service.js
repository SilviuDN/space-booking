import axios from 'axios'

class UserService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    userDetails = (user_id) => this.app.get(`/user/${user_id}/details`)
    userEdit = (state) => this.app.put(`/user/${state.user_id}/edit`, state)
    userDelete = (user_id) => this.app.delete(`/user/${user_id}/delete`)
    getUsers = () => this.app.get('/admin/users')
}
export default UserService