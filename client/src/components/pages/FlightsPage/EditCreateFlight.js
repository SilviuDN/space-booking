import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import FlightsService from '../../../services/flights.service'
import AirportService from '../../../services/AirportService'
import DestinationService from '../../../services/destinations.service'
import CompanyService from '../../../services/company.service'
import { Link } from 'react-router-dom'

class TempEdit extends Component {

    constructor() {
        super()
        this.state = {
            flight: {
                flight_id: '',
                price: '',
                capacity: '',
                flightNumber: '',
                airport: '',
                destination: '',
                date: '',
                flightCompany: '',
            },
            currentDestination: undefined,
            currentCompany: undefined,
            currentAirport: undefined,

            airports: [],
            destinations: [],
            companies: [],
        }
        this.flightsService = new FlightsService()
        this.AirportService = new AirportService()
        this.DestinationService = new DestinationService()
        this.CompanyService = new CompanyService()
    }


    loadFlights = () => {

        if (this.props.type === "edit") {


            const flight_id = this.props.match?.params.flight_id || this.props.id

            this.flightsService
                .getFlight(flight_id)
                .then(response => {
                    let flight = response.data
                    this.setState({

                        flight: {
                            ...this.state.flight,
                            flight_id: flight._id,
                            price: flight.price,
                            capacity: flight.capacity,
                            flightNumber: flight.flightNumber,
                            airport: flight.airport?._id,
                            destination: flight.destination?._id,
                            date: flight.date,
                            flightCompany: flight.flightCompany?._id,
                        },
                        currentDestination: flight.destination,
                        currentCompany: flight.flightCompany,
                        currentAirport: flight.airport,
                    })
                })
                .catch(err => console.log(err))
        } else {
            this.setState({
                flight: {
                    ...this.state.flight,
                    flight_id: '',
                    price: '',
                    capacity: '',
                    flightNumber: '',
                    airport: '',
                    destination: '',
                    date: '',
                },
                currentDestination: '',
                currentCompany: '',
                currentAirport: '',
            })
        }



        this.loadAirports()
        this.loadDestinations()
    }


    componentDidMount = () => {
        this.loadFlights()
    }


    loadCompanies = (e, user_id) => {
        e.preventDefault()

        this.CompanyService
            .getMyCompany(user_id)
            .then(response => {

                if (this.props.type === "new") {
                    this.setState({
                        flight: {
                            ...this.state.flight,
                            flightCompany: response.data[0]?._id
                        }
                    })
                    this.handleFormSubmit()
                } else {
                    this.handleFormSubmit()

                }
            })
            .catch(err => console.log(err))
    }



    loadAirports = () => {

        this.AirportService.getAirports()
            .then(response => {

                this.setState({ airports: response.data })
            })
            .catch(err => console.log(err))
    }


    loadDestinations = () => {

        this.DestinationService.getDestinations()
            .then(response => this.setState({ destinations: response.data }))
            .catch(err => console.log(err))
    }


    handleInputChange = e => {

        const { name, value } = e.target

        this.setState({
            flight: {
                ...this.state.flight,
                [name]: value,
            }
        })
    }


    handleFormSubmit = () => {

        if (this.props.type === "edit") {

            this.flightsService
                .editFlight(this.state.flight)
                .then(() => {

                    this.setState({

                        flight: {
                            flight_id: '',
                            price: '',
                            capacity: '',
                            flightNumber: '',
                            airport: '',
                            destination: '',
                            date: '',
                            flightCompany: '',
                        },
                        currentDestination: '',
                        currentCompany: '',
                        currentAirport: '',

                    })


                    this.props.showAlert('Successfully eddited')

                    if (typeof this.props.sharedFunction === 'function') {
                        alert('yes')
                        this.props.sharedFunction()
                    }

                    if (this.props.history) {
                        this.props.history.push('/flights')
                    }

                }).catch(err => {
                    this.props.showAlert("Error editing flight", err.message)
                })
        }


        if (this.props.type === "new") {
            this.flightsService
                .saveFlight(this.state.flight)
                .then(res => {

                    this.props.showAlert('Successfully added new flight')

                    this.setState({
                        price: '',
                        capacity: '',
                        flightNumber: '',
                        airport: '',
                        destination: '',
                        date: '',
                        flightCompany: '',
                    })

                    if (this.props.history) {
                        this.props.history.push('/flights')
                    }

                }).catch(err => {
                    this.props.showAlert("Error creating new flight", err.message)
                })

        }


    }

    handleSelect(e) {

        this.setState({
            flight: {
                ...this.state.flight,
                [e.target.id]: e.target.value
            }
        })

    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.id !== this.props.id || prevProps.type !== this.props.type) {
            this.loadFlights()
        }
    }

    render() {
        return (
            <Container>

                {
                    typeof this.props.setId === 'function' ?

                        null
                        :
                        <Link to="/flights" className="btn btn-dark">Back to flights list</Link>

                }


                <Form>

                    <Form.Group controlId="flightNumber">
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="text" value={this.state.flight.flightNumber} onChange={this.handleInputChange} name="flightNumber" />
                    </Form.Group>


                    <Form.Group controlId="destination">
                        <Form.Label>Select Destination</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.flight.destination}
                            onChange={e => {
                                this.handleSelect(e);
                            }}
                        >
                            <option value={this.state.currentDestination}>{this.state.currentDestination ? this.state.currentDestination?.name : 'Select Destination...'}</option>
                            {this.state.destinations?.map(destination => {
                                return <option key={destination._id} value={destination._id}>{destination.name}</option>
                            })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={this.state.flight.price} onChange={this.handleInputChange} name="price" />
                    </Form.Group>

                    <Form.Group controlId="capacity">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control type="text" value={this.state.flight.capacity} onChange={this.handleInputChange} name="capacity" />
                    </Form.Group>

                    <Form.Group controlId="airport">
                        <Form.Label>Airport Selection</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.flight.airport}
                            onChange={e => this.handleSelect(e)}
                        >
                            <option value={this.state.currentAirport?._id}>
                                {this.state.currentAirport ? this.state.currentAirport.name + ' (' + this.state.currentAirport.address.city + ')' : 'Select Airport...'}
                            </option>

                            {this.state.airports?.map(airport => {
                                return <option key={airport._id} value={airport._id}>{airport.name}</option>
                            })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" value={this.state.flight.date.split('T')[0]} onChange={this.handleInputChange} placeholder={'dd/mm/yy'} name="date" />
                    </Form.Group>


                    <Button onClick={(e) => this.loadCompanies(e, this.props.loggedUser._id)} style={{ marginTop: '20px', width: '100%' }} variant="dark" >
                        {this.props.type === 'edit' ? 'Edit Flight' : 'Add New Flight'}
                    </Button>

                </Form>



            </Container>
        )
    }
}

export default TempEdit