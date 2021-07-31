import ReturnedFlightCard from "./BuyFlightCard"
import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap'
import IsearchPannelLeft from '../../pages/indexPage/isearchPannelLeft'
import Checkout from "../CheckoutPage/CheckoutPage";
// import IndexSearchPanel from "../../pages/indexPage/indexSearchPanel";


class FlightsFound extends Component {
    constructor() {
        super()
        this.state = {
            flight: undefined,
            payment: false,
            adults: 1,
            children: 0,

            flightsAvail: undefined,
        }
        this.flightsService = new FlightsService()
    }


    loadFlights = () => {

        const { airport, destination, departureDate, returnDate, adults, children } = this.props.match.params

        this.flightsService
            .searchTravels(airport, destination, departureDate, returnDate)
            .then(response => {
                this.setState({
                    flightsAvail: response.data,
                    adults,
                    children
                })
            })
            .catch(err => console.log(err))
    }


    setPayMethod = (flight) => this.setState({ payment: !this.state.payment, flight })


    componentDidMount() {
        this.loadFlights()
    }


    componentDidUpdate = (prevProps, prevState) => prevProps.location.pathname !== this.props.location.pathname && this.loadFlights()



    render() {

        return (

            !this.state.payment ?

                <div className="flights-found">

                    <Container >

                        <Row>
                            <Col xl={3} lg={3} md={3} sm={12}>

                                <IsearchPannelLeft props={this.props} />

                            </Col>
                            <Col xl={9} lg={9} md={8} sm={12}>
                                {
                                    !this.state.flightsAvail ?

                                        <Spinner animation="grow" />

                                        :

                                        this.state.flightsAvail.map(flight => <ReturnedFlightCard flight={flight} key={flight._id} setPayMethod={this.setPayMethod} />)
                                }
                            </Col>
                        </Row>
                        {/* <footer style={{ background: '#1f2745', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '.7em', bottom: 0, padding: "30px 30px", margin: "30px 0px 0px 0px", width: '100%' }}>

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
                                            <Col md={4}><img src={mars} style={{ height: "110px" }} alt={'mars planet'} /></Col>
                                            <Col md={8}> <h5>Mars</h5>
                                                <p align="justify">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col md={4}><img src={andromeda} style={{ height: "110px" }} alt={'andromeda planet'} /></Col>
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


                        </footer> */}

                    </Container>
                </div>

                :

                <Checkout flightDetails={this.state} setPayMethod={this.setPayMethod} props={{ ...this.props }} />

        )
    }
}

export default FlightsFound