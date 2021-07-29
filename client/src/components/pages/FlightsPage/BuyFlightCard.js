import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import StaticRating from '../RatingComponent/StaticRating'
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


    calculateRatingsMedianCompDest(elem){
        return Math.round( elem?.reviews.reduce( (acc,elem) => acc + parseInt(elem), 0)/ Math.max(elem?.reviews.length, 1) )
    }

    render() {

        const headerStyle = {
            backgroundColor: 'lightgreen',
        }

        // console.log(this.state.flight?.flightCompany?.reviews)

        const compRating = this.calculateRatingsMedianCompDest(this.state.flight?.flightCompany)
        const destRating = this.calculateRatingsMedianCompDest(this.state.flight?.destination)
        const airportRating = this.calculateRatingsMedianCompDest(this.state.flight?.airport)
        const colorFilled = "silver"
        const colorBorder = "red"

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
                                    <StaticRating  rating={compRating} colorFilled={colorFilled} colorBorder={colorBorder}/>
                                </Col>

                                <Col xs={2}></Col>
                                <Col xs={5}>loremIpsum</Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <p>From: {this.state.flight?.airport?.address.city}</p>
                                </Col>
                                <Col xs={{ span: 5, offset: 2 }}>
                                    <p>To: {this.state.flight?.destination?.name}</p>
                                    <StaticRating  rating={destRating} colorFilled={colorFilled} colorBorder={colorBorder}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <p>Airport: {this.cutSubstring(this.state.flight?.airport?.name, 'airport')} | {this.state.flight?.airport?.iata}</p>
                                    <StaticRating  rating={airportRating} colorFilled={colorFilled} colorBorder={colorBorder}/>
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

                            <p>Price: <span className="strikethrough">
                                ${this.numberWithCommas(this.state.flight?.price * 1.15)}
                            </span> ${this.numberWithCommas(this.state.flight?.price )}
                            </p>

                            <Button className='BuyFlightButton' onClick={() => { this.props.setPayMethod(this.props.flight) }} variant="primary" >Buy</Button>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}


export default ReturnedFlightCard