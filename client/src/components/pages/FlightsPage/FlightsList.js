import { Component } from "react";
import FlightsService from '../../services/flights.service'
import FlightCard from "./FlightCard";
import { Table } from 'react-bootstrap';
import Spinner from "./Spinner";


class FlightsList extends Component {

    constructor() {
        super()
        this.state = {
            flights: undefined,
            // modal: false
        }
        this.flightsService = new FlightsService()
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
                <Spinner />
                :
                (<>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Flights</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.flights.map(elem => <FlightCard key={elem._id} {...elem} removeFlight={() => this.removeFlight(elem._id)} id={this.state.id} setList={this.props.setList} setId={this.props.setId} loggedUser={this.props.loggedUser} />)}
                        </tbody>
                    </Table>

                    {/* <Link to="/flights/new" className="btn btn-info">New flight</Link>
                    <h4>Flights List</h4>
                    {this.state.flights.map(elem => <FlightCard key={elem._id} {...elem} removeFlight={() => this.removeFlight(elem._id)} />)} */}
                </>)
        )
    }
}

export default FlightsList