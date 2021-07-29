import { Component } from 'react'
import ReviewService from '../../services/reviews.service'
import FlightService from '../../services/flights.service'
import BarChart from '../Charts/BarChart'
import Rating from './Rating'
import './Rating.css'



import { Container, Row, Col, } from 'react-bootstrap'


class RateFlightCard extends Component {

    constructor() {
        super()
        this.state = {
            flight: true,
            ratingAirport: undefined,
            ratingDestination: undefined,
            ratingFlightCompany: undefined,
            updated: undefined

        }
        this.reviewsService = new ReviewService()
        this.flightsService = new FlightService()
    }



    loadFlight = () => {

        const flight_id = this.props.flightId

        this.flightsService
            .getFlight(flight_id)
            .then(response => {
                this.setState({ flight: response.data })
            })
            // .then(response => this.setState({ flight: response.data }))
            .catch(err => console.log(err))
    }



    componentDidMount = () => {
        this.loadFlight()

    }

    rateAirport = (mark) => {
        const id = this.state.flight.airport._id
        this.props.updateRatedFlightsList(this.state.flight._id)

        const review_info = {
            id,
            which: 'airport',
            mark
        }
        this.reviewsService
            .leaveReview(review_info)
            .then(response => this.setState({ ratingAirport: mark }))
            .catch(err => console.log(err))

    }

    rateDestination = (mark) => {
        // this.setState({ ratingDestination: mark })
        const id = this.state.flight.destination._id
        this.props.updateRatedFlightsList(this.state.flight._id)

        const review_info = {
            id,
            which: 'destination',
            mark
        }
        this.reviewsService
            .leaveReview(review_info)
            .then(response => this.setState({ ratingDestination: mark }))
            .catch(err => console.log(err))
    }

    rateFlightCompany = (mark) => {
        // this.setState({ ratingFlightCompany: mark })
        const id = this.state.flight.flightCompany._id
        this.props.updateRatedFlightsList(this.state.flight._id)

        const review_info = {
            id,
            which: 'company',
            mark
        }
        this.reviewsService
            .leaveReview(review_info)
            .then(response => this.setState({ ratingFlightCompany: mark }))
            .catch(err => console.log(err))
    }



    // componentDidUpdate = (prevProps, prevState) => {
    //     prevProps.ratingAirport !== this.props.ratingAirport && this.rateAirport()

    // } 



    render() {
        return (

            <>
                {!this.state.flight
                    ?
                    <h3></h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={12}>

                            {!this.state.ratingAirport
                                ?
                                <Row >
                                    <Col    >
                                        <p >{this.state.flight.airport?.name}</p>
                                    </Col>
                                    <Col >
                                        <Rating rateSomething={this.rateAirport} />
                                    </Col>


                                </Row>
                                :
                                null}


                            {!this.state.ratingDestination
                                ?
                                <Row>
                                    <Col>
                                        <p>Destination:</p>
                                    </Col>
                                    <Col>
                                        <Rating rateSomething={this.rateDestination} /></Col>
                                </Row>
                                :
                                null}


                            {!this.state.ratingFlightCompany
                                ?
                                <Row>
                                    <Col>
                                        <p>Flight Company:</p>
                                    </Col>
                                    <Col>
                                        <Rating rateSomething={this.rateFlightCompany} />
                                    </Col>
                                </Row>
                                :
                                null}
                            <hr></hr>


                        </Col>

                    </Row>
                }

            </>
        )
    }
}


export default RateFlightCard