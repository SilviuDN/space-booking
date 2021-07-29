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
        
        if(this.props.type === 'company'){
        this.companyService
            .getCompanies()
            .then(response => {
                this.setState({ 
                    type: 'company',
                    listForBarsChart: this.returnTopRatedCoDest(response.data, 3) }) //top howMany rated
            } )
            .catch(err => console.log(err))            
        }

        if(this.props.type === 'destinations'){
            this.destinationService
                .getDestinations()
                .then(response => {
                    this.setState({ 
                        type: 'destinations', 
                        listForBarsChart: this.returnTopRatedCoDest(response.data, 3) }) //top howMany rated
                } )
                .catch(err => console.log(err))            
            }

        if(this.props.type === 'airports'){
            this.airportService
                .getAirports()
                .then(response => {
                    this.setState({
                        type: 'airports', 
                        listForBarsChart: this.returnTopRatedApt(response.data, 4) }) //top howMany flights accomodating airports
                } )
                .catch(err => console.log(err))            
            }

        if(this.props.type === 'flights'){
            this.flightService
                .getFlights()
                .then(response => {
                    this.setState({ 
                        type: 'flights', 
                        listForBarsChart: this.returnTopRatedFlights(response.data, 4) })   //top sales for flights
                } )
                .catch(err => console.log(err))            
            }
        
    }

    calculateRatingsMedianCompDest(elem){
        return Math.round( elem?.reviews.reduce( (acc,elem) => acc + parseInt(elem), 0)/ Math.max(elem.reviews.length, 1) )
    }

    returnTopRatedCoDest(arr, howMany){
        return arr.sort((a, b) => this.calculateRatingsMedianCompDest(a) - this.calculateRatingsMedianCompDest(b) ).slice(-howMany)
    }

    returnTopRatedApt(arr, howMany){
        return arr.sort((a, b) => a.flights.length - b.flights.length  ).slice(-howMany)
    }

    returnTopRatedFlights(arr, howMany){
        return arr.sort((a, b) => a.soldTickets.length - b.soldTickets.length  ).slice(-howMany)
    }

    populateDataString(data, elem){
        let xValue, yValue
        let name = this.state.type === 'company' ? 'companyName': 
            this.state.type === 'destinations' ?'name':
            this.state.type === 'airports' ?'name':
            this.state.type === 'flights' ?'flightNumber': null

        

        if(this.state.type === 'company'){
        // xValue = elem.companyName
        xValue = elem[name]

        yValue = this.calculateRatingsMedianCompDest(elem)
        }
        
        if(this.state.type === 'destinations'){
        // xValue = elem.name
        xValue = elem[name]

        yValue = this.calculateRatingsMedianCompDest(elem)
        }
        
        if(this.state.type === 'airports'){
        // xValue = elem.name
        xValue = elem[name]

        yValue = elem.flights.length
        }
        
        if(this.state.type === 'flights'){
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

    componentDidUpdate = (prevProps, prevState) => prevProps.type !== this.props.type && this.loadList()

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