import { Component } from 'react'
import DestinationsService from '../../services/destinations.service'

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class DestinationDetails extends Component {

    constructor() {
        super()
        this.state = {
            destination: undefined
        }
        this.destinationsService = new DestinationsService()
    }


    componentDidMount() {
        const { destination_id } = this.props.match.params
        console.log("Hello destination_id", destination_id)

        this.destinationsService
            .getDestination(destination_id)
            .then(response => {
                this.setState({ destination: response.data })
            })
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.destination
                    ?
                    <h3>Cargando Destination Details</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>Name: {this.state.destination.name}</h1>
                            <p>Description: ${this.state.destination.description}</p>

                            <hr></hr>

                            <p>Image: {this.state.destination.image}</p>

                            <hr></hr>


                            {/* <Form onSubmit={this.deleteDestination}>
                                <Button className="btn btn-danger" type="submit">Delete Destination</Button>
                            </Form> */}

                            <Link to="/destinations" className="btn btn-dark">Back to destinations list</Link>
                            <Link to={`/destinations/${this.state.destination._id}/edit`} className="btn btn-warning">Edit</Link>

                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}


export default DestinationDetails