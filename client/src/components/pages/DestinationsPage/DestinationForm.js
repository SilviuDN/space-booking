import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import DestinationsService from '../../services/destinations.service'
import UploadsService from '../../services/upload.service'


class DestinationForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            image: '',
        }
        this.destinationsService = new DestinationsService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.destinationsService
            .saveDestination(this.state)
            .then(() => {
                this.setState({
                    name: '',
                    description: '',
                    image: '',
                })
                this.props.history.push('/destinations')
            })
            .catch(err => console.log(err))
    }



    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append('file', e.target.files[0]) //key=file, value=e.target.files[0]

        this.uploadsService
            .fileUpload(uploadData)
            // .then(response => console.log('The answer: ', response))
            .then(response => this.setState({ image: response.data.imageUrl }))
            .catch(err => console.log(err))
    }

    // handleFileUpload(e) {

    //     // this.setState({ isUploading: true })

    //     const uploadData = new FormData()
    //     uploadData.append('imageData', e.target.files[0])

    //     this.uploadsService
    //         .fileUpload(uploadData)
    //         // .then(response => console.log(response.data.secure_url))
    //         .then(response => this.setState({ image: response.data.secure_url }))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <Container>
                <Link to="/destinations" className="btn btn-dark">Back to destinations list</Link>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>


                    <Form.Group controlId="imageUrl">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    {/* <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </Form.Group> */}



                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">New Destination</Button>

                </Form>



            </Container>
        )
    }
}

export default DestinationForm