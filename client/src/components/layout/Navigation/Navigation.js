import PasswordRecover from '../../pages/login/recoverPassword'
import CompanyService from '../../../services/company.service'
import AuthService from '../../../services/auth.service'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Login from '../../pages/login/login'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Navigation.css'


export default function Navigation({ storeUser, history, loggedUser, showAlert, setLoginPop }) {
    const authService = new AuthService()
    const companyService = new CompanyService()

    const [loginModal, setLoginModal] = useState(false)
    const [recoverPassModal, setRecoverPassModal] = useState(false)

    // useEffect(() => {
    //     console.log('hi')        chekfor this variable
    // }, [modal]);

    // useEffect(() => {
    //     console.log('hi')        didmount
    // }, []);

    // useEffect(() => {
    //     console.log('hi')        didupdate
    // });


    const setModalState = (action) => setLoginModal(action)


    useEffect(() => {

        setLoginPop(() => setModalState)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const loadMyCompany = user_id => {
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
            .then(() => storeUser(null))
            .catch(err => console.log(err))
    }


    return (
        <>
            <Navbar className="blue-nav py-2" variant="dark" expand="md" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img alt="" src={logo} height="50" className="d-inline-block align-top" />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>

                            <Link className="nav-link" to={`/discover`}>
                                {' '}
                                Discover
                            </Link>

                            {/* <Link className="nav-link" to="/"></Link> */}

                            {!loggedUser ? (
                                <>
                                    <Link className="nav-link" to="/signup/n">
                                        Signup
                                    </Link>
                                    <Link className="nav-link" to={history.location.pathname} onClick={() => setLoginModal(true)}>
                                        Login
                                    </Link>
                                    <span className="nav-link">¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!</span>
                                </>
                            ) : loggedUser.role === 'moderator' ? (
                                <>
                                    <Link className="nav-link" to={`/flights/new`}>
                                        {' '}
                                        New Flight
                                    </Link>
                                    <span className="nav-link cursor-pointer" onClick={() => loadMyCompany(loggedUser._id)}>
                                        {' '}
                                        MyCompany
                                    </span>

                                    <span className="nav-link cursor-pointer" onClick={() => logout()}>
                                        Log out
                                    </span>

                                    <Link className="nav-link" to={`/users/${loggedUser._id}`}>
                                        ¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!
                                    </Link>
                                </>
                            ) : loggedUser.role === 'admin' ? (
                                <>
                                    <Link className="nav-link" to={`/admin`}>
                                        {' '}
                                        Admin panel
                                    </Link>
                                    <span className="nav-link cursor-pointer" onClick={logout}>
                                        Log out
                                    </span>
                                    <Link className="nav-link" to={`/users/${loggedUser._id}`}>
                                        ¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span className="nav-link cursor-pointer" onClick={logout}>
                                        Log out
                                    </span>
                                    <Link className="nav-link" to={`/users/${loggedUser._id}`}>
                                        ¡Hi, {loggedUser ? loggedUser.name : 'Terricol@ :-D'}!
                                    </Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={loginModal} onHide={() => setLoginModal(false)}>
                <Modal.Header className="text-center">
                    <Modal.Title className="w-100">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login setLoginModal={setLoginModal} storeUser={storeUser} history={history} showAlert={showAlert} recoverPassModal={setRecoverPassModal} />
                </Modal.Body>
            </Modal>

            <Modal show={recoverPassModal} onHide={() => setRecoverPassModal(false)}>
                <Modal.Header className="text-center">
                    <Modal.Title className="w-100">Password recovery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PasswordRecover recoverPassModal={setRecoverPassModal} history={history} showAlert={showAlert} />
                </Modal.Body>
            </Modal>
        </>
    )
}
