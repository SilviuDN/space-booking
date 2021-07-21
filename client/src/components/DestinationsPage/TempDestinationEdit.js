import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import DestinationsService from './../services/destinations.service'

class TempDestinationEdit extends Component {

    constructor() {
        super()
        this.state = {
            destination_id: '',
            name: '',
            description: '',
            image: '',
        }
        this.destinationsService = new DestinationsService()
    }

    componentDidMount() {

        const { destination_id } = this.props.match.params

        this.destinationsService
            .getDestination(destination_id)
            .then(response => {
                this.setState({
                    destination_id,
                    name: response.data.name,
                    description: response.data.description,
                    image: response.data.image,
                })

            })
            .catch(err => console.log(err))
    }



    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value, destination_id: this.props.match.params.destination_id })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.destinationsService
            .editDestination(this.state)
            .then(() => {
                // this.props.closeModal()
                // this.props.refreshFlights()
                this.setState({
                    name: '',
                    description: '',
                    image: '',
                })
                this.props.history.push('/silviu/destinations')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Link to="/silviu/destinations" className="btn btn-dark">Back to destinations list</Link>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </Form.Group>


                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit Destination</Button>

                </Form>



            </Container>
        )
    }
}

export default TempDestinationEdit