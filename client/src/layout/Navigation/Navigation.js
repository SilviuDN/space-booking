import { Navbar, Nav, Container } from 'react-bootstrap'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../components/services/auth.service'
import { Modal } from 'react-bootstrap'
import Login from '../../components/pages/login/login'
import logo from './logo.png'
import './Navigation.css'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            modal: false
        }
        this.authService = new AuthService()
    }


    setModalState = (action) => this.setState({ modal: action })


    logout = () => {
        this.authService
            .logout()
            .then(() => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {


        return (
            <>
                <Navbar className="blue-nav py-4" variant="dark" expand="md" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}

                                height="30"
                                className="d-inline-block align-top"
                            />{' '}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                {/* <Link className="nav-link" to="/"></Link> */}

                                {!this.props.loggedUser
                                    ?
                                    <>
                                        <Link className="nav-link" to="/signup/n">Signup</Link>
                                        <Link className="nav-link" to="/" onClick={() => this.setModalState(true)}>Login</Link>
                                    </>
                                    :
                                    <>
                                        <Link className="nav-link" to={`/users/${this.props.loggedUser._id}`}> Profile</Link>
                                        <span className="nav-link" onClick={this.logout}>Log out</span>
                                    </>
                                }

                                <span className="nav-link">¡Hi, {this.props.loggedUser ? this.props.loggedUser.name : 'Terricol@ :-D'}!</span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={this.state.modal} onHide={() => this.setModalState(false)}>
                    <Modal.Header className="text-center">
                        <Modal.Title className="w-100" >Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Login updateModal={this.setModalState} storeUser={this.props.storeUser} history={this.props.history} showAlert={this.props.showAlert} setModalState={this.setModalState} />
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Navigation