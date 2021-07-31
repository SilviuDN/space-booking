import { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AirportService from '../../../services/AirportService'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';



class AirportEdit extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            iata: '',
            address: {
                number: '',
                city: '',
                country: '',
                state: '',
            }
        }

        this.AirportService = new AirportService()
    }


    componentDidMount() {



        this.AirportService
            .airportDetails(this.props.id)
            .then(response => {

                this.setState({

                    address: {
                        ...this.state.address,
                        state: response.data.address.state,
                        country: response.data.address.country,
                        number: response.data.address.number,
                        city: response.data.address.city,
                    },
                    name: response.data.name,
                    iata: response.data.iata,
                })
            }
            )
            .catch(err => console.log(err))
    }

    handleInputChange = e => {

        e.preventDefault()
        // const { name, value } = e.target

        this.setState({

            [e.target.name]: e.target.value,
            address: {
                ...this.state.address,
                [e.target.name]: e.target.value,
            }

        })


    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.AirportService
            .editAirport(this.state, this.props.id)
            .then((res) => {

                this.setState({

                    address: {
                        ...this.state.address,
                        state: '',
                        country: '',
                        number: '',
                        city: ''
                    },
                    name: '',
                    iata: '',

                })

                this.props.setId(this.props.id)
                this.props.setList('airportDetails')

            })
            .catch(err => console.log(err))

    }

    render() {

        return (

            !this.state.name ?

                <Spinner animation="grow" />

                :
                <Container>



                    <Form onSubmit={this.handleFormSubmit}>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.handleInputChange} name='name' />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Iata code</Form.Label>
                            <Form.Control type="text" placeholder="Iata code" name='iata' value={this.state.iata} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Button type="submit">Save</Button>

                    </Form>
                </Container>

        )


    }
}


export default AirportEdit