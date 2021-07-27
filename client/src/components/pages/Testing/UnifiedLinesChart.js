// import { Component } from "react";

// import FlightsService from '../../services/flights.service'
// import Spinner from "../FlightsPage/Spinner";
// import PieChart from "./PieChart";
// import BarChart from "./BarChart";
// import FlightCard from "../FlightsPage/FlightCard";


// class UnifiedLinesChart extends Component {

//     constructor() {
//         super()
//         this.state = {
//             type: 'airport',
//             listForLinesChart: [],
//         }
//         this.flightsService = new FlightsService()
//     }


//     // <UnifiedList  list={this.setList} type={type}/>

//     // DE MOMENTO pido la lista del servidor, pero despues this.setState({ flights: this.props.flightsList }))
//     loadFlights = () => {
//         this.setState({ listForLinesChart: this.props.nextMonthFlights })
//     }

//     createData(type, elem){
//         let data = createData(type)
//         if(type == 'company'){
            
//         }
//     }

//     createDataElement(type){
//         return {
//             id: type,
//             color: red,
//             data: []
//         }
//     }



//     returnTypeValueCoordinates(type, elem){
//         let entryType = 
//             type == "airport" ? 'elem.name' :
//                 type == "flight" ? 'elem.flightNumber' : 
//                     type == "company" ? 'elem.companyName' :
//                         type == "destination" ? 'elem.name'
        
//         let quantity = 
//             type == "airport" ? 'elem.flights.length' :
//                 type == "flight" ? 'elem.soldTickets' : 
//                     type == "company" ? 'elem.companyName' :
//                         type == "destination" ? 'elem.name'
                
//     }

//     createXYEntry(type, elem){


//         return {
//             x: type,
//             y: quantity
//         }
//     }


//     componentDidMount = () => {
//         this.loadFlights()


//     }

//     calculateTotalSeats = (flights) => {
//         return flights.reduce( (acc, flight ) => acc + flight.capacity,0)
//     }


//     calculateSoldSeats(flights){
//         // return flights.reduce( (acc, flight ) => console.log(flight.soldTickets))
//         return flights.reduce( (acc, flight ) => acc + flight.soldTickets, 0)
//     }

//     calculateSeatsSituationData(flights){
//         const soldSeats = this.calculateSoldSeats(flights)
//         const availableSeats = this.calculateTotalSeats(flights) - soldSeats
//         const data = [
//             {
//                 id: "sold",
//                 label: "sold",
//                 value: soldSeats,
//                 color: "hsl(278, 70%, 50%)"
//             },
//             {
//                 id: "available",
//                 label: "available",
//                 value: availableSeats,
//                 color: "hsl(78, 70%, 50%)"
//             },
//         ]
//         return data
//     }






//     render() {
//         return (

//             !this.state.flights
//             ?
//             <h1>Cargando</h1>
//             :
//             <>

//                 {/* SEAT SITUATION FOR ALL FLIGHTS FROM NEXT howManyDays */}
//                 <PieChart data={this.calculateSeatsSituationData(this.state.flights)} />
//                 <Spinner />


//                 {this.state.flights.map(elem => <div style={{ marginBottom: '30px', width: '400px'}}><BarChart key={elem._id} {...elem} /></div>)}




//             </>
//         )
//     }
// }

// export default UnifiedLinesChart