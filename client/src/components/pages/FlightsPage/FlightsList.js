import { Component } from "react";
import { Link } from "react-router-dom";
import FlightsService from '../../services/flights.service'
import FlightCard from "./FlightCard";


class FlightsList extends Component {

    constructor() {
        super()
        this.state = {
            flights: undefined,
            // modal: false
        }
        this.flightsService = new FlightsService()
    }


    removeFlight = flightId => {

        this.flightsService
            .deleteFlight(flightId)
            .then(() => {
                this.setState({
                    flights: this.state.flights.filter(elem => elem._id !== flightId)
                })
                // this.props.history.push('/flights')
            })
            .catch(err => console.log(err))
    }

    loadFlights = () => {
        this.flightsService
            .getFlights()
            .then(response => this.setState({ flights: response.data }))
            // .then(response => this.setState({ flights: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadFlights()
    }

    render() {
        return (
            !this.state.flights
                ?
                <h3>Cargando...</h3>
                :
                (<>

                    <Link to="/flights/new" className="btn btn-info">New flight</Link>
                    <h4>Flights List</h4>
                    {this.state.flights.map(elem => <FlightCard key={elem._id} {...elem} removeFlight={() => this.removeFlight(elem._id)} />)}
                </>)
        )
    }
}

export default FlightsList