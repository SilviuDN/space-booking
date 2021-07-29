import { Component } from 'react'
import DestinationsService from '../../services/destinations.service'

import { Container, Row, Col, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class DestinationDetails extends Component {

    constructor() {
        super()
        this.state = {
            destination: undefined
        }
        this.destinationsService = new DestinationsService()
    }


    loadDestination() {

        const destination_id = this.props.match?.params.destination_id || this.props.id
        // console.log("Hello destination_id", destination_id)

        this.destinationsService
            .getDestination(destination_id)
            .then(response => {
                this.setState({ destination: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.loadDestination()


    componentDidUpdate = (prevProps, prevState) => prevProps.id !== this.props.id && this.loadDestination()



    deleteDestination = e => {
        e.preventDefault()
        const destination_id = this.props.match?.params.destination_id || this.props.id

        this.destinationsService
            .deleteDestination(destination_id)
            .then(() => {
                this.setState({
                    destination: undefined
                })
                this.props.history.push('/destinations')
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


                            <Card className="coaster-card">
                                <Card.Img variant="top" src={this.state.destination.image} />
                                <Card.Body>
                                    <Card.Title>Name: {this.state.destination.name}</Card.Title>
                                    <Card.Subtitle>Description: {this.state.destination.description}</Card.Subtitle>
                                    {this.state.destination.reviews.map((elem, id) =>
                                        <Card.Subtitle key={id}>review: {elem}</Card.Subtitle>
                                    )}




                                </Card.Body>
                            </Card>

                            {
                                typeof this.props.setList !== 'function' ?

                                    <Link to="/destinations" className="btn btn-dark">Back to destinations list</Link>
                                    :
                                    null

                            }


                            {/* <Link to={`/destinations/${this.state.destination._id}/edit`} className="btn btn-warning">Edit</Link>
                            <button className="btn btn-danger" onClick={this.deleteDestination}>Delete</button> */}
                            {/* <Form onSubmit={this.deleteDestination}>
                                <Button className="btn btn-danger" type="submit">Delete Destination</Button>
                            </Form> */}

                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}


export default DestinationDetails