import { Component } from "react";
import DestinationsService from '../../../services/destinations.service'
import DestinationCard from "./DestinationCard";
import { Table } from 'react-bootstrap';
import Spinner from "./Spinner";
import SearchBox from "../../shared/searchBox/searchBox";
import { Link } from 'react-router-dom'


class DestinationsList extends Component {

    constructor() {
        super()
        this.state = {
            destinations: undefined,
            // modal: false
        }
        this.destinationsService = new DestinationsService()
    }

    loadDestinations = (searchString) => {

        !searchString ?

            this.destinationsService
                .getDestinations()
                .then(response => this.setState({ destinations: response.data }))
                .catch(err => console.log(err))
            :


            this.destinationsService
                .searchDestination(searchString)
                .then(response => this.setState({ destinations: response.data }))
                .catch(err => console.log(err))

    }

    componentDidMount = () => {
        this.loadDestinations()
        this.props.sharedFunction('destinationsList', this.loadDestinations)
    }

    removeDestination = destinationId => {


        if (window.confirm('¿ Are you sure want to delete this destination ?')) {

            this.destinationsService
                .deleteDestination(destinationId)
                .then(res => {

                    this.props.showAlert(`Successfully Deleted destination `)

                    this.setState({
                        destinations: this.state.destinations.filter(elem => elem._id !== res.data._id)
                    })

                    if (this.props.history) this.props.history.push('/destinations')
                })
                .catch(err => console.log(err))


        }
    }


    render() {
        return (
            !this.state.destinations
                ?
                <Spinner />
                :
                <>
                    {
                        this.props.loggedUser?.role === 'moderator' || this.props.loggedUser?.role === 'admin' ?

                            typeof this.props.setId === 'function' ?

                                <Link to="/admin" onClick={(e) => { this.props.setId(this.props.id); this.props.setList('createDestination') }} className="btn btn-dark">Create Destination</Link>
                                :
                                <Link to='/destinations/new' className="btn btn-dark">Create Destination</Link>

                            : null
                    }

                    <SearchBox load={this.loadDestinations} />

                    <Table striped bordered hover className="tableList">
                        <thead>
                            <tr>
                                <th>Destination</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {this.state.airport.map(elm => <AirportCard key={elm._id} {...elm} deleteAirport={this.deleteAirport} setList={this.props.setList} setId={this.props.setId} />)} */}
                            {this.state.destinations.map(elem => <DestinationCard key={elem._id} {...elem} removeDestination={() => this.removeDestination(elem._id)} setList={this.props.setList} setId={this.props.setId} loggedUser={this.props.loggedUser} showAlert={this.props.showAlert} />)}
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