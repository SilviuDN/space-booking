import { Component } from "react";
import CompanyService from "../../../services/company.service";
import RadarChart from "./RadarCompaniesChart";

class RadarCompanies extends Component {

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
        let xValue = elem.companyName.substr(0)
        // console.log(xValue)
        let yValue = elem.reviews.reduce( (acc,elem) => acc + parseInt(elem), 0)/ elem.reviews.length
        // console.log(yValue)
        let yColorValue = Math.floor(Math.random()*200)

        data.push(
            {
                x: xValue,
                y: yValue,
                // yColor: `hsl(${yColorValue}, 70%, 50%)`
                yColor: "hsl(19, 70%, 50%)"
            }
        )
    }


    createData(type){
        let data = []
        // console.log("list value in createData", this.state.listForLinesChart)
        this.state.listForLinesChart.forEach(elem => this.populateDataDataString(data, elem))     
        // console.log(data)

        return data 
    }


    componentDidMount = () => {
        this.loadList()


    }


    render() {

        // console.log(this.createData(this.state.type))

        return (

            !this.state.listForLinesChart
            ?
            <h1>Cargando</h1>
            :
            <>

                <BarsChart data = {this.createData('company')}/>



                




            </>
        )
    }
}

export default RadarCompanies