import { Component } from 'react'
import CompanyService from '../../services/company.service'
import { Form, Button, Container } from 'react-bootstrap'
import UploadsService from '../../services/upload.service'


class CompanyEditPage extends Component {

    constructor() {
        super()
        this.state = {
            company: {
                company_id: '',
                companyName: '',
                moderator: '',
                number: '',
                city: '',
                country: '',
                street: '',
                zipCode: '',
                logo: '',
            },
            loading: false,
        }
        this.companyService = new CompanyService()
        this.uploadsService = new UploadsService()
    }


    loadData() {
        const company_id = this.props.match?.params.company_id || this.props.id


        this.companyService
            .companyDetails(company_id)
            .then(response => {
                this.setState({
                    company: {
                        ...this.state.company,
                        companyName: response.data.companyName,
                        moderator: response.data.moderator,
                        number: response.data.companyAddress.number,
                        city: response.data.companyAddress.city,
                        country: response.data.companyAddress.country,
                        street: response.data.companyAddress.street,
                        zipCode: response.data.companyAddress.zipCode,
                    }
                }
                )
            })
            .catch(err => console.log(err))
    }



    componentDidMount = () => this.loadData()

    componentDidUpdate = (prevProps, prevState) => prevProps.id !== this.props.id && this.loadData()


    handleInputChange = e => {

        e.preventDefault()
        const { name, value } = e.target
        this.setState({
            company: {
                ...this.state.company,
                [name]: value,
                company_id: this.props.match?.params.company_id || this.props.id,
            }
        })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.companyService
            .companyEdit(this.state.company)
            .then(() => {

                this.props.showAlert('Company successfully edited.')

                if (typeof this.props.sharedFunction === 'function') {

                    this.props.sharedFunction()
                }

                if (this.props.history) {

                    this.props.showAlert('Company edit Success.')

                    this.props.history.push('/')
                }
            })
            .catch(err => {
                this.props.showAlert('Something went wrong. Retry to edit.')
            })
    }


    handleFileUpload = e => {

        this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('file', e.target.files[0])

        this.uploadsService
            .fileUpload(uploadData)
            .then(response => {

                const backedUpImage = response.data.imageUrl ? response.data.imageUrl : this.state.flight.logo

                this.setState({
                    company: {
                        ...this.state.company,
                        logo: backedUpImage,
                    },
                    loading: false,
                })
            })
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>
                <h1>Company Edit Form</h1>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control value={this.state.company.companyName} type="text" name='companyName' onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="imageUrl">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    <Form.Label>Address
                        <Form.Group className="d-flex mb-2">
                            <Form.Control value={this.state.company.street} id='street' type="text" name='street' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.company.number} id='number' type="text" placeholder="number" name='number' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.company.zipCode} id='zipCode' type="text" placeholder="zipCode" name='zipCode' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.company.city} id='city' type="text" placeholder="City" name='city' onChange={this.handleInputChange} />

                            <Form.Control value={this.state.company.country} id='country' type="text" placeholder="country" name='country' onChange={this.handleInputChange} />
                        </Form.Group>
                    </Form.Label>

                    <Button variant="primary" type="submit" disabled={this.state.loading}>
                        {(this.state.loading ? 'Uploading picture' : 'Edit destination')}
                    </Button>

                </Form>
            </Container>

        )

    }
}

export default CompanyEditPage