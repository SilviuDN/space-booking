import { Component } from "react";
import FlightsService from '../../services/flights.service'
import FlightCard from "./FlightCard";
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import Spinner from "./Spinner";
import SearchBox from "../../shared/searchBox/searchBox";


class FlightsList extends Component {

    constructor() {
        super()
        this.state = {
            flights: undefined,
            // modal: false
        }
        this.flightsService = new FlightsService()
    }



    // loadFlights = () => {
    //     console.log(this.props)
    //     this.flightsService
    //         .getFlights()
    //         .then(response => this.setState({ flights: response.data }))
    //         // .then(response => this.setState({ flights: response.data }))
    //         .catch(err => console.log(err))
    // }



    componentDidMount = () => this.loadFlights()





    removeFlight = flightId => {

        if (window.confirm(`Are you sure you want to delete flight with id ${flightId}?`)) {

            this.flightsService
                .deleteFlight(flightId)
                .then(res => {
                    this.setState({
                        flights: this.state.flights.filter(elem => elem._id !== res.data._id)
                    })
                    // this.props.history.push('/flights')
                })
                .catch(err => console.log(err))
        }

    }



    loadFlights = (searchString) => {
        !searchString ?

            this.flightsService
                .getFlights()
                .then(response => { this.setState({ flights: response.data }) })
                .catch(err => console.log(err))

            :

            this.flightsService
                .searchFlight(searchString)
                .then(response => this.setState({ flights: response.data }))
                // .then(response => this.setState({ flights: response.data }))
                .catch(err => console.log(err))

        this.props.sharedFunction('flightsList', this.loadFlights)



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
                    {
                        this.props.loggedUser?.role === 'moderator' || this.props.loggedUser?.role === 'admin' ?

                            typeof this.props.setList === 'function' ?

                                <Link to="/admin" onClick={(e) => { this.props.setId(this.props.id); this.props.setList('flightCreate') }} className="btn btn-dark">Create Flight</Link>

                                :

                                <Link to="/flights/new" className="btn btn-dark">Create Flight</Link>

                            : null
                    }
                    <SearchBox load={this.loadFlights} />

                    <Table striped bordered hover >
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