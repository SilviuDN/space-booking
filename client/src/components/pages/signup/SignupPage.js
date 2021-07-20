
// import SignupForm from './SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'
import { Component } from 'react';
import ServiceAuth from '../../services/auth.service'

class SignupPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            surname: '',
            personalId: ''
        }

        this.serviceAuth = new ServiceAuth()
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }


    handleSubmit = (e) => {
        e.preventDefault()
        // const user = { email, pwd, name, surname, personalId } = this.state

        this.serviceAuth.signup(this.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))


    }


    render = () => {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.email} type="email" placeholder="Enter email" name='email' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.pwd} type="password" placeholder="Password" name='password' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.name} type="text" placeholder="name" name='name' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="surname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.text} type="text" placeholder="Surname" name='surname' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="personalId">
                        <Form.Label>Personal Id</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.personalId} type="text" placeholder="personalId" name='personalId' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={this.handleInput} value={this.state.checkBox} type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default SignupPage