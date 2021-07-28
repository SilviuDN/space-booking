import { Component } from 'react'
import FlightsService from '../../services/flights.service'
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

        }
        this.flightsService = new FlightsService()
    }





    componentDidMount = () => {

    }

    deleteFlight = e => {
        // e.preventDefault()
        // const { flight_id } = this.props.match.params

        // this.flightsService
        //     .deleteFlight(flight_id)
        //     .then(() => {
        //         this.setState({
        //             flight: undefined
        //         })
        //         this.props.history.push('/flights')
        //     })
        //     .catch(err => console.log(err))
    }

    rateAirport = (mark) => {
        console.log("*****************", mark)
        this.setState({ ratingAirport: mark })
    }

    rateDestination = (mark) => {
        this.setState({ ratingDestination: mark })
    }

    rateFlightCompany = (mark) => {
        this.setState({ ratingFlightCompany: mark })
    }

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
                                <p>Airport:</p>
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