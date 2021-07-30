import { Navbar, Nav, Container } from 'react-bootstrap'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../components/services/auth.service'
import { Modal } from 'react-bootstrap'
import Login from '../../components/pages/login/login'
import logo from './logo.png'
import './Navigation.css'
import CompanyService from '../../components/services/company.service'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            modal: false,
            companyId: ''

        }
        this.authService = new AuthService()
        this.CompanyService = new CompanyService()
    }


    setModalState = (action) => this.setState({ modal: action })


    loadMyCompany = (user_id) => {

        this.CompanyService
            .getMyCompany(user_id)
            .then(res => {
                this.props.history.push(`/companies/${res.data[0]._id}`)
            })
            .catch(err => console.log(err))
    }



    logout = () => {
        this.authService
            .logout()
            .then(() => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }





    render() {


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

                                {!this.props.loggedUser
                                    ?
                                    <>
                                        <Link className="nav-link" to="/signup/n">Signup</Link>
                                        <Link className="nav-link" to="/" onClick={() => this.setModalState(true)}>Login</Link>
                                        <span className="nav-link">¡Hi, {this.props.loggedUser ? this.props.loggedUser.name : 'Terricol@ :-D'}!</span>
                                    </>
                                    :

                                    this.props.loggedUser.role === 'moderator' ?

                                        <>
                                            <Link className="nav-link" to={`/flights/new`}> New Flight</Link>
                                            <span className="nav-link cursor-pointer" onClick={() => this.loadMyCompany(this.props.loggedUser._id)}> MyCompany</span>
                                            <span className="nav-link cursor-pointer" onClick={this.logout}>Log out</span>

                                            <Link className="nav-link" to={`/users/${this.props.loggedUser._id}`}>¡Hi, {this.props.loggedUser ? this.props.loggedUser.name : 'Terricol@ :-D'}!</Link>
                                        </>

                                        :

                                        <>

                                            <Link className="nav-link" to={`/discover`}> Discover</Link>
                                            <span className="nav-link cursor-pointer" onClick={this.logout}>Log out</span>
                                            <Link className="nav-link" to={`/users/${this.props.loggedUser._id}`}>¡Hi, {this.props.loggedUser ? this.props.loggedUser.name : 'Terricol@ :-D'}!</Link>
                                        </>
                                }

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