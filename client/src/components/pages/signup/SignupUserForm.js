
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'
import React, { Component } from 'react';
import ServiceAuth from '../../services/auth.service'

class SignupUserForm extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            pwd: '',
            name: '',
            surname: '',
            personalId: '',
            typeofId: 'dni',
            phone: '',
            number: '',
            city: '',
            country: '',
            street: '',
            zipCode: '',
            profileImg: undefined,
            image_preview: '',
        }

        this.serviceAuth = new ServiceAuth()
    }

    handleInput = (e) => {
        if (e.target.id === 'typeofId') {
            this.setState({
                typeofId: e.target.value
            })

        } else {

            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }


    handleSubmit = (e) => {

        if (e) e.preventDefault()
        console.log('entro al USER FORM submit')

        // let formData = new FormData()
        // formData.append('profileImg', this.state.profileImg)

        // this.serviceAuth.signup(this.state, formData)
        //     .then(() => {
        //         // redirect o borrar campos pensar
        //     })
        //     .catch(err => console.log(err))
    }

    // Image Preview Handler
    handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];


        this.setState({
            image_preview: image_as_base64,
            profileImg: image_as_files,
        })
    }


    componentDidMount = () => this.props.setSharedFn(this.handleSubmit, 'sharedSubmitUser')


    render = () => {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.email} type="email" placeholder="Enter email" name='email' />
                        <Form.Text className="text-muted">
                            This email will be your user account
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.pwd} type="password" placeholder="Password" name='pwd' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.name} type="text" placeholder="name" name='name' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="surname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.text} type="text" placeholder="Surname" name='surname' />
                    </Form.Group>



                    <Form.Group controlId="typeofId">
                        <Form.Control
                            as="select"
                            custom
                            value={this.state.typeofId}
                            onChange={this.handleInput}
                        >
                            <option>dni</option>
                            <option>passport</option>
                        </Form.Control>

                        <Form.Group className="mb-3" controlId="personalId">
                            <Form.Label></Form.Label>
                            <Form.Control onChange={this.handleInput} value={this.state.personalId} type="text" placeholder="personalId" name='personalId' />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control onChange={this.handleInput} value={this.state.phone} type="text" placeholder="phone" name='phone' />
                    </Form.Group>

                    <Form.Label>Address
                        <Form.Group className="d-flex mb-2">
                            <Form.Control onChange={this.handleInput} value={this.state.street} id='street' type="text" placeholder="street" name='street' />

                            <Form.Control onChange={this.handleInput} value={this.state.number} id='number' type="text" placeholder="number" name='number' />

                            <Form.Control onChange={this.handleInput} value={this.state.zipCode} id='zipCode' type="text" placeholder="zipCode" name='zipCode' />

                            <Form.Control onChange={this.handleInput} value={this.state.city} id='city' type="text" placeholder="City" name='city' />

                            <Form.Control onChange={this.handleInput} value={this.state.country} id='country' type="text" placeholder="country" name='country' />
                        </Form.Group>
                    </Form.Label>

                    <Form.Group controlId="img" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={this.handleImagePreview} type="file" name='profileImg' />
                    </Form.Group>

                    {this.state.image_preview ? <img src={this.state.image_preview} alt="profile" style={{ width: '150px', height: '120px' }} /> : null}

                    {!this.props.companyRender ?
                        <Button variant="primary" type="submit" className="d-block">
                            Submit
                        </Button>

                        : null
                    }

                </Form>
            </Container>
        )
    }
}
export default SignupUserForm