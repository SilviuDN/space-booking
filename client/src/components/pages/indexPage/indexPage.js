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
import logo from './logo.png'
import mars from './mars.png'
import andromeda from './andromeda.png'


class IndexPage extends Component {

    constructor() {
        super()
        this.state = {
        }
    }




    render() {
        const style = {
            background: '#1f2745', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '.7em', bottom: 0, padding: "30px 30px", margin: "30px 0px 0px 0px", width: '100%'
        }
        return (

            <>

                <Container fluid className="all  p-0 overflow-hidden">
                    <IndexSearchPanel props={this.props} />
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

                    <Row className="advantages" >
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

                    <Row id="support" >
                        <Col md={12} className="col24" >

                            <h3 className="text-center text24" ><strong>24/7 SUPPORT</strong></h3>
                            <p className="text-center">Our Support Service is available 24 hours a day, 7 days a </p>
                            <p className="text-center"><Button bsPrefix="btn-flat" variant="primary" >
                                <strong> GET IN TOUCH</strong>
                            </Button></p>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >
                            <h3 id="why" align="center">Hot Deals</h3>
                            <h2 id="our" align="center">Popular Destinations</h2>
                            <p align="center"><img src={pinkline} alt="line" /></p>
                            <br />
                            <img src={destinations} alt="destinations" className="destinations" />
                            <p className="text-center"><Button bsPrefix="btn-flat" variant="primary"  >

                                <strong> FIND TICKETS</strong>
                            </Button></p>

                        </Col>


                    </Row>
                </Container >

                <footer style={style}>

                    <Container fluid >
                        <Row>
                            <Col md="3" className="p-3" >
                                <h5 className="title"><img
                                    alt="logo"
                                    src={logo}
                                    height="40"
                                    className="d-inline-block align-top"
                                />{' '}</h5><br />
                                <p align="justify">
                                    SpaceBooking is a travel search engine which instantly searches all available flight, prices on an exhaustive number of travel sites such as online travel agencies, major and low-cost spacelines and tour-operators. We also compare hotel rooms and car rental deals. You can easily narrow down your search as much (or as little!) as you want. That means that if the trip you'd like is anywhere out there, you'll find it right away.
                                </p>
                                <p>
                                    <Link className="color-light" to="/signup/y" > SignUp for Companies </Link>
                                </p>
                            </Col>
                            <Col md="3" className="p-3">
                                <h5 className="title text-center">Latest Destinations</h5>

                                <Row>
                                    <Col md={4}><img src={mars} style={{ height: "110px" }} /></Col>
                                    <Col md={8}> <h5>Mars</h5>
                                        <p align="justify">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={4}><img src={andromeda} style={{ height: "110px" }} /></Col>
                                    <Col md={8}> <h5>Andromeda</h5>
                                        <p align="justify">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
                                    </Col>

                                </Row>
                            </Col>
                            <Col md="3" className="p-3">
                                <Row>
                                    <Col>
                                        <h5 className="title text-center">What People Say</h5>
                                        <p >"I must tell you how impressed I am by your customer service, I have contacted you twice now and each time I received a prompt reply plus the additionalattention of a manager. I have never received this kind of response from anyother spaceline tickets booking site." </p>
                                        <h6>Jeff Bezos</h6>
                                    </Col>
                                </Row>
                                <br /><br />
                                <Row>
                                    <Col>

                                        <p >"I must tell you how impressed I am by your customer service, I have contacted you twice now and each time I received a prompt reply plus the additionalattention of a manager. I have never received this kind of response from anyother spaceline tickets booking site." </p>
                                        <h6>Richard Branson</h6>
                                    </Col>
                                </Row>

                            </Col>
                            <Col md="3" className="p-3">
                                <h5 className="title text-center">Contact Us</h5>

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
                                    <p className="text-center"><Button bsPrefix="btn-flat" variant="primary"  >

                                        <strong> SEND</strong>
                                    </Button></p>
                                </Form>

                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <p className="title text-center">&copy; {new Date().getFullYear()} Copyright: <a href="https://www.spacebooking.world"> SpaceBooking.World </a></p>
                            </Col>

                        </Row>
                    </Container>


                </footer>


            </>
        )
    }
}

export default IndexPage