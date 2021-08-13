import './App.css'
import Routes from './routes'
import AuthService from './../services/auth.service'
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './layout/Navigation/Navigation'
// import Footer from '../layout/Footer/Footer';
import Alert from './shared/Alert/Alert'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
    const [loggedUser, setLoggedUser] = useState(null)
    const [toast, setToast] = useState({ text: '', show: false })

    const storeUser = loggedUser => setLoggedUser(loggedUser)
    const showAlert = text => setToast({ text: text, show: true })

    useEffect(() => {
        const authService = new AuthService()
        const getUser = () => {
            authService
                .isLoggedIn()
                .then(res => storeUser(res.data))
                .catch(err => console.log(err))
        }
        getUser()
    }, [])

    // componentDidMount = () => this.getUser()

    console.log(loggedUser)
    return (
        <>
            <Switch>
                <Route path="/" render={props => <Navigation storeUser={setLoggedUser} loggedUser={loggedUser} {...props} showAlert={showAlert} />} />
            </Switch>

            <Routes storeUser={storeUser} loggedUser={loggedUser} showAlert={showAlert} />

            <Alert show={toast.show} text={toast.text} closeAlert={() => setToast({ ...toast, show: false })} />

            {/* <Footer loggedUser={this.state.loggedUser} /> */}
        </>
    )
}

export default App
