import { Component } from "react";
import FlightsService from '../../services/flights.service'
import Spinner from "../FlightsPage/Spinner";
import RandomChart from "./RandomChart";
import FlightCard from "../FlightsPage/FlightCard";


class FlightsOccupationChart extends Component {

    constructor() {
        super()
        this.state = {
            flights: undefined,
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

    // filterLastWeek = () => {

    // }

    componentDidMount = () => {
        this.loadFlights()

    }

    // removeFlight = flightId => {

    //     this.flightsService
    //         .deleteFlight(flightId)
    //         .then(() => {
    //             this.setState({
    //                 flights: this.state.flights.filter(elem => elem._id !== flightId)
    //             })
    //             // this.props.history.push('/flights')
    //         })
    //         .catch(err => console.log(err))
    // }


    render() {
        return (



            <>
                <RandomChart data={this.state.flights} />
                <Spinner />
                <tbody>
                    {this.state.flights.map(elem => <FlightCard key={elem._id} {...elem} removeFlight={() => this.removeFlight(elem._id)} id={this.state.id} setList={this.props.setList} setId={this.props.setId} loggedUser={this.props.loggedUser} />)}
                </tbody>


            </>
        )
    }
}

export default FlightsOccupationChart