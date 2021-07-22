import { Component } from 'react'
import FlightsService from '../../services/flights.service'

import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class FlightDetails extends Component {

    constructor() {
        super()
        this.state = {
            flight: undefined
        }
        this.flightsService = new FlightsService()
    }


    componentDidMount() {

        const { flight_id } = this.props.match.params

        this.flightsService
            .getFlight(flight_id)
            .then(response => this.setState({ flight: response.data }))
            .catch(err => console.log(err))
    }

    deleteFlight = e => {
        e.preventDefault()
        const { flight_id } = this.props.match.params
        console.log('**************************', flight_id)

        this.flightsService
            .deleteFlight(flight_id)
            .then(() => {
                // this.props.closeModal()
                // this.props.refreshFlights()
                this.setState({
                    flight: undefined

                })
                this.props.history.push('/flights')
            })
            .catch(err => console.log(err))
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
                            <h3>Destination: {this.state.flight.destination}</h3>
                            <p>Price: ${this.state.flight.price}</p>

                            <hr></hr>

                            <p>Seats: {this.state.flight.capacity}</p>
                            <p>Airport: {this.state.flight.airport}</p>

                            <hr></hr>

                            <Form onSubmit={this.deleteFlight}>
                                <Button className="btn btn-danger" type="submit">Delete Flight</Button>
                            </Form>

                            <Link to="/flights" className="btn btn-dark">Back to flights list</Link>
                            <Link to={`/flights/${this.state.flight._id}/edit`} className="btn btn-warning">Edit</Link>

                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}


export default FlightDetails