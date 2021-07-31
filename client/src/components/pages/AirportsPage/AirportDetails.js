import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AirportService from '../../../services/AirportService'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            airportDetails: undefined
        }
        this.AirportService = new AirportService()
    }


    componentDidMount() {

        const airportId = this.props.id

        this.AirportService
            .airportDetails(airportId)
            .then(response => {

                this.setState({ airportDetails: response.data })

            })
            .catch(err => console.log(err))
    }


    render() {


        return (

            <Container>
                {!this.state.airportDetails ?
                    <>
                        <Spinner animation="grow" />
                    </>
                    :

                    <Row className="justify-content-around">
                        <Col md={12}>
                            <h3>{this.state.airportDetails.name}</h3>

                            <hr />

                            <p><strong>IATA code:</strong> {this.state.airportDetails.iata}</p>
                            <br />
                            <p><strong>Exact Location</strong></p>
                            <p>lat: {this.state.airportDetails.lat}</p>
                            <p>lng: {this.state.airportDetails.lon}</p>
                            <p>City: {this.state.airportDetails.address.city}</p>
                            <p>Country: {this.state.airportDetails.address.country}</p>
                            <hr></hr>


                            <Link to="/admin" onClick={() => this.props.setList('airports')} className="btn btn-dark">return to the list</Link>

                        </Col>

                        <Col md={4}>

                        </Col>
                    </Row>
                }

            </Container>
        )
    }



}
export default UserDetails