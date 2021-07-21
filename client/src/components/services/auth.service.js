import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
        this.axios = axios
    }

    login = (username, pwd) => this.app.post('/login', { username, pwd })

    signup = (user, formData) => {
        return this.app.post('/signup/false', { ...user })
            .then(response => {


                this.app.post(`/uploadImg/${response.data._id}`, formData, { headers: { 'content-type': 'multipart/form-data' } })
                    .then(response => response)
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    logout = () => this.app.get('/logout')

    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService