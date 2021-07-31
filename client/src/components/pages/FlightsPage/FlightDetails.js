import { Component } from 'react'
import FlightsService from '../../../services/flights.service'
import BarChart from '../Charts/BarChart'


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



    componentDidMount = () => this.loadFlight()


    componentDidUpdate = (prevProps, prevState) => prevProps.id !== this.props.id && this.loadFlight()


    deleteFlight = e => {
        e.preventDefault()
        const { flight_id } = this.props.match.params

        this.flightsService
            .deleteFlight(flight_id)
            .then(() => {
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
                            <div>
                                <img src={this.state.flight.destination?.image} alt='destination' style={{ width: '100%' }} />

                            </div>
                            <div><BarChart key={this.state.flight._id} {...this.state.flight} /></div>
                            <h3 className={'mt-5'}>Destination: {this.state.flight.destination?.name}</h3>
                            <p>Price: ${this.state.flight.price}</p>

                            <hr></hr>

                            <p>Seats: {this.state.flight.capacity}</p>
                            <p>Airport: {this.state.flight.airport._id}</p>

                            <hr></hr>


                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}


export default FlightDetails