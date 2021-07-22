import { Component } from "react";
import { Link } from "react-router-dom";
import DestinationsService from '../../services/destinations.service'
import DestinationCard from "./DestinationCard";


class DestinationsList extends Component {

    constructor() {
        super()
        this.state = {
            destinations: undefined,
            // modal: false
        }
        this.destinationsService = new DestinationsService()
    }

    removeDestination = destinationId => {

        this.destinationsService
            .deleteDestination(destinationId)
            .then(() => {
                this.setState({
                    destinations: this.state.destinations.filter(elem => elem._id !== destinationId)
                })
                this.props.history.push('/destinations')
            })
            .catch(err => console.log(err))
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

    render() {
        return (
            !this.state.destinations
                ?
                <h3>Cargando...</h3>
                :
                (<>

                    <Link to="/destinations/new" className="btn btn-info">New destination</Link>
                    <h4>Destinations List</h4>
                    {this.state.destinations.map(elem => <DestinationCard key={elem._id} {...elem} removeDestination={() => this.removeDestination(elem._id)} />)}
                </>)
        )
    }
}

export default DestinationsList