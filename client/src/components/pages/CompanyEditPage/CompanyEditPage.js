import { Component } from 'react'
import CompanyService from '../../services/company.service'
import { Form, Button, Container } from 'react-bootstrap'



class CompanyEdit extends Component {

    constructor() {
        super()
        this.state = {
            company_id: '',
            companyName: '',
            moderator: '',
            number: '',
            city: '',
            country: '',
            street: '',
            zipCode: '',

        }
        this.companyService = new CompanyService()
    }
    componentDidMount() {

        const { company_id } = this.props.match.params

        this.userService
            .companyDetails(company_id)
            .then(response => this.setState({

                companyName: response.data.companyName,
                moderator: response.data.moderator,
                number: response.data.number,
                city: response.data.city,
                country: response.data.country,
                street: response.data.street,
                zipCode: response.data.zipCode,

            }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {

        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value, company_id: this.props.match.params.company_id })

    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.companyService
            .companyEdit(this.state)
            .then(() => {
                this.setState({

                    companyName: '',
                    moderator: '',
                    number: '',
                    city: '',
                    country: '',
                    street: '',
                    zipCode: '',

                })
                this.props.history.push('/companies')
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


export default CompanyEdit