import ReturnedFlightCard from "./BuyFlightCard"
import { Component } from 'react'
import FlightsService from '../../../services/flights.service'
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

                                        this.state.flightsAvail.length >= 1 ?

                                            this.state.flightsAvail.map(flight => <ReturnedFlightCard flight={flight} key={flight._id} setPayMethod={this.setPayMethod} />)

                                            :

                                            <h3 className={'mt-5'}>NO FLIGHTS FOUND</h3>
                                }
                            </Col>
                        </Row>

                    </Container>
                </div>

                :

                <Checkout flightDetails={this.state} setPayMethod={this.setPayMethod} props={{ ...this.props }} />

        )
    }
}

export default FlightsFound