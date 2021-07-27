import { Component } from "react";

import FlightsService from '../../services/flights.service'
import Spinner from "../FlightsPage/Spinner";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import FlightCard from "../FlightsPage/FlightCard";
import LinesChart from "./LinesChart";
import CompanyService from '../../services/company.service'
import ChartDeTest from "./ChartDeTest";

class CompaniesChart extends Component {

    constructor() {
        super()
        this.state = {
            type: 'company',
            listForLinesChart: undefined,
        }
        this.companyService = new CompanyService()
    }


    // <UnifiedList  list={this.setList} type={type}/>

    // DE MOMENTO pido la lista del servidor, pero despues this.setState({ flights: this.props.flightsList }))
    loadList = () => {
        // this.setState({ listForLinesChart: this.props.listForLinesChart })

        this.companyService
            .getCompanies()
            .then(response => {
                // console.log('antes', response.data)
                this.setState({ listForLinesChart: response.data })
                // console.log('despues',this.state.listForLinesChart)
            } )
            .catch(err => console.log(err))

        
    }

    populateDataDataString(data, elem){
        let xValue = elem.companyName
        // console.log(xValue)
        let yValue = elem.reviews.reduce( (acc,elem) => acc + parseInt(elem), 0)/ elem.reviews.length
        // console.log(yValue)

        data[0].data.push(
            {
                x: xValue,
                y: yValue
            }
        )
        // console.log(data)
    }

    createDataElement(type){
        return [{
            id: type,
            color: 'red',
            data: []
        }]
    }

    createData(type){
        let data = this.createDataElement(type)
        this.state.listForLinesChart.forEach(elem => this.populateDataDataString(data, elem))     
        return data 
    }



    // returnTypeValueCoordinates(type, elem){
    //     let entryType = 
    //         type == "airport" ? 'elem.name' :
    //             type == "flight" ? 'elem.flightNumber' : 
    //                 type == "company" ? 'elem.companyName' :
    //                     type == "destination" ? 'elem.name'
        
    //     let quantity = 
    //         type == "airport" ? 'elem.flights.length' :
    //             type == "flight" ? 'elem.soldTickets' : 
    //                 type == "company" ? 'elem.companyName' :
    //                     type == "destination" ? 'elem.name'
                
    // }

    // createXYEntry(type, elem){


    //     return {
    //         x: type,
    //         y: quantity
    //     }
    // }


    componentDidMount = () => {
        this.loadList()


    }

    // calculateTotalSeats = (flights) => {
    //     return flights.reduce( (acc, flight ) => acc + flight.capacity,0)
    // }


    // calculateSoldSeats(flights){
    //     // return flights.reduce( (acc, flight ) => console.log(flight.soldTickets))
    //     return flights.reduce( (acc, flight ) => acc + flight.soldTickets, 0)
    // }

    // calculateSeatsSituationData(flights){
    //     const soldSeats = this.calculateSoldSeats(flights)
    //     const availableSeats = this.calculateTotalSeats(flights) - soldSeats
    //     const data = [
    //         {
    //             id: "sold",
    //             label: "sold",
    //             value: soldSeats,
    //             color: "hsl(278, 70%, 50%)"
    //         },
    //         {
    //             id: "available",
    //             label: "available",
    //             value: availableSeats,
    //             color: "hsl(78, 70%, 50%)"
    //         },
    //     ]
    //     return data
    // }






    render() {

        return (

            !this.state.listForLinesChart
            ?
            <h1>Cargando</h1>
            :
            <>

                <h1>hei</h1>
                <ChartDeTest data = {this.createData('company')}/>
                {/* <ChartDeTest data = {this.createData(this.state.type)}/> */}

                {/* <PieChart data={this.calculateSeatsSituationData(this.state.flights)} /> */}

                {/* <LinesChart data={this.createData('company')}/> */}


                




            </>
        )
    }
}

export default CompaniesChart