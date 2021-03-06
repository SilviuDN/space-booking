import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            withCredentials: true
        })
        this.axios = axios
    }


    login = (email, pwd) => this.app.post('/login', { email, pwd })

    signup = (user) => this.app.post('/signup', { ...user })

    logout = () => this.app.get('/logout')

    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService