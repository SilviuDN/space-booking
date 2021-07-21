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

        const { username, pwd } = this.state

        this.authService
            .login(username, pwd)
            .then(logedUser => {

                this.props.storeUser(logedUser.data)
                this.props.updateModal(false)
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err))
    }



    render() {

        return (

            <Container>

                <Row>

                    <Col md={{ span: 10, offset: 1 }} className={'pb-4'}>


                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group controlId="email">
                                <Form.Label>User</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.pwd} onChange={this.handleInputChange} name="pwd" />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Login</Button>

                        </Form>

                        <hr />

                        <Link to="/">
                            <Button variant="dark" >Back</Button>
                        </Link>

                        <hr />

                        <p><small>Not registered ? signup <Link to="/signup/n" onClick={() => this.props.updateModal(false)}>here</Link></small></p>
                        <small>Or new Company?  register <Link to="/signup/y" onClick={() => this.props.updateModal(false)}>here</Link></small>
                    </Col>
                </Row>

            </Container>

        )
    }
}


export default Login