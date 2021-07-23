import { Navbar, Nav, Container } from 'react-bootstrap'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../components/services/auth.service'
import { Modal } from 'react-bootstrap'
import Login from '../../components/pages/login/login'
import logo from './logo.png'

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
                <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '30px' }}>
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
                                <Link className="nav-link" to="/">Inicio</Link>
                                {/* <Link className="nav-link" to="/"></Link> */}

                                {!this.props.loggedUser
                                    ?
                                    <>
                                        <Link className="nav-link" to="/signup/n">Registro</Link>
                                        <Link className="nav-link" to="" onClick={() => this.setModalState(true)}>Login</Link>
                                    </>
                                    :
                                    <>
                                        <Link className="nav-link" to="/mi-perfil">Perfil</Link>
                                        <span className="nav-link" onClick={this.logout}>Cerrar sesión</span>
                                    </>
                                }

                                <span className="nav-link">¡Hola, {this.props.loggedUser ? this.props.loggedUser.name : 'Terricol@ :-D'}!</span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={this.state.modal} onHide={() => this.setModalState(false)}>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Login updateModal={this.setModalState} storeUser={this.props.storeUser} history={this.props.history} showAlert={this.props.showAlert} />
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Navigation