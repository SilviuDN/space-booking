import { Component } from 'react'
import ReviewService from '../../services/reviews.service'
import FlightService from '../../services/flights.service'
import BarChart from '../Charts/BarChart'
import Rating from './Rating' 


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

        const review_info ={
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

        const review_info ={
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

        const review_info ={
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

            <Container>

                {!this.state.flight
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            {!this.state.ratingAirport
                            ?
                            <div>
                                <p>Airport:{this.state.flight.airport?.name}</p>
                                <Rating  rateSomething={this.rateAirport}/>
                            </div>
                            :
                            null}


                            {!this.state.ratingDestination
                            ?
                            <div>
                                <p>Destination:</p>
                                <Rating rateSomething={this.rateDestination}/>
                            </div>
                            :
                            null}


                            {!this.state.ratingFlightCompany
                            ?
                            <div>
                                <p>Flight Company:</p>
                                <Rating rateSomething={this.rateFlightCompany}/>
                            </div>
                            :
                            null}


                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}


export default RateFlightCard