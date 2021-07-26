import { Component } from 'react'
import FlightsService from '../../services/flights.service'


import { Container, Row, Col, } from 'react-bootstrap'


class FlightDetails extends Component {

    constructor() {
        super()
        this.state = {
            flight: undefined
        }
        this.flightsService = new FlightsService()
    }

    loadFlight = () => {
        const flight_id = this.props.match?.params.flight_id || this.props.id

        this.flightsService
            .getFlight(flight_id)
            .then(response => {
                console.log(response.data)
                this.setState({ flight: response.data })
            })
            // .then(response => this.setState({ flight: response.data }))
            .catch(err => console.log(err))
    }



    componentDidMount = () => {
        this.loadFlight()

    }

    deleteFlight = e => {
        e.preventDefault()
        const { flight_id } = this.props.match.params
        // console.log('**************************', flight_id)

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
                            <img src={this.state.flight.destination?.image} alt=''></img>
                            {/* <Card.Img variant="top" src={this.state.flight.destination?.image} /> */}
                            <h3>Destination: {this.state.flight.destination?.name}</h3>
                            <p>Price: ${this.state.flight.price}</p>

                            <hr></hr>

                            <p>Seats: {this.state.flight.capacity}</p>
                            <p>Airport: {this.state.flight.airport._id}</p>

                            <hr></hr>

                            {/* <Form onSubmit={this.deleteFlight}>
                                <Button className="btn btn-danger" type="submit">Delete Flight</Button>
                            </Form>

                            <Link to="/flights" className="btn btn-dark">Back to flights list</Link>
                            <Link to={`/flights/${this.state.flight._id}/edit`} className="btn btn-warning">Edit</Link> */}

                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}


export default FlightDetails