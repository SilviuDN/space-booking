import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import "./BuyFlightCard.css"

import { Card, Button, Row, Col } from 'react-bootstrap'



class ReturnedFlightCard extends Component {

    constructor() {
        super()
        this.state = {
            flight: undefined
        }
        this.flightsService = new FlightsService()
    }

    loadFlight = () => {

        const flights1 = { ...this.props.flight }
        console.log(flights1)
        this.setState({
            flight: this.props.flight
        })
    }


    componentDidMount() {
        this.loadFlight()
    }

    cutSubstring(phrase, word) {
        return phrase?.replace(/airport/ig, '')
    }

    numberWithCommas = (x) => {
        x = Math.round(parseInt(x))
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    render() {
        const headerStyle = {
            backgroundColor: 'lightgreen',
        }


        return (



            <Card className={'mt-5'}>
                <Card.Header as="h5" style={headerStyle}>Prime Offer %</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={12} md={8}>
                            <Row className="mb-4">
                                <Col xs={5} >
                                    <img className="returnedFlightCardImage" src={this.state.flight?.flightCompany?.logo} alt={'logo'}></img>
                                    <span>     {this.state.flight?.flightCompany?.companyName}</span>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={5}>loremIpsum</Col>
                            </Row>
                            <Row>
                                <Col xs={5}><p>From: {this.state.flight?.airport?.address.city}</p></Col>
                                <Col xs={2}></Col>
                                <Col xs={5}><p>To: {this.state.flight?.destination?.name}</p></Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <p>Airport: {this.cutSubstring(this.state.flight?.airport?.name, 'airport')} | {this.state.flight?.airport?.iata}</p>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={5}>Dest Reviews Here</Col>
                            </Row>

                            <Row>
                                <Col xs={5}>
                                    <p>Full price: {this.numberWithCommas(this.state.flight?.price)}</p>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={5}><strong>Departure:</strong> <p>{this.state.flight?.date.split('T')[0]}</p> </Col>

                            </Row>
                        </Col>

                        <hr className=" d-md-none"></hr>

                        <Col xs={12} md={4}>
                            <h3>Prime Discount</h3>
                            <p><small className="text-muted">Change dates FREE OF CHARGE</small></p>
                            <p>Only {this.state.flight?.capacity - this.state.flight?.soldTickets} seats left</p>
                            {/* <p>Price: <span className="strikethrough">{this.state.flight.price}$</span> {this.state.flight.price * 0.8}$</p> */}
                            <p>Price: <span className="strikethrough">
                                ${this.numberWithCommas(this.state.flight?.price)}
                            </span> ${this.numberWithCommas(this.state.flight?.price * 0.8)}
                            </p>
                            <Button className='BuyFlightButton' variant="primary" >Discover</Button>{' '}

                        </Col>
                    </Row>
                </Card.Body>
            </Card>




        )
    }
}


export default ReturnedFlightCard