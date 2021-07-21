
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'
import React, { Component } from 'react';
import ServiceAuth from '../../services/auth.service'
import UploadService from '../../services/upload.service'

class SignupCompanyForm extends Component {
    constructor() {
        super()

        this.state = {
            company: {
                companyName: '',
                logo: '',
                number: '',
                city: '',
                country: '',
                street: '',
                zipCode: '',
                document: [],
            },
            image_preview: '',
            loading: false
        }

        this.serviceAuth = new ServiceAuth()
        this.uploadService = new UploadService()
    }

    handleInput = (e) => {
        this.setState({
            company: {
                ...this.state.company,
                [e.target.name]: e.target.value
            }
        })
    }


    handleSubmit = (e) => {

        if (e) e.preventDefault()

        console.log('entro al submit de company')



        // // cuando acaba el insert llama al submit de userFOrm
        // this.serviceAuth.signup(this.state.company)
        //     .then(() => this.props.submitUserForm())
        //     .catch(err => console.log(err))
    }


    // Image Preview Handler

    handleUploadDocuments = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])

        let files = e.target.files

        let formData = new FormData()
        formData.append('file', files[0])


        this.uploadService.fileUpload(formData)
            .then(response => {

                const joinedDocs = [...this.state.company.document, response.data.imageUrl];

                e.target.id === 'logo'
                    ?
                    this.setState({
                        company: {
                            ...this.state.company,
                            logo: response.data.imageUrl
                        },
                        image_preview: image_as_base64,
                    })
                    :
                    this.setState({
                        company: {
                            ...this.state.company,
                            document: joinedDocs
                        }
                    })

            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.props.setSharedFn(this.handleSubmit, 'sharedSubmitCompany')



    render = () => {

        return (
            <Container>
                <h1>Company Form</h1>

                <Form className='formSignup'>
                    <Form.Group className="mb-3" controlId="comapnyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.company.name} type="text" placeholder="name" name='companyName' />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={this.handleUploadDocuments} type="file" name='file' id='logo' />
                    </Form.Group>

                    {this.state.image_preview ? <img src={this.state.image_preview} alt="profile" style={{ width: '150px', height: '120px', display: 'block' }} /> : null}


                    <Form.Label>Address
                        <Form.Group className="d-flex mb-2">
                            <Form.Control onChange={this.handleInput} value={this.state.company.street} id='companyStreet' type="text" placeholder="street" name='street' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.number} id='companynumber' type="text" placeholder="number" name='number' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.zipCode} id='companyzipCode' type="text" placeholder="zipCode" name='zipCode' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.city} id='companycity' type="text" placeholder="City" name='city' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.country} id='companycountry' type="text" placeholder="country" name='country' />
                        </Form.Group>
                    </Form.Label>

                    <Form.Group controlId="companyImg" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={this.handleUploadDocuments} type="file" name='file' />
                    </Form.Group>




                    <Button onClick={(e) => this.props.sharedFunction(e)} variant="primary" type="submit" className="d-block">
                        Submit
                    </Button>

                </Form>
            </Container>
        )
    }
}
export default SignupCompanyForm