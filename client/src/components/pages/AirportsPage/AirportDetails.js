import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AirportService from '../../services/AirportService'
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
                console.log(response.data)
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
                        <h3>cargando</h3>
                    </>
                    :

                    <Row className="justify-content-around">
                        <Col md={12}>
                            <h3>{this.state.name}</h3>

                            <hr />

                            <p>IATA code: {this.state.airportDetails.code}</p>
                            <p>lat: {this.state.airportDetails.lat}</p>
                            <p>lng: {this.state.airportDetails.lon}</p>
                            <br />
                            <p><strong>Address</strong></p>
                            <p>City: {this.state.airportDetails.city}</p>
                            <p>Country: {this.state.airportDetails.country}</p>
                            <hr></hr>
                            <h3>History Flights</h3>

                            <hr></hr>

                            <Link to="" className="btn btn-dark">return to the list</Link>

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