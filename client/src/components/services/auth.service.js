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

    signup = (user) => this.app.post('/signup', { ...user })

    newCompany = (companyData, userId) => this.app.post('/new', { ...companyData, userId })

    logout = () => this.app.get('/logout')

    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService