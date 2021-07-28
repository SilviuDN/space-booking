import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'


class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            pwd: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        const { email, pwd } = this.state

        this.authService
            .login(email, pwd)
            .then(logedUser => {
                this.props.showAlert('Welcome! Successfully logged in')
                this.props.storeUser(logedUser.data)
                this.props.updateModal(false)
                this.props.history.push('/')
            })
            .catch(err => {
                this.props.showAlert('Something went wrong! Retry to logg in')
                console.log(err)
            })
    }



    render() {

        return (

            <Container>

                <Row>

                    <Col md={{ span: 10, offset: 1 }} className={'pb-4'}>


                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group controlId="email">
                                {/* <FloatingLabel
                                controlId="email"
                                label="Email address"
                                type="email" value={this.state.email} onChange={this.handleInputChange} name="email"
                            /> */}
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />

                                {/* </FloatingLabel> */}

                            </Form.Group>

                            <Form.Group controlId="pwd">
                                {/* <FloatingLabel controlId="pwd"
                                    label="Password"
                                    className="mb-3"
                                    type="password"
                                    value={this.state.pwd} onChange={this.handleInputChange} name="pwd"

                                > */}
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" />
                                {/* </FloatingLabel> */}
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} bsPrefix="btn-flat" variant="primary" type="submit">Login</Button>

                        </Form>

                        <hr />

                        <Link to="/" onClick={() => this.props.setModalState(false)}>
                            <Button bsPrefix="btn-flat" variant="primary" style={{ marginTop: '20px', width: '100%' }} >Cancel</Button>
                        </Link>

                        <hr />

                        <p align="center"><small>If you have not yet registered you can do so by clicking on the following link: <Link to="/signup/n" onClick={() => this.props.updateModal(false)}> I'm not registered yet. </Link></small></p>
                        {/* <small>Or new Company?  register <Link to="/signup/y" onClick={() => this.props.updateModal(false)}>here</Link></small> */}
                    </Col>
                </Row>

            </Container >

        )
    }
}


export default Login