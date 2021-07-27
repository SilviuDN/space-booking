import { Component } from "react";
import CompanyService from "../../services/company.service";
import DestinationService from "../../services/destinations.service"
import AirportService from "../../services/AirportService"
import FlightsService from "../../services/flights.service"
import UnifiedBarsChart from "./UnifiedBarsChart";

class UnifiedBarsLists extends Component {

    constructor() {
        super()
        this.state = {
            // type: 'company',
            // type: 'destination',
            // type: 'airport',
            type: 'flight',
            // type: undefined,

            listForBarsChart: undefined,
        }
        this.companyService = new CompanyService()
        this.destinationService = new DestinationService()
        this.airportService = new AirportService()
        this.flightService = new FlightsService()
    }


    // <UnifiedList  list={this.setList} type={type}/>

    // DE MOMENTO pido la lista del servidor, pero despues this.setState({ flights: this.props.flightsList }))
    loadList = () => {
        // this.setState({ listForBarsChart: this.props.listForBarsChart })

        // this.setState({
        //     type: this.props.type
        // })

        if(this.state.type == 'company'){
        this.companyService
            .getCompanies()
            .then(response => {
                // console.log('antes', response.data)
                this.setState({ listForBarsChart: response.data })
                // console.log('despues',this.state.listForBarsChart)
            } )
            .catch(err => console.log(err))            
        }

        if(this.state.type == 'destination'){
            this.destinationService
                .getDestinations()
                .then(response => {
                    // console.log('antes', response.data)
                    this.setState({ listForBarsChart: response.data })
                    // console.log('despues',this.state.listForBarsChart)
                } )
                .catch(err => console.log(err))            
            }

        if(this.state.type == 'airport'){
            this.airportService
                .getAirports()
                .then(response => {
                    // console.log('antes', response.data)
                    this.setState({ listForBarsChart: response.data.slice(0,6) })
                    // console.log('despues',this.state.listForBarsChart)
                } )
                .catch(err => console.log(err))            
            }

        if(this.state.type == 'flight'){
            this.flightService
                .getFlights()
                .then(response => {
                    // console.log('antes', response.data)
                    this.setState({ listForBarsChart: response.data })
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

        // console.log(this.createData(this.state.type))

        return (

            !this.state.listForBarsChart
            ?
            <h1>Cargando</h1>
            :
            <>

                <UnifiedBarsChart data = {this.createData()} />               




            </>
        )
    }
}

export default UnifiedBarsLists