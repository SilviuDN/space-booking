import ReturnedFlightCard from "./BuyFlightCard"
import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap'


class FlightsFound extends Component {
    constructor() {
        super()
        this.state = {
            flight: undefined,
        }
        this.flightsService = new FlightsService()
    }


    loadFlight = () => {


        const { airport, destination, departureDate, returnDate, adults, children } = this.props.match.params


        this.flightsService
            .searchTravels(airport, destination, departureDate, returnDate)
            .then(response => {
                console.log()
                this.setState({
                    flight: response.data
                })
            })
            .catch(err => console.log(err))
    }


    componentDidMount() {
        this.loadFlight()
    }

    render() {
        console.log(this.props.match.params)


        return (
            <Container>

                {!this.state.flight ?

                    <Spinner animation="grow" />

                    :

                    this.state.flight.map(flight => <ReturnedFlightCard flight={flight} key={flight._id} />)

                }

            </Container>
        )
    }
}

export default FlightsFound