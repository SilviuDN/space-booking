import { Component } from "react";

import FlightsService from '../../services/flights.service'
import Spinner from "../FlightsPage/Spinner";
import PieChart from "./PieChart";
import FlightCard from "../FlightsPage/FlightCard";


class FlightsOccupationChart extends Component {

    constructor() {
        super()
        this.state = {
            flights: undefined,
        }
        this.flightsService = new FlightsService()
    }


    // DE MOMENTO pido la lista del servidor, pero despues this.setState({ flights: this.props.flightsList }))
    loadFlights = () => {
        this.flightsService
            .getFlights()
            .then(response => {
               this.setState({ flights: response.data })
            //    console.log("*****************************************")
               console.log(this.state.flights)
               console.log("total", this.calculateTotalSeats(this.state.flights))
               console.log("sold", this.calculateSoldSeats(this.state.flights))
               console.log(this.calculateSeatsSituationData(this.state.flights))

            })
            .catch(err => console.log(err))
    }

    

    // filterLastWeek = () => {

    // }


    componentDidMount = () => {
        this.loadFlights()


    }

    calculateTotalSeats = (flights) => {
        return flights.reduce( (acc, flight ) => acc + flight.capacity,0)
    }


    calculateSoldSeats(flights){
        // return flights.reduce( (acc, flight ) => console.log(flight.soldTickets))
        return flights.reduce( (acc, flight ) => acc + flight.soldTickets, 0)
    }

    calculateSeatsSituationData(flights){
        const soldSeats = this.calculateSoldSeats(flights)
        const availableSeats = this.calculateTotalSeats(flights) - soldSeats
        console.log("$$$$$$$",soldSeats, availableSeats)
        const data = [
            {
                id: "sold",
                label: "sold",
                value: soldSeats,
                color: "hsl(278, 70%, 50%)"
            },
            {
                id: "available",
                label: "available",
                value: availableSeats,
                color: "hsl(78, 70%, 50%)"
            },
        ]
        return data
    }






    render() {
        return (

            this.state.flights===undefined
            ?
            <h1>Cargando</h1>
            :
            <>
                <PieChart data={this.calculateSeatsSituationData(this.state.flights)} />
                <Spinner />
                {/* <tbody>
                    {this.state.flights.map(elem => <FlightCard key={elem._id} {...elem} removeFlight={() => this.removeFlight(elem._id)} id={this.state.id} setList={this.props.setList} setId={this.props.setId} loggedUser={this.props.loggedUser} />)}
                </tbody> */}


            </>
        )
    }
}

export default FlightsOccupationChart