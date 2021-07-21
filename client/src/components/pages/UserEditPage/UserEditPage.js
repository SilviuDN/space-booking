import { Component } from 'react'
import UserService from '../../services/user.service'
import { Form, Button, Container } from 'react-bootstrap'



class UserEdit extends Component {

    constructor() {
        super()
        this.state = {
            user_id: '',
            email: '',

            name: '',
            surname: '',
            personalId: '',
            typeofId: '',
            phone: '',
            number: '',
            city: '',
            country: '',
            street: '',
            zipCode: '',
            image_preview: ''
        }
        this.userService = new UserService()
    }
    componentDidMount() {

        const { user_id } = this.props.match.params
        console.log(user_id)
        this.userService
            .userDetails(user_id)
            .then(response => this.setState({

                email: response.data.email,

                name: response.data.name,
                surname: response.data.surname,
                personalId: response.data.personalId,
                typeofId: response.data.typeofId,
                phone: response.data.phone,
                number: response.data.number,
                city: response.data.city,
                country: response.data.country,
                street: response.data.street,
                zipCode: response.data.zipCode,
                profileImg: response.data.profileImg,


            }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {

        e.preventDefault()
        const { name, value } = e.target
        console.log(this.props.match.params.user_id)
        this.setState({ [name]: value, user_id: this.props.match.params.user_id })

    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.userService
            .userEdit(this.state)
            .then(() => {
                this.setState({

                    email: '',

                    name: '',
                    surname: '',
                    personalId: '',
                    typeofId: '',
                    phone: '',
                    number: '',
                    city: '',
                    country: '',
                    street: '',
                    zipCode: '',


                })
                this.props.history.push('/alex/user')
            })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <Container>
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleInputChange} />

                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" name='surname' value={this.state.surname} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Personal Id</Form.Label>
                        <Form.Control type="text" placeholder="personalId" name='personalId' value={this.state.personalId} onChange={this.handleInputChange} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        )


    }
}


export default UserEdit