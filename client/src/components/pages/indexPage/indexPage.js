// import { Link } from 'react-router-dom';
import { Component } from 'react'
import { Carousel, Row, Col, Button, Form, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import './IndexPage.css'
import b1 from './b1.png'
import b2 from './b2.png'
import b3 from './b3.png'
import b4 from './b4.png'
import a1 from './a1.png'
import a2 from './a2.png'
import a3 from './a3.png'
import a4 from './a4.png'
import blueline from './blueline.png'
import pinkline from './pinkline.png'
import destinations from './destinations.jpg'
import IndexSearchPanel from "./indexSearchPanel"

class IndexPage extends Component {

    constructor() {
        super()
        this.state = {
        }
    }




    render() {
        const style = { background: '#1f2745', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '.7em', bottom: 0, padding: 5, width: '100%' }
        return (

            <>

                <Container fluid className="all">
                    <IndexSearchPanel />
                    <Carousel fade controls={false} >

                        <Carousel.Item >
                            <img
                                className="d-block  c "
                                src={c1}
                                alt="First slide"
                            />

                        </Carousel.Item >
                        <Carousel.Item >
                            <img
                                className="d-block  c"
                                src={c2}
                                alt="Second slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block  c"
                                src={c3}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>

                    <Row>
                        <Col xs={6} md={3} >
                            <p align="center"><img
                                className="d-block  b"
                                src={b1}
                                alt="b1"
                            /></p>
                        </Col>
                        <Col xs={6} md={3}>
                            <p align="center"><img
                                className="d-block  b"
                                src={b2}
                                alt="b2"
                            /></p>
                        </Col>
                        <Col xs={6} md={3}>
                            <p align="center"><img
                                className="d-block  b"
                                src={b3}
                                alt="b3"
                            /></p>
                        </Col>
                        <Col xs={6} md={3}>
                            <p align="center"> <img
                                className="d-block  b"
                                src={b4}
                                alt="b4"
                            /></p>
                        </Col>
                    </Row>


                    <h3 id="why" align="center">Why People Choos Us</h3>
                    <h2 id="our" align="center">Our Advantages</h2>
                    <p align="center"><img src={pinkline} alt="line" /></p>

                    <Row  >
                        <Col sm={6} md={3} >
                            <p align="center"><img
                                className="d-block  a"
                                src={a1}
                                alt="b1"
                            /></p>
                            <h4 align="center">The Most Reliable
                                Airlines</h4>
                            <p align="center"><img src={blueline} alt="line" /></p>
                            <p align="center">We cooperate only with the most reliable airlines who can boast the perfect reputation.</p>
                        </Col>
                        <Col sm={6} md={3}>
                            <p align="center"><img
                                className="d-block  a"
                                src={a2}
                                alt="b2"
                            /></p>
                            <h4 align="center">More Than 7M Visitors
                                Each Month</h4>
                            <p align="center"><img src={blueline} alt="line" /></p>
                            <p align="center">More than 7 million people use our services to find and book airline tickets.</p>
                        </Col>
                        <Col sm={6} md={3}>
                            <p align="center"><img
                                className="d-block  a"
                                src={a3}
                                alt="b3"
                            /></p>
                            <h4 align="center">User-Friendly
                                Search System</h4>
                            <p align="center"><img src={blueline} alt="line" /></p>
                            <p align="center">Convenient and fast search for airline tickets, hotels and cars.</p>
                        </Col>
                        <Col sm={6} md={3}>
                            <p align="center"> <img
                                className="d-block  a"
                                src={a4}
                                alt="b4"
                            /></p>
                            <h4 align="center">Fast and Reliable
                                Ticket Booking</h4>
                            <p align="center"><img src={blueline} alt="line" /></p>
                            <p align="center">We provide reliable ticket booking system, which is also perfect for first-time travellers.</p>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row id="support" >
                        <Col md={12} className="col24" >
                            <br /><br /><br />
                            <h3 className="text-center text24" ><strong>24/7 SUPPORT</strong></h3>
                            <p className="text-center">Our Support Service is available 24 hours a day, 7 days a </p>
                            <p className="text-center"><Button bsPrefix="btn-flat" variant="primary" >
                                <strong> GET IN TOUCH</strong>
                            </Button></p>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 id="why" align="center">Hot Deals</h3>
                            <h2 id="our" align="center">Popular Destinations</h2>
                            <p align="center"><img src={pinkline} alt="line" /></p>
                            <br />
                            <img src={destinations} alt="destinations" className="destinations" /><br /><br />
                            <p className="text-center"><Button bsPrefix="btn-flat" variant="primary" >

                                <strong> GET TICKETS</strong>
                            </Button></p>

                        </Col>


                    </Row>
                </Container>

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


            </>
        )
    }
}

export default IndexPage