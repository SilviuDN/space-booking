import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import FlightsService from '../../services/flights.service'
import { Link } from 'react-router-dom'

class FlightEdit extends Component {

    constructor() {
        super()
        this.state = {
            price: '',
            capacity: '',
            flightNumber: '',
            airport: '',
            destination: '',
            date: '',
            flightCompany: '',
        }
        this.flightsService = new FlightsService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    loadInfo = () => {
        this.flightsService
            .getFlight(this.props.id)
            .then(flight => {

                flight = flight.data

                this.setState({
                    price: flight.price,
                    capacity: flight.capacity,
                    flightNumber: flight.flightNumber,
                    airport: flight.airport,
                    destination: flight.destination,
                    date: flight.date,
                    flightCompany: flight.flightCompany,
                })
            })
            .catch(err => console.log(err))

    }



    componentDidMount = () => {
        this.loadInfo()
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.flightsService
            .saveFlight(this.state)
            .then(() => {
                // this.props.closeModal()
                // this.props.refreshFlights()
                this.setState({
                    price: '',
                    capacity: '',
                    flightNumber: '',
                    airport: '',
                    destination: '',
                    date: '',
                    flightCompany: '',
                })
                // this.props.history.push('/flights')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Link to="/admin" onClick={() => { this.props.setId(this.props.id); this.props.setList('flights') }} className="btn btn-dark">Back to flights list</Link>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="destination">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" value={this.state.destination} onChange={this.handleInputChange} name="destination" />
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={this.state.price} onChange={this.handleInputChange} name="price" />
                    </Form.Group>

                    <Form.Group controlId="capacity">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control type="text" value={this.state.capacity} onChange={this.handleInputChange} name="capacity" />
                    </Form.Group>

                    <Form.Group controlId="flightNumber">
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="text" value={this.state.flightNumber} onChange={this.handleInputChange} name="flightNumber" />
                    </Form.Group>

                    <Form.Group controlId="airport">
                        <Form.Label>Airport</Form.Label>
                        <Form.Control type="text" value={this.state.airport} onChange={this.handleInputChange} name="airport" />
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" value={this.state.date} onChange={this.handleInputChange} name="date" />
                    </Form.Group>

                    <Form.Group controlId="flightCompany">
                        <Form.Label>FlightCompany</Form.Label>
                        <Form.Control type="text" value={this.state.flightCompany} onChange={this.handleInputChange} name="flightCompany" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Update</Button>

                </Form>

            </Container>
        )
    }
}

export default FlightEdit