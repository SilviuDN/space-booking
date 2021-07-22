import { Component } from 'react'
import { Table } from 'react-bootstrap'
// import CompanyCard from './CompanyCard'
// import CompanyService from '../../services/company.service'
import AirportService from '../../services/AirportService'
import AirportCard from '../AirportsPage/AirportCard'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';


class AirportsList extends Component {

    constructor() {
        super()
        this.state = {
            airport: undefined
        }

        this.AirportService = new AirportService()
    }

    loadAirports = () => {
        this.AirportService
            .getAirports()
            .then(response => this.setState({ airport: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadAirports()
    }

    deleteAirport = airportId => {

        this.setState({
            company: this.state.company.filter(elm => elm._id !== airportId)
        })

        this.AirportService.deleteAirport(airportId)
            .then((res) => console.log(res))
            .catch(err => console.log(err))

    }


    render() {
        return (

            !this.state.airport
                ?

                <Spinner animation="grow" />

                :
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Airport</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.airport.map(elm => <AirportCard key={elm._id} {...elm} deleteAirport={this.deleteAirport} setList={this.props.setList} setId={this.props.setId} />)}

                        </tbody>
                    </Table>
                </>
        )

    }


}

export default AirportsList
