import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import DestinationsService from '../../services/destinations.service'
import UploadsService from '../../services/upload.service'
import Spinner from './Spinner'

class TempDestinationEdit extends Component {

    constructor() {
        super()
        this.state = {
            destination: {
                destination_id: '',
                name: '',
                description: '',
                image: '',
            },
            loading: false,

        }
        this.destinationsService = new DestinationsService()
        this.uploadsService = new UploadsService()
    }

    componentDidMount() {

        if (this.props.type === "edit") {

            const { destination_id } = this.props.match.params

            this.destinationsService
                .getDestination(destination_id)
                .then(response => {
                    this.setState({
                        destination: {
                            ...this.state.destination,
                            destination_id,
                            name: response.data.name,
                            description: response.data.description,
                            image: response.data.image,
                        }
                    })

                })
                .catch(err => console.log(err))
        }

    }



    handleInputChange = e => {
        const { name, value } = e.target
        const destinationId = this.props.type === "edit" ? this.props.match.params.destination_id : ""
        this.setState({ destination: { ...this.state.destination, [name]: value, destination_id: destinationId } })
        // this.setState({ [name]: value, destination_id: destinationId })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.props)

        if (this.props.type === "edit") {


            this.destinationsService
                .editDestination(this.state.destination)
                .then(() => {

                    this.props.showAlert('Successfully eddited')

                    this.setState({
                        destination: {
                            ...this.state.destination,
                            name: '',
                            description: '',
                            image: '',
                        }
                    })
                    this.props.history.push('/destinations')
                })
                .catch(err => {
                    console.log("Error from edit destination", err.message)
                    this.props.showAlert("Error from edit destination", err.message)
                })

        }

        if (this.props.type === "new") {
            this.destinationsService
                .saveDestination(this.state.destination)
                .then(() => {

                    this.props.showAlert('Successfully added new destination')

                    this.setState({
                        destination: {
                            ...this.state.destination,
                            name: '',
                            description: '',
                            image: '',
                        }
                    })
                    this.props.history.push('/destinations')
                })
                .catch(err => {
                    console.log("Error from new destination", err.message)
                    this.props.showAlert("Error from new destination", err.message)
                })
        }



    }


    handleFileUpload = e => {

        this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('file', e.target.files[0]) //key=file, value=e.target.files[0]

        this.uploadsService
            .fileUpload(uploadData)
            // .then(response => console.log('The answer: ', response))
            .then(response => {
                const backedUpImage = response.data.imageUrl ? response.data.imageUrl : this.state.destination.image
                this.setState({
                    destination: {
                        ...this.state.destination,
                        image: backedUpImage,
                    },
                    loading: false,
                })


            })
            // .then(response => this.setState({ image: response.data.imageUrl }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Link to="/destinations" className="btn btn-dark">Back to destinations list</Link>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.destination.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.destination.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>


                    <Form.Group controlId="imageUrl">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>


                    {this.state.loading && <Spinner size={60} />}
                    {/* <Spinner size={60} /> */}

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit" disabled={this.state.loading}>
                        {this.state.destination.destination_id
                            ?
                            (this.state.loading ? 'Uploading picture' : 'Edit destination')
                            :
                            (this.state.loading ? 'Uploading picture' : 'Create destination')
                        }
                        {/* {this.state.destination.destination_id
                            ?
                            'Edit destination'
                            :
                            'Create destination'
                        } */}
                        {this.state.loading && <Spinner size={60} />}</Button>

                </Form>



            </Container>
        )
    }
}

export default TempDestinationEdit