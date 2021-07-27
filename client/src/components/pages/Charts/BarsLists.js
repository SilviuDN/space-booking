import { Component } from "react";
import CompanyService from "../../services/company.service";
import DestinationService from "../../services/destinations.service"
import AirportService from "../../services/AirportService"
import FlightsService from "../../services/flights.service"
import BarsChart from "./BarsChart";

class BarsLists extends Component {

    constructor() {
        super()
        this.state = {
            type: undefined,
            listForBarsChart: undefined,
        }
        this.companyService = new CompanyService()
        this.destinationService = new DestinationService()
        this.airportService = new AirportService()
        this.flightService = new FlightsService()
    }

    // DE MOMENTO pido la lista del servidor, pero despues this.setState({ flights: this.props.flightsList }))
    loadList = () => {
        
        if(this.props.type == 'company'){
        this.companyService
            .getCompanies()
            .then(response => {
                this.setState({ 
                    type: 'company',
                    listForBarsChart: response.data })
            } )
            .catch(err => console.log(err))            
        }

        if(this.props.type == 'destination'){
            this.destinationService
                .getDestinations()
                .then(response => {
                    this.setState({ 
                        type: 'destination', 
                        listForBarsChart: response.data })
                } )
                .catch(err => console.log(err))            
            }

        if(this.props.type == 'airport'){
            this.airportService
                .getAirports()
                .then(response => {
                    this.setState({
                        type: 'airport', 
                        listForBarsChart: response.data.slice(0,6) })
                } )
                .catch(err => console.log(err))            
            }

        if(this.props.type == 'flight'){
            this.flightService
                .getFlights()
                .then(response => {
                    this.setState({ 
                        type: 'flight', 
                        listForBarsChart: response.data })
                    console.log('despues',this.state.listForBarsChart.length)
                } )
                .catch(err => console.log(err))            
            }
        
    }

    populateDataString(data, elem){
        let xValue, yValue
        let name = this.state.type == 'company' ? 'companyName': 
            this.state.type == 'destination' ?'name':
            this.state.type == 'airport' ?'name':
            this.state.type == 'flight' ?'flightNumber': null

        

        if(this.state.type == 'company'){
        // xValue = elem.companyName
        xValue = elem[name]

        yValue = elem.reviews.reduce( (acc,elem) => acc + parseInt(elem), 0)/ elem.reviews.length
        }
        
        if(this.state.type == 'destination'){
        // xValue = elem.name
        xValue = elem[name]

        yValue = elem.reviews.reduce( (acc,elem) => acc + parseInt(elem), 0)/ elem.reviews.length
        }
        
        if(this.state.type == 'airport'){
        // xValue = elem.name
        xValue = elem[name]

        yValue = elem.flights.length
        }
        
        if(this.state.type == 'flight'){
        // xValue = elem.name
        xValue = elem[name]

        yValue = elem.soldTickets
        }

        data.push(
            {
                x: xValue, // NOMBRE
                y: yValue, // MEDIANA DEL RATING
                yColor: "hsl(19, 70%, 50%)"
            }
        )
    }


    createData(){
        let data        
        data = []
        this.state.listForBarsChart.forEach(elem => this.populateDataString(data, elem))     
        return data 
    }


    componentDidMount = () => {
        this.loadList()
    }


    render() {


        return (

            !this.state.listForBarsChart
            ?
            <h1>Cargando</h1>
            :
            <>

                <BarsChart data = {this.createData()} type = {this.props.type}/>               




            </>
        )
    }
}

export default BarsLists