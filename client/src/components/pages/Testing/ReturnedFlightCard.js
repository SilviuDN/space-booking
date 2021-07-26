import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import "./ReturnedFlightCard.css"


import { Container, CardGroup, Card, Button, Row, Col} from 'react-bootstrap'


class ReturnedFlightCard extends Component {

    constructor() {
        super()
        this.state = {
            flight: undefined
        }
        this.flightsService = new FlightsService()
    }

    loadFlight = () => {
        console.log(this.props.flight_id)
        const flight_id = this.props.flight_id

        this.flightsService
            .getFlight(flight_id)
            .then(response => {
                console.log("Zborul este: ", response.data)
                this.setState({ 
                    flight: response.data
                })
                console.log("Zbor din stare: ", this.state.flight)
            })
            .catch(err => console.log(err))
    }



    componentDidMount = () => {
        this.loadFlight()

    }


    render() {

        return (

            <Container>

                {!this.state.flight
                    ?
                    <h3>Cargando</h3>
                    :
        <>
            <Container>
            <Card>
            <Card.Header as="h5">Offer</Card.Header>
            <Card.Body>
                    <Row>
                        <Col xs={12} md={8}>
                            <Row>
                                <Col xs={4}>
                                    <Card
                                        bg="light"
                                        text='dark'
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Body>
                                        <Card.Title>
                                            <img className="returnedFlightCardImage" src={this.state.flight.flightCompany.logo}></img> 
                                            {this.state.flight.flightCompany.companyName}
                                        </Card.Title>
                                        <Card.Text>From {this.state.flight.airport.address.city}</Card.Text>
                                        <Card.Text>Full price: {this.state.flight.price}</Card.Text>   
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={4}>

                                </Col>
                                <Col xs={4}>
                                    <Card
                                        bg="light"
                                        text='dark'
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Body>
                                        <Card.Title>Luggage</Card.Title>
                                        <Card.Text>To: {this.state.flight.destination.name}</Card.Text>
                                        <Card.Text>Full price: {this.state.flight.price}</Card.Text>   
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                            <Card>
                            <Card.Text>Full price: {this.state.flight.price}</Card.Text> 
                            </Card>  
                            </Row>
                        </Col>

                        <Col xs={12} md={4}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Prime Discount</Card.Title>
                            <Card.Text>Change dates FREE OF CHARGE</Card.Text>
                            <Card.Text>Only {this.state.flight.capacity - this.state.flight.soldTickets} seats left</Card.Text>
                            <Card.Text>{this.state.flight.price}</Card.Text>
                            <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="primary">Primary</Button>{' '}
                            </Card.Footer>
                        </Card>
                        </Col>
                    </Row>
                    </Card.Body>
            </Card>

            </Container>

            </>
                    
                }

            </Container>
        )
    }
}


export default ReturnedFlightCard