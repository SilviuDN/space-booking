import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import StaticRating from '../RatingComponent/StaticRating'
import "./BuyFlightCard.css"
import Link from 'react-dom'

import { Card, Button, Row, Col, Image } from 'react-bootstrap'



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


    calculateRatingsMedianCompDest(elem) {
        return Math.round(elem?.reviews.reduce((acc, elem) => acc + parseInt(elem), 0) / Math.max(elem?.reviews.length, 1))
    }

    render() {

        const headerStyle = {
            backgroundColor: 'lightgreen',
        }

        // console.log(this.state.flight?.flightCompany?.reviews)

        const compRating = this.calculateRatingsMedianCompDest(this.state.flight?.flightCompany)
        const destRating = this.calculateRatingsMedianCompDest(this.state.flight?.destination)
        const airportRating = this.calculateRatingsMedianCompDest(this.state.flight?.airport)
        const colorFilled = "rgba(182,28,115,0.7)"
        const colorBorder = "gray"
        const date1 = new Date(this.state.flight?.date).toLocaleDateString(
            'en-gb',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timezome: 'utc'
            })
        const days = Math.floor(Math.random() * 500)


        return (
            <>
                {/* <Card className={'mt-5'}>

                    <Card.Body>
                        <Row>
                            <Col xs={12} md={8}>
                                <Row className="mb-4">
                                    <Col xs={5} >
                                        <img className="returnedFlightCardImage" src={this.state.flight?.flightCompany?.logo} alt={'logo'}></img>
                                        <span>     {this.state.flight?.flightCompany?.companyName}</span>
                                        <StaticRating rating={compRating} colorFilled={colorFilled} colorBorder={colorBorder} />
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
                                        <StaticRating rating={destRating} colorFilled={colorFilled} colorBorder={colorBorder} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        <p>Airport: {this.cutSubstring(this.state.flight?.airport?.name, 'airport')} | {this.state.flight?.airport?.iata}</p>
                                        <StaticRating rating={airportRating} colorFilled={colorFilled} colorBorder={colorBorder} />
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
                                    €{this.numberWithCommas(this.state.flight?.price * 1.15)}
                                </span> $ {this.numberWithCommas(this.state.flight?.price)}
                                </p>

                                <Button className='BuyFlightButton' onClick={() => { this.props.setPayMethod(this.props.flight) }} variant="primary" >Buy</Button>

                            </Col>
                        </Row>
                    </Card.Body> 

                </Card>*/}
                <br /><br />
                <Card className="mx-0 px-2" >

                    <Row style={{ fontSize: "1em" }}>
                        <Col md={9} style={{ borderRight: "1px solid #C8C9CA", }}>

                            <Row >

                                <Col md={3} style={{ backgroundColor: "#EEEEEE" }} >
                                    <p class="h4">GO</p>

                                </Col>
                                <Col md={3} >
                                    <p class="h4">{this.state.flight?.airport?.iata}</p>



                                </Col>

                                <Col md={2} style={{ backgroundColor: "#EEEEEE" }}>

                                    <p>Direct</p>

                                </Col>
                                <Col md={1} style={{ backgroundColor: "#EEEEEE" }}>


                                </Col>

                                <Col md={3} style={{ backgroundColor: "rgba(182,28,115,255)", color: "white" }}>
                                    <p class="h4" > {this.state.flight?.destination?.code}</p>


                                </Col>

                            </Row>


                            <Row>
                                <Col md={3} style={{ backgroundColor: "#EEEEEE" }}><p style={{}} >{date1}</p></Col>
                                <Col md={3}><p>{this.state.flight?.airport?.address.city}</p></Col>



                                <Col md={2} style={{ backgroundColor: "#EEEEEE" }}>Time transit</Col>
                                <Col md={1} style={{ backgroundColor: "#EEEEEE" }}></Col>
                                <Col md={3} style={{ backgroundColor: "rgba(182,28,115,255)", color: "white" }}><p>{this.state.flight?.destination?.name}</p></Col>
                            </Row>
                            <Row>
                                <Col md={3}></Col>
                                <Col md={3}><StaticRating rating={airportRating} colorFilled={colorFilled} colorBorder={colorBorder} /></Col>
                                <Col md={2}></Col>
                                <Col md={1} ></Col>

                                <Col md={3}>  <StaticRating rating={destRating} colorFilled={colorFilled} colorBorder={colorBorder} /></Col>



                            </Row>
                            <br />
                            <Row style={{ borderBottom: "1px solid #C8C9CA", }}>
                                <Col md={3}> <p><Image src={this.state.flight?.flightCompany?.logo} roundedCircle alt={'logo'} style={{ height: "20px" }} /> {this.state.flight?.flightCompany?.companyName}</p></Col>
                                <Col md={3}> 00:05</Col>




                                <Col md={2}><p>{days} days</p></Col>
                                <Col md={1}></Col>
                                <Col md={3}>06:00</Col>
                            </Row>

                            <Row>
                                <Col md={3} style={{ margin: "10px" }}><Button variant="dark " size="sm">Flexible booking</Button></Col>
                                <Col md={9}></Col>

                            </Row>

                        </Col>

                        <Col md={3}>
                            <Row>

                                <Col>
                                    <Row><p className="h6">Final price</p></Row>
                                    <Row> <p class="h2" align="right"> <Col><span className="strikethrough">€ {this.numberWithCommas(this.state.flight?.price * 1.15)}
                                    </span></Col> <Col >€ {this.numberWithCommas(this.state.flight?.price)}</Col></p></Row>
                                    <Row> <p class="h6" align="center">Only {this.state.flight?.capacity - this.state.flight?.soldTickets} seats left!</p></Row>
                                </Col>

                            </Row>
                            <Row>
                                <Col  >


                                    <Row style={{ padding: "10px" }} class="text-center" ><Button className="btn  " variant="dark" onClick={() => { this.props.setPayMethod(this.props.flight) }}>Select</Button></Row>
                                </Col>

                            </Row>

                        </Col>

                    </Row>



                </Card >


            </>

        )
    }
}


export default ReturnedFlightCard