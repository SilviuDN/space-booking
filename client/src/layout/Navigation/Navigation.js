import { Navbar, Nav, Container } from 'react-bootstrap'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../components/services/auth.service'
import { Modal } from 'react-bootstrap'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            modal: false
        }
        this.authService = new AuthService()
    }


    // storeUser, loggedUser
    // const authService = new AuthService()

    logout = () => {
        this.authService
            .logout()
            .then(() => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {

        console.log(this.props)

        return (
            <>
                <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '30px' }}>
                    <Container>
                        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/">Inicio</Link>
                                {/* <Link className="nav-link" to="/"></Link> */}

                                {!this.props.loggedUser
                                    ?
                                    <>
                                        <Link className="nav-link" to="" onClick={() => this.props.history.push('/signup/n')}>Registro</Link>
                                        <Link className="nav-link" to="" onClick={() => this.setState({ modal: true })}>Login</Link>
                                    </>
                                    :
                                    <>
                                        <Link className="nav-link" to="/mi-perfil">Perfil</Link>
                                        <span className="nav-link" onClick={this.logout}>Cerrar sesión</span>
                                    </>
                                }

                                <span className="nav-link">¡Hola, {this.props.loggedUser ? this.props.loggedUser.username : 'invitad@'}!</span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <CoasterForm refreshCoasters={this.loadCoasters} closeModal={() => this.setState({ modal: false })} /> */}
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Navigation