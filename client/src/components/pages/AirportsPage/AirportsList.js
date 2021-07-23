import { Component } from 'react'
import { Table } from 'react-bootstrap'
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
        // const confirm = 

        if (window.confirm('Are you sure you want to delete this airport?')) {

            this.setState({
                airport: this.state.airport.filter(elm => elm._id !== airportId)
            })

            this.AirportService.deleteAirport(airportId)
                .then((res) => console.log('FALTA ALERT Airport List linea 41/42'))
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
                    <input type="text" className="form-control" placeholder="name or iata code" name="search" value={this.state.searchBox} onChange={e => { this.search(e) }} />
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
