import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Form } from "react-bootstrap";


const Footer = ({ loggedUser }) => {

    const style = { background: '#212529', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '.7em', position: 'fixed', bottom: 0, padding: 5, width: '100%' }

    return (

        <footer style={style}>

            <Link className="color-light" to="/signup/y" > SignUp for Companies </Link>
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="3">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            la la la al al.
                        </p>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <Link className="color-light" to="/signup/y" > SignUp for Companies </Link>
                            </li>

                        </ul>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            la la la la.
                        </p>
                    </Col>
                    <Col md="3">
                        <h5 className="title">Contact Us</h5>

                        <Form className={'pb-5'}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Your name" name='name' />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="email" placeholder="email" name='email' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="name">

                                <Form.Control type="text" placeholder="name" name='name' />
                            </Form.Group>
                        </Form>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.spacebooking.world"> SpaceBooking.World </a>
                    </Col>

                </Row>
            </Container>


        </footer>
    )
}

export default Footer