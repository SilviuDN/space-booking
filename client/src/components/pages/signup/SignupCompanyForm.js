
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap'
import React, { Component } from 'react';
import ServiceAuth from '../../services/auth.service'
import UploadService from '../../services/upload.service'
import './signUp.css'

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


    handleSubmit = (userId) => {

        // if (e) e.preventDefault()

        console.log('entro al submit de company')



        // cuando acaba el insert llama al submit de userFOrm
        this.serviceAuth.newCompany(this.state.company, userId)
            .then(() => this.props.submitUserForm())
            .catch(err => {
                // this.props.showAlert('Something went wrong! Company not registered!')
                console.log(err)
            })
    }


    // Image Preview Handler

    handleUploadDocuments = (e) => {

        if (e.target.files.length) {

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
    }

    componentDidMount = () => this.props.setSharedFn(this.handleSubmit, 'sharedSubmitCompany')



    render = () => {

        return (
            <Container>



                <Form className='formSignup pb-5'>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }} className="mb-3" controlId="comapnyName">


                        <Form.Control onChange={this.handleInput} value={this.state.company.name} type="text" placeholder="Company Name" name='companyName' />
                    </Form.Group>

                    <Row>

                        <Form.Group as={Col} md={{ span: 2, offset: 2 }} className="mb-3 align-self-center">
                            <Form.Label><h4>Logo Image</h4></Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-3  align-self-center">
                            <Form.Control onChange={this.handleUploadDocuments} type="file" name='file' id='logo' />
                        </Form.Group>
                        <Form.Group as={Col} md={4} controlId="imagePreview" className="mb-4">
                            {this.state.image_preview ? <Image src={this.state.image_preview} alt="profile" roundedCircle fluid alt="profile" className="logo1" style={{
                                height: '120px', margin: "0% 11%"
                            }} /> : null}
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} md={{ span: 4, offset: 2 }} controlId="street" className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.company.street} id='companyStreet' type="text" placeholder="Street" name='street' />
                        </Form.Group>

                        <Form.Group as={Col} md={2} controlId="number" className="mb-4">

                            <Form.Control onChange={this.handleInput} value={this.state.company.number} id='companyNumber' type="text" placeholder="Number" name='number' />
                        </Form.Group>
                        <Form.Group as={Col} md={2} controlId="zipCode" className="mb-4">

                            <Form.Control onChange={this.handleInput} value={this.state.company.zipCode} id='companyzipCode' type="text" placeholder="ZipCode" name='zipCode' />
                        </Form.Group>
                    </Row>



                    <Row>

                        <Form.Group as={Col} controlId="city" md={{ span: 4, offset: 2 }} className="mb-4">

                            <Form.Control onChange={this.handleInput} value={this.state.company.city} id='companyCity' type="text" placeholder="City" name='city' />
                        </Form.Group>
                        <Form.Group as={Col} controlId="country" md={4} className="mb-4">

                            <Form.Control onChange={this.handleInput} value={this.state.company.country} id='companyCountry' type="text" placeholder="Country" name='country' />

                        </Form.Group>
                        <Form.Group as={Col} controlId="hr" md={{ span: 8, offset: 2 }} className="mb-4">
                            <hr />
                        </Form.Group>
                    </Row>
                    {/* <Form.Label>Address
                        <Form.Group className="d-flex mb-2">
                            <Form.Control onChange={this.handleInput} value={this.state.company.street} id='companyStreet' type="text" placeholder="street" name='street' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.number} id='companynumber' type="text" placeholder="number" name='number' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.zipCode} id='companyzipCode' type="text" placeholder="zipCode" name='zipCode' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.city} id='companycity' type="text" placeholder="City" name='city' />

                            <Form.Control onChange={this.handleInput} value={this.state.company.country} id='companycountry' type="text" placeholder="country" name='country' />
                        </Form.Group>
                    </Form.Label> */}
                    {/* <Row>
                        <Form.Group as={Col} md={{ span: 8, offset: 2 }} controlId="companyImg" className="mb-3">
                            <Form.Label>Documents</Form.Label>
                            <Form.Control onChange={this.handleUploadDocuments} type="file" name='file' />
                        </Form.Group>

                    </Row> */}

                    <Row>

                        <Form.Group as={Col} md={{ span: 2, offset: 2 }} className="mb-3 align-self-center">
                            <Form.Label><h4>Documents</h4></Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-3  align-self-center" controlId="companyImg">
                            <Form.Control onChange={this.handleUploadDocuments} type="file" name='file' />
                        </Form.Group>

                    </Row>
                    <Form.Group as={Col} md={{ span: 8, offset: 2 }} className="mb-3" controlId="comapnyName">

                        <Button onClick={(e) => this.props.sharedFunction(e)} bsPrefix="btn-flat" variant="primary" type="submit" className="d-block" style={{ marginTop: '20px', width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Group>

                </Form>
            </Container>
        )
    }
}
export default SignupCompanyForm