import { Navbar, Nav, Container } from 'react-bootstrap'
// import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import { Modal } from 'react-bootstrap'
import Login from '../../pages/login/login'
import logo from './logo.png'
import './Navigation.css'
import CompanyService from '../../../services/company.service'
// import { useEffect } from 'react'
import { useState } from 'react'

export default function Navigation({ storeUser, history, loggedUser, showAlert }) {
    // this.state = {
    //     isLoggedIn: false,
    //     modal: false,
    //     companyId: ''

    // }
    const authService = new AuthService()
    const companyService = new CompanyService()

    const [modal, setModal] = useState(false)


    // useEffect(() => {
    //     console.log('hi')        chekfor this variable
    // }, [modal]);

    // useEffect(() => {
    //     console.log('hi')        didmount
    // }, []);

    // useEffect(() => {
    //     console.log('hi')        didupdate
    // });


    // const setModalState = (action) => this.setState({ modal: action })


    const loadMyCompany = (user_id) => {

        companyService
            .getMyCompany(user_id)
            .then(res => {
                history.push(`/companies/${res.data[0]._id}`)
            })
            .catch(err => console.log(err))
    }



    const logout = () => {
        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }



    return (
        <>
            <Navbar className="blue-nav py-2" variant="dark" expand="md" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            {/* <Link className="nav-link" to="/"></Link> */}

                            {!loggedUser
                                ?
                                <>
                                    <Link className="nav-link" to="/signup/n">Signup</Link>
                                    <Link className="nav-link" to="/" onClick={() => setModal(true)}>Login</Link>
                                    <span className="nav-link">¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!</span>
                                </>
                                :

                                loggedUser.role === 'moderator' ?

                                    <>
                                        <Link className="nav-link" to={`/flights/new`}> New Flight</Link>
                                        <span className="nav-link cursor-pointer" onClick={() => loadMyCompany(loggedUser._id)}> MyCompany</span>
                                        <Link className="nav-link" to={`/discover`}> Discover</Link>
                                        <span className="nav-link cursor-pointer" onClick={() => logout()}>Log out</span>

                                        <Link className="nav-link" to={`/users/${loggedUser._id}`}>¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!</Link>
                                    </>

                                    :

                                    loggedUser.role === 'admin' ?
                                        <>
                                            <Link className="nav-link" to={`/admin`}> Admin panel</Link>
                                            <Link className="nav-link" to={`/discover`}> Discover</Link>
                                            <span className="nav-link cursor-pointer" onClick={logout}>Log out</span>
                                            <Link className="nav-link" to={`/users/${loggedUser._id}`}>¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!</Link>
                                        </>
                                        :

                                        <>

                                            <Link className="nav-link" to={`/discover`}> Discover</Link>
                                            <span className="nav-link cursor-pointer" onClick={logout}>Log out</span>
                                            <Link className="nav-link" to={`/users/${loggedUser._id}`}>¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!</Link>
                                        </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={modal} onHide={() => setModal(false)}>
                <Modal.Header className="text-center">
                    <Modal.Title className="w-100" >Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login updateModal={setModal} storeUser={storeUser} history={history} showAlert={showAlert} />
                </Modal.Body>
            </Modal>

        </>
    )
}