import { Component } from 'react'
import UserService from '../../services/user.service'
import { Form, Button, Container } from 'react-bootstrap'
import UploadService from '../../services/upload.service'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

class UserEdit extends Component {

    constructor() {

        super()

        this.state = {

            user: {
                email: '',
                name: '',
                surname: '',
                personalId: '',
                typeofId: 'dni',
                phone: '',
                address: {
                    number: '',
                    city: '',
                    country: '',
                    street: '',
                    zipCode: '',
                }
            },
            image_preview: '',
            uploading: false,
        }

        this.userService = new UserService()
        this.uploadService = new UploadService()
    }


    loadUserData() {

        const id = this.props.match.params.user_id || this.props.id

        this.userService

            .userDetails(id)
            .then(response => {
                this.setState({
                    user: {
                        ...this.state.user,
                        email: response.data.email,
                        name: response.data.name,
                        surname: response.data.surname,
                        personalId: response.data.personalId,
                        typeofId: response.data.typeofId,
                        phone: response.data.phone,
                        profileImg: response.data.profileImg,
                        address: {
                            ...this.state.user.address,
                            number: response.data.address.number,
                            city: response.data.address.city,
                            country: response.data.address.country,
                            street: response.data.address.street,
                            zipCode: response.data.address.zipCode,
                        }
                    },
                })
            })
            .catch(err => console.log(err))
    }



    componentDidMount = () => this.loadUserData()

    componentDidUpdate = (prevProps, prevState) => prevProps.id !== this.props.id && this.loadUserData()

    handleInputChange = e => {
        e.preventDefault()

        const { name, value } = e.target

        if (e.target.className.includes('address')) {

            this.setState({
                user: {
                    ...this.state.user,
                    address: {
                        ...this.state.user.address,
                        [name]: value,
                    }
                }
            })
        } else {
            this.setState({ user: { ...this.state.user, [name]: value, } })
        }

    }


    handleUploadDocuments = (e) => {
        // si hay archivo seleccionado

        this.setState({
            uploading: true,
        })

        if (e.target.files.length) {

            // let image_as_base64 = URL.createObjectURL(e.target.files[0])


            let formData = new FormData()
            formData.append('file', e.target.files[0])


            this.uploadService.fileUpload(formData)
                .then(response => {

                    this.setState({
                        user: {
                            ...this.state.user,
                            profileImg: response.data.imageUrl
                        },
                        uploading: false,
                    })

                })
                .catch(err => console.log(err))
        }
    }



    handleFormSubmit = e => {
        e.preventDefault()
<<<<<<< HEAD
        const user_id = this.props.match.params.user_id || this.props.id
        console.log(user_id)
        this.userService
            .userEdit(this.state, user_id)
=======
        const id = this.props.match.params.user_id || this.props.id

        this.userService
            .userEdit(this.state, id)
>>>>>>> e0e5b5b10ca047ff7140117665cf6d32015fa539
            .then(() => {
                this.props.showAlert('User Edit success')

                if (this.props.sharedFunction) {

                    this.props.sharedFunction()
                }

                if (this.props.history) {

                    this.props.history.push(`/users/${id}`)
                }

            })
            .catch(err => console.log(err))
    }



    render() {

        return (

            <Container>

                <Form className={'pb-5'}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.user.email} type="email" placeholder="Enter email" name='email' />
                        <Form.Text className="text-muted">
                            This email will be your user account
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.user.name} type="text" placeholder="name" name='name' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="surname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.user.surname} type="text" placeholder="Surname" name='surname' />
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
                            <Form.Control onChange={this.handleInputChange} value={this.state.user.personalId} type="text" placeholder="personalId" name='personalId' />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.user.phone} type="text" placeholder="phone" name='phone' />
                    </Form.Group>

                    <Form.Label>Address
                        <Form.Group className="d-flex mb-2">
                            <Form.Control onChange={this.handleInputChange} value={this.state.user.address.street} className={'address'} id='street' type="text" placeholder="street" name='street' />

                            <Form.Control onChange={this.handleInputChange} value={this.state.user.address.number} className={'address'} id='number' type="text" placeholder="number" name='number' />

                            <Form.Control onChange={this.handleInputChange} value={this.state.user.address.zipCode} className={'address'} id='zipCode' type="text" placeholder="zipCode" name='zipCode' />

                            <Form.Control onChange={this.handleInputChange} value={this.state.user.address.city} className={'address'} id='city' type="text" placeholder="City" name='city' />

                            <Form.Control onChange={this.handleInputChange} value={this.state.user.address.country} className={'address'} id='country' type="text" placeholder="country" name='country' />
                        </Form.Group>
                    </Form.Label>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={this.handleUploadDocuments} type="file" name='profileImg' id='profileImg' />
                    </Form.Group>

                    {this.state.user.profileImg ? <img src={this.state.user.profileImg} alt="profileImg" style={{ width: '150px', height: '120px', marginBottom: 10 }} /> : null}

                    {this.state.uploading ?

                        <Button variant="primary" className="d-block" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />Loading...
                        </Button>

                        :

                        <Button variant="primary" type="submit" className="d-block" onClick={(e) => this.handleFormSubmit(e)}>
                            Save Changes
                        </Button>
                    }

                </Form>

            </Container>

        )

    }

}

export default UserEdit