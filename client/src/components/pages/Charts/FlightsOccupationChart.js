import { Component } from "react";
import FlightsService from '../../../services/flights.service'
import PieChart from "./PieChart";
// import Spinner from "../FlightsPage/Spinner";
// import BarChart from "./BarChart";


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
                let days = this.props.howManyDays || 30

                const date = new Date();
                const nowUnix = date.getTime();

                const nextMonthUnix = nowUnix + days * 24 * 60 * 60 * 1000

                const nextMonthFlights = response.data.filter(flight => {
                    let flightDate = new Date(flight.date)
                    let flightDateUnix = flightDate.getTime()
                    return (nextMonthUnix - flightDateUnix) * (flightDateUnix - nowUnix) > 0
                    // return flightDateUnix < nextMonthUnix && flightDateUnix > nowUnix
                })

                this.setState({ flights: nextMonthFlights })

            })
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadFlights()


    }

    calculateTotalSeats = (flights) => {
        return flights.reduce((acc, flight) => acc + flight.capacity, 0)
    }


    calculateSoldSeats(flights) {
        return flights.reduce((acc, flight) => acc + flight.soldTickets, 0)
    }

    calculateSeatsSituationData(flights) {
        const soldSeats = this.calculateSoldSeats(flights)
        const availableSeats = this.calculateTotalSeats(flights) - soldSeats
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


    componentDidUpdate = (prevProps, prevState) => prevProps.howManyDays !== this.props.howManyDays && this.loadFlights()



    render() {
        return (

            !this.state.flights
                ?
                <h1>Cargando</h1>
                :
                <>

                    {/* SEAT SITUATION FOR ALL FLIGHTS FROM NEXT howManyDays */}

                    {/* <p>PieChart: totalSoldSeats from totalSeats for the next {this.props.howManyDays}:</p> */}
                    <PieChart data={this.calculateSeatsSituationData(this.state.flights)} />

                    {/* <p>BarChart: totalSoldSeats from totalSeats for the next {this.props.howManyDays} for each available flight:</p> */}
                    {/* {this.state.flights.map(elem => <div style={{ marginBottom: '30px', width: '400px'}}><BarChart key={elem._id} {...elem} /></div>)} */}




                </>
        )
    }
}

export default FlightsOccupationChart