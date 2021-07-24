import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import FlightsService from '../../services/flights.service'
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
        if (this.props.type === "edit") {
            const flight_id = this.props.match?.params.fligth_id || this.props.id

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



    }



    handleInputChange = e => {
        const { name, value } = e.target
        // console.log(this.props.match.params.flight_id)
        const flightId = this.props.type === "edit" ? this.props.match.params.flight_id : ""
        this.setState({ [name]: value, flight_id: flightId })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        if (this.props.type === "edit") {
            this.flightsService
                .editFlight(this.state)
                .then(() => {

                    this.props.showAlert('Successfully eddited')

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
                    this.props.history.push('/flights')
                }).catch(err => {
                    console.log("Error from new flight")
                    this.props.showAlert("Error from new flight", err.message)
                })
        }

        if (this.props.type === "new") {
            this.flightsService
                .saveFlight(this.state)
                .then(res => {

                    console.log(res)

                    this.props.showAlert('Successfully added new destination')

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
                    this.props.history.push('/flights')
                }).catch(err => {
                    console.log("Error from edit flight")
                    this.props.showAlert("Error from edit flight", err.message)
                })
        }


    }


    componentDidUpdate = (prevProps, prevState) => prevProps.type !== this.props.type && this.setState({
        price: '',
        capacity: '',
        flightNumber: '',
        airport: '',
        destination: '',
        date: '',
        flightCompany: '',
    })

    render() {
        return (
            <Container>

                {
                    typeof this.props.setId === 'function' ?

                        <Link to="/admin" onClick={() => this.props.setList('flights')} className="btn btn-dark">Back to flights list</Link>
                        :
                        <Link to="/flights" className="btn btn-dark">Back to flights list</Link>

                }


                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="flightNumber">
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="text" value={this.state.flightNumber} onChange={this.handleInputChange} name="flightNumber" />
                    </Form.Group>

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

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">
                        {this.props.type === 'edit' ? 'Edit Flight' : 'Add New Flight'}
                    </Button>

                </Form>



            </Container>
        )
    }
}

export default TempEdit