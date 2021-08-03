import { Component } from 'react'
import { Table } from 'react-bootstrap'
import AirportService from '../../../services/AirportService'
import AirportCard from '../AirportsPage/AirportCard'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
import SearchBox from '../../shared/searchBox/searchBox'

class AirportsList extends Component {

    constructor() {
        super()
        this.state = {
            airport: undefined
        }

        this.AirportService = new AirportService()
    }


    loadAirports = (string) => {

        !string ?
            this.AirportService
                .getAirports()
                .then(response => this.setState({ airport: response.data }))
                .catch(err => console.log(err))

            :

            this.AirportService
                .searchAirport(string)
                .then(response => this.setState({ airport: response.data }))
                .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadAirports()
    }


    deleteAirport = airportId => {

        if (window.confirm('Are you sure you want to delete this airport?')) {

            this.setState({
                airport: this.state.airport.filter(elm => elm._id !== airportId)
            })

            this.AirportService.deleteAirport(airportId)
                .then(() => console.log('FALTA ALERT Airport List linea 41/42'))
                .catch(err => console.log(err))
        }
    }


    render() {

        return (

            !this.state.airport
                ?

                <Spinner animation="grow" />

                :
                <>
                    <SearchBox load={this.loadAirports} />

                    <Table striped bordered hover className="tableList">
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
