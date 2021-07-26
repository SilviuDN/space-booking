import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import "./BuyFlightCard.css"


import { Container, Card, Button, Row, Col} from 'react-bootstrap'


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

    cutSubstring(phrase, word){
        return phrase.replace(/airport/ig, '')
    }

    numberWithCommas =(x) =>{
        x=Math.round(parseInt(x))
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    render() {
        const headerStyle = {
            backgroundColor: 'lightgreen',
          }


        return (

            <Container>

                {!this.state.flight
                    ?
                    <h3>Cargando</h3>
                    :
        <>
            <Container>
            <Card > 
            <Card.Header as="h5" style={headerStyle}>Prime Offer %</Card.Header>
            <Card.Body>
                    <Row>
                        <Col xs={12} md={8}>
                            <Row className="mb-4">
                                <Col xs={5} >                                            
                                    <img className="returnedFlightCardImage" src={this.state.flight.flightCompany.logo}></img> 
                                    <span>     {this.state.flight.flightCompany.companyName}</span>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={5}>loremIpsum</Col>
                            </Row>                            
                            <Row>
                                <Col xs={5}><p>From: {this.state.flight.airport.address.city}</p></Col>
                                <Col xs={2}></Col>
                                <Col xs={5}><p>To: {this.state.flight.destination.name}</p></Col>
                            </Row>                            
                            <Row>
                                <Col xs={5}>
                                    <p>Airport: {this.cutSubstring(this.state.flight.airport.name, 'airport')} | {this.state.flight.airport.iata}</p>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={5}>Dest Reviews Here</Col>
                            </Row>
                        
                            <Row>
                                <p>Full price: {this.numberWithCommas(this.state.flight.price)}</p>
                            </Row>
                        </Col>

                        <Col xs={12} md={4}>
                            <h3>Prime Discount</h3>
                            <p><small className="text-muted">Change dates FREE OF CHARGE</small></p>
                            <p>Only {this.state.flight.capacity - this.state.flight.soldTickets} seats left</p>
                            {/* <p>Price: <span className="strikethrough">{this.state.flight.price}$</span> {this.state.flight.price * 0.8}$</p> */}
                            <p>Price: <span className="strikethrough">
                                ${this.numberWithCommas(this.state.flight.price)}
                                </span> ${this.numberWithCommas(this.state.flight.price * 0.8)}
                                </p>
                            <Button className='BuyFlightButton' variant="primary" >Discover</Button>{' '}

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