
import { Form, Button, Container, Col, Row, Image } from 'react-bootstrap'
import CompanyService from '../../../services/company.service'
import UploadService from '../../../services/upload.service'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
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

        this.CompanyService = new CompanyService()
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


        // cuando acaba el insert llama al submit de userFOrm
        this.CompanyService.newCompany(this.state.company, userId)
            .then(() => this.props.submitUserForm())
            .catch(err => {
                // this.props.showAlert('Something went wrong! Company not registered!')
                console.log(err)
            })
    }


    // Image Preview Handler

    handleUploadDocuments = (e) => {

        if (e.target.files.length) {

            this.setState({ loading: true })

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
                            loading: false
                        })
                        :
                        this.setState({
                            company: {
                                ...this.state.company,
                                document: joinedDocs,
                            },
                            loading: false
                        })

                })
                .catch(err => console.log(err))
        }
    }

    componentDidMount = () => this.props.setSharedFn(this.handleSubmit, 'sharedSubmitCompany')



    render = () => {

        return (
            <Container>

                <h1 className='text-center mb-3'>Your company</h1>

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
                            {this.state.image_preview ? <Image src={this.state.image_preview} alt="profile" roundedCircle fluid className="logo1" style={{
                                height: '120px', margin: "0% 11%"
                            }} /> : null}
                        </Form.Group>
                        <Form.Group as={Col} controlId="hr" md={{ span: 8, offset: 2 }} className="mb-4">
                            <hr />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md={{ span: 4, offset: 2 }} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.street} id='Cstreet' type="text" placeholder="Street" name='street' />
                        </Form.Group>

                        <Form.Group as={Col} md={2} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.number} id='Cnumber' type="text" placeholder="Number" name='number' />
                        </Form.Group>
                        <Form.Group as={Col} md={2} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.zipCode} id='CzipCode' type="text" placeholder="ZipCode" name='zipCode' />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} md={{ span: 4, offset: 2 }} className="mb-4">

                            <Form.Control onChange={this.handleInput} value={this.state.city} id='Ccity' type="text" placeholder="City" name='city' />
                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-4">

                            <Form.Control onChange={this.handleInput} value={this.state.country} id='Ccountry' type="text" placeholder="Country" name='country' />

                        </Form.Group>
                        <Form.Group as={Col} md={{ span: 8, offset: 2 }} className="mb-4">
                            <hr />
                        </Form.Group>
                    </Row>

                    <Row>

                        <Form.Group as={Col} md={{ span: 2, offset: 2 }} className="mb-3 align-self-center">
                            <Form.Label><h4>Documents</h4></Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-3  align-self-center" controlId="companyImg">
                            <Form.Control onChange={this.handleUploadDocuments} type="file" name='file' required />
                        </Form.Group>

                    </Row>

                    {this.state.loading ?
                        <Form.Group as={Col} md={{ span: 8, offset: 2 }} className="mb-3 align-self-center">
                            <Button bsPrefix="btn-flat" variant="primary" type="submit" className="d-block" style={{ marginTop: '20px', width: '100%' }} disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />Loading...
                            </Button>
                        </Form.Group>

                        :
                        <Form.Group as={Col} md={{ span: 8, offset: 2 }} className="mb-3" controlId="comapnyName">
                            <Button onClick={(e) => this.props.sharedFunction(e)} bsPrefix="btn-flat" variant="primary" type="submit" className="d-block" style={{ marginTop: '20px', width: '100%' }}>
                                Submit
                            </Button>
                        </Form.Group>
                    }

                </Form>
            </Container>
        )
    }
}
export default SignupCompanyForm