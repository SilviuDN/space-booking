import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import FlightsService from '../../services/flights.service'
import AirportService from '../../services/AirportService'
import DestinationService from '../../services/destinations.service'
import CompanyService from '../../services/company.service'
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
            airportName: '',
            companyName: '',
            airports: [],
            destinations: [],
            companies: [],
        }
        this.flightsService = new FlightsService()
        this.AirportService = new AirportService()
        this.DestinationService = new DestinationService()
        this.CompanyService = new CompanyService()
    }

    componentDidMount() {
        if (this.props.type === "edit") {
            const flight_id = this.props.match?.params.flight_id || this.props.id

            this.flightsService
                .getFlight(flight_id)
                .then(response => {
                    // console.log(response.data)
                    let flight = response.data
                    this.setState({
                        flight: flight
                    })
                })
                .catch(err => console.log(err))
        }

        this.loadAirports()
        this.loadDestinations()
        this.loadCompanies()


    }


    loadCompanies() {
        this.CompanyService.getCompanies()
            .then(response => {
                this.setState({ companies: response.data })
            })
            .then(() => {

                this.CompanyService.companyDetails(this.state.flight.flightCompany)
                    .then(response => {
                        setTimeout(() => {
                            this.setState({ companyName: response.data.companyName })
                        }, 4000)
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }



    loadAirports() {

        this.AirportService.getAirports()
            .then(response => {

                this.setState({ airports: response.data })
            })
            .then(() => {

                this.AirportService.airportDetails(this.state.flight.airport)
                    .then(response => this.setState({ airportName: response.data.name }))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))


    }

    loadDestinations() {

        this.DestinationService.getDestinations()
            .then(response => this.setState({ destinations: response.data }))
            .catch(err => console.log(err))
    }


    handleInputChange = e => {

        const { name, value } = e.target

        const flightId = this.props.type === "edit" ? this.props.match?.params.flight_id || this.props.id : ''

        this.setState({
            flight: {
                ...this.state.flight,
                [name]: value,
                flight_id: flightId
            }
        })
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
                        flight: {
                            price: '',
                            capacity: '',
                            flightNumber: '',
                            airport: '',
                            destination: '',
                            date: '',
                            flightCompany: '',
                        }

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

    handleSelect(e) {

        this.setState({

            [e.target.id]: e.target.value
        })

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
                        <Form.Control type="text" value={this.state.flight.flightNumber} onChange={this.handleInputChange} name="flightNumber" />
                    </Form.Group>


                    <Form.Group controlId="destination">
                        <Form.Label>Select Destination</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.destination}
                            onChange={e => {
                                this.handleSelect(e);
                            }}
                        >
                            <option value={this.state.flight.destination}>{this.state.flight.destination ? this.state.flight.destination : 'Select Destination...'}</option>
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
                            value={this.state.airport}
                            onChange={e => {
                                this.handleSelect(e);
                            }}
                        >
                            <option value={this.state.flight.airport}>
                                {this.state.airportName ? this.state.airportName : 'Select Airport...'}
                            </option>

                            {this.state.airports?.map(airport => {
                                return <option key={airport._id} value={airport._id}>{airport.name}</option>
                            })
                            }
                        </Form.Control>
                    </Form.Group>


                    <Form.Group controlId="flightCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.destination}
                            onChange={e => {
                                this.handleSelect(e);
                            }}
                        >
                            <option value={this.state.flight.flightCompany}>{this.state.companyName ? this.state.companyName : 'Select Company...'}</option>
                            {this.state.destinations?.map(destination => {
                                return <option key={destination._id} value={destination._id}>{destination.name}</option>
                            })
                            }
                        </Form.Control>
                    </Form.Group>


                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" value={this.state.flight.date.split('T')[0]} onChange={this.handleInputChange} placeholder={'dd/mm/yy'} name="date" />
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