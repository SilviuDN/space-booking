import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'

const Signup = ({ handleInput }) => {

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='pwd' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Surname" name='surname' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Personal Id</Form.Label>
                    <Form.Control type="text" placeholder="personalId" name='personalId' />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )

}

export default Signup;