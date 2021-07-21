import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import FlightsService from './../services/flights.service'
import { Link } from 'react-router-dom'

class TempEdit extends Component {

    constructor() {
        super()
        this.state = {
            flight_id: '',
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

    componentDidMount() {

        const { flight_id } = this.props.match.params

        this.flightsService
            .getFlight(flight_id)
            .then(response => this.setState({
                price: response.data.price,
                capacity: response.data.capacity,
                flightNumber: response.data.flightNumber,
                airport: response.data.airport,
                destination: response.data.destination,
                date: response.data.date,
                flightCompany: response.data.flightCompany,
            }))
            .catch(err => console.log(err))
    }



    handleInputChange = e => {
        const { name, value } = e.target
        console.log(this.props.match.params.flight_id)
        this.setState({ [name]: value, flight_id: this.props.match.params.flight_id })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.flightsService
            .editFlight(this.state)
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
                this.props.history.push('/silviu/flights')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Link to="/silviu/flights" className="btn btn-dark">Back to flights list</Link>

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

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit Flight</Button>

                </Form>



            </Container>
        )
    }
}

export default TempEdit