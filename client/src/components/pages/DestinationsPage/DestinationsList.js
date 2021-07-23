import { Component } from "react";
import DestinationsService from '../../services/destinations.service'
import DestinationCard from "./DestinationCard";
import { Table } from 'react-bootstrap';
import Spinner from "./Spinner";


class DestinationsList extends Component {

    constructor() {
        super()
        this.state = {
            destinations: undefined,
            // modal: false
        }
        this.destinationsService = new DestinationsService()
    }

    loadDestinations = () => {
        this.destinationsService
            .getDestinations()
            .then(response => this.setState({ destinations: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadDestinations()
    }

    removeDestination = destinationId => {

        this.destinationsService
            .deleteDestination(destinationId)
            .then(() => {
                this.setState({
                    destinations: this.state.destinations.filter(elem => elem._id !== destinationId)
                })
                // this.props.history.push('/destinations')
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            !this.state.destinations
                ?
                <Spinner />
                :
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Destination</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {this.state.airport.map(elm => <AirportCard key={elm._id} {...elm} deleteAirport={this.deleteAirport} setList={this.props.setList} setId={this.props.setId} />)} */}
                            {this.state.destinations.map(elem => <DestinationCard key={elem._id} {...elem} removeDestination={() => this.removeDestination(elem._id)} />)}
                        </tbody>
                    </Table>
                </>
            // (<>

            //     <Link to="/destinations/new" className="btn btn-info">New destination</Link>
            //     <h4>Destinations List</h4>
            //     {this.state.destinations.map(elem => <DestinationCard key={elem._id} {...elem} removeDestination={() => this.removeDestination(elem._id)} />)}
            // </>)
        )
    }
}

export default DestinationsList