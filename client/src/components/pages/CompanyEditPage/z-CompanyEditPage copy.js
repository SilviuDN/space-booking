import { Component } from 'react'
import CompanyService from '../../../services/company.service'
import { Form, Button, Container } from 'react-bootstrap'

class CompanyEditPage extends Component {

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

        this.companyService
            .companyDetails(company_id)

            .then(response => {
                console.log(response.data)
                this.setState({

                    companyName: response.data.companyName,
                    moderator: response.data.moderator,
                    companynumber: response.data.companyAddress.number,
                    city: response.data.companyAddress.city,
                    country: response.data.companyAddress.country,
                    street: response.data.companyAddress.street,
                    zipCode: response.data.companyAddress.zipCode,

                }
                )
            })

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
                this.props.history.push('/companies/')
            })
            .catch(err => console.log(err))

    }

    render() {
        console.log(this.state)
        return (

            <Container>
                <h1>Company Edit Form</h1>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control value={this.state.companyName} type="text" name='companyName' onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Label>Address
                        <Form.Group className="d-flex mb-2">
                            <Form.Control value={this.state.street} id='street' type="text" name='street' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.number} id='number' type="text" placeholder="number" name='number' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.zipCode} id='zipCode' type="text" placeholder="zipCode" name='zipCode' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.city} id='city' type="text" placeholder="City" name='city' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.country} id='country' type="text" placeholder="country" name='country' onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Label>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>

        )

    }
}

export default CompanyEditPage