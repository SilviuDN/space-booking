
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import React, { Component } from 'react';
import ServiceAuth from '../../../services/auth.service'
import UploadService from '../../../services/upload.service'
import Spinner from 'react-bootstrap/Spinner';
import './signUp.css'

class SignupUserForm extends Component {
    constructor() {
        super()

        this.state = {
            user: {
                email: '',
                pwd: '',
                name: '',
                surname: '',
                personalId: '',
                typeOfId: 'DNI',
                phone: '',
                number: '',
                city: '',
                country: '',
                street: '',
                zipCode: '',
                profileImg: '',
            },
            image_preview: '',
            loading: false,
        }

        this.serviceAuth = new ServiceAuth()
        this.uploadService = new UploadService()
    }

    handleInput = (e) => {

        if (e.target.id === 'typeOfId') {
            this.setState({
                user: {
                    ...this.state.user,
                    typeOfId: e.target.value
                }
            })

        } else {

            this.setState({
                user: {
                    ...this.state.user,
                    [e.target.name]: e.target.value
                }
            })
        }
    }



    handleSubmit = (e) => {

        if (e) e.preventDefault()


        this.serviceAuth.signup(this.state.user)
            .then(res => {
                console.log(res)

                this.props.showAlert('Welcome to our comunity! SignUp successful')

                if (this.props.sharedFunction) {
                    this.props.sharedFunction(res.data.response._id)
                }

            })
            .catch(err => {
                this.props.showAlert('Something went wrong! retry to signup!')
                console.log(err)
            })

        this.props.props.history.push('/')
    }




    handleUploadDocuments = (e) => {

        this.setState({ loading: true })
        // si hay archivo seleccionado
        if (e.target.files.length) {

            let image_as_base64 = URL.createObjectURL(e.target.files[0])


            let formData = new FormData()
            formData.append('file', e.target.files[0])


            this.uploadService.fileUpload(formData)
                .then(response => {

                    this.setState({
                        user: {
                            ...this.state.user,
                            profileImg: response.data.imageUrl
                        },
                        image_preview: image_as_base64,
                        loading: false
                    })

                })
                .catch(err => console.log(err))
        }
    }



    componentDidMount = () => this.props.setSharedFn(this.handleSubmit, 'sharedSubmitUser')


    render = () => {
        return (
            <Container>
                <h1 className='text-center mt-5 mb-3'>User</h1>
                <Form onSubmit={this.handleSubmit} className={'pb-5'}>

                    <Form.Group as={Col} controlid="formBasicEmail" md={{ span: 8, offset: 2 }} className="mb-3">


                        <Form.Control onChange={this.handleInput} value={this.state.email} type="email" placeholder="E-mail" name='email' />
                        <Form.Text className="text-muted">
                            This email will be your user account.
                        </Form.Text>

                    </Form.Group>

                    <Form.Group as={Col} controlid="formBasicPassword" md={{ span: 8, offset: 2 }} className="mb-4">

                        <Form.Control onChange={this.handleInput} value={this.state.pwd} type="password" placeholder="Password" name='pwd' />
                    </Form.Group>


                    <Form.Group as={Col} controlid="name" md={{ span: 8, offset: 2 }} className="mb-4">

                        <Form.Control onChange={this.handleInput} value={this.state.name} type="text" placeholder="Name" name='name' />
                    </Form.Group>
                    <Form.Group as={Col} controlid="surname" md={{ span: 8, offset: 2 }} className="mb-4">

                        <Form.Control onChange={this.handleInput} value={this.state.text} type="text" placeholder="Surname" name='surname' />
                    </Form.Group>

                    <Row >
                        <Form.Group as={Col} controlId="typeOfId" md={{ span: 2, offset: 2 }} className="mb-4">
                            <Form.Control
                                as="select"
                                custom
                                value={this.state.typeofId}
                                onChange={this.handleInput}
                                className="form-select"
                                style={{ color: "gray" }}
                            >

                                <option>DNI</option>
                                <option>PASSPORT</option>
                                <option>OTHER</option>
                            </Form.Control>

                        </Form.Group>


                        <Form.Group as={Col} controlid="personalId" md={6} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.personalId} type="text" placeholder="Number of personal ID" name='personalId' />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlid="phone" md={{ span: 8, offset: 2 }} className="mb-4">
                        <Form.Control onChange={this.handleInput} value={this.state.phone} type="text" placeholder="Phone + " name='phone' />
                        <br />

                        <hr />
                    </Form.Group>


                    <Row>
                        <Form.Group as={Col} md={{ span: 4, offset: 2 }} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.street} id='street' type="text" placeholder="Street" name='street' />
                        </Form.Group>

                        <Form.Group as={Col} md={2} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.number} id='number' type="text" placeholder="Number" name='number' />
                        </Form.Group>

                        <Form.Group as={Col} md={2} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.zipCode} id='zipCode' type="text" placeholder="ZipCode" name='zipCode' />
                        </Form.Group>
                    </Row>



                    <Row>

                        <Form.Group as={Col} md={{ span: 4, offset: 2 }} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.city} id='city' type="text" placeholder="City" name='city' />
                        </Form.Group>

                        <Form.Group as={Col} md={4} className="mb-4">
                            <Form.Control onChange={this.handleInput} value={this.state.country} id='country' type="text" placeholder="Country" name='country' />

                        </Form.Group>
                        <Form.Group as={Col} controlid="hr" md={{ span: 8, offset: 2 }} className="mb-4">
                            <hr />
                        </Form.Group>
                    </Row>


                    <Row  >
                        <Form.Group as={Col} md={{ span: 2, offset: 2 }} className="mb-3 align-self-center">
                            <Form.Label><h4>Profile image</h4></Form.Label>

                        </Form.Group>
                        <Form.Group as={Col} md={4} className="mb-3  align-self-center">
                            <Form.Control onChange={this.handleUploadDocuments} type="file" name='profileImg' id='profileImg' controlid="formFile" />
                        </Form.Group>

                        <Form.Group as={Col} md={4} controlid="imagePreview" className="mb-4">
                            {this.state.image_preview ? <Image src={this.state.image_preview} roundedCircle fluid alt="profile" style={{
                                height: '120px', margin: "0% 11%"
                            }} /> : null}

                        </Form.Group>


                        {!this.props.companyRender ?

                            this.state.loading ?

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


                                <Form.Group as={Col} md={{ span: 8, offset: 2 }} className="mb-3 align-self-center">
                                    <hr />
                                    <Button bsPrefix="btn-flat" variant="primary" type="submit" className="d-block" style={{ marginTop: '20px', width: '100%' }} >
                                        Submit
                                    </Button>
                                </Form.Group>
                            : null
                        }

                    </Row>
                    <Form.Group as={Col} controlid="hr" md={{ span: 8, offset: 2 }} className="mb-4">
                        <hr />
                    </Form.Group>

                </Form>
            </Container >
        )
    }
}
export default SignupUserForm