import { Component } from 'react'
import FlightsService from '../../../services/flights.service'
import StaticRating from '../RatingComponent/StaticRating'
import "./BuyFlightCard.css"
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

        // const headerStyle = {
        //     backgroundColor: 'lightgreen',
        // }

        // console.log(this.state.flight?.flightCompany?.reviews)

        // const compRating = this.calculateRatingsMedianCompDest(this.state.flight?.flightCompany)
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

                <Card className="mx-0 px-2 mt-5" >

                    <Row style={{ fontSize: "1em" }}>
                        <Col md={9} style={{ borderRight: "1px solid #C8C9CA", }}>
                            <Row>
                                <Col md={3} style={{ backgroundColor: "#EEEEEE" }} >
                                    <p className="h4">GO</p>

                                </Col>

                                <Col md={3} >
                                    <p className="h4">{this.state.flight?.airport?.iata}</p>
                                </Col>

                                <Col md={2} style={{ backgroundColor: "#EEEEEE" }}>
                                    <p>Direct</p>
                                </Col>

                                <Col md={1} style={{ backgroundColor: "#EEEEEE" }}>

                                </Col>

                                <Col md={3} style={{ backgroundColor: "rgba(182,28,115,255)", color: "white" }}>
                                    <p className="h4" > {this.state.flight?.destination?.code}</p>
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
                                <Col md={3} style={{ margin: "10px" }}>
                                    <Button variant="dark " size="sm">Flexible booking</Button>
                                </Col>
                                <Col md={9}></Col>

                            </Row>
                        </Col>

                        <Col md={3}>
                            <Row>

                                <Col>
                                    <Row>
                                        <p className="h6">Final price</p>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <p className="h2" align="right">
                                                <span className="strikethrough">€ {this.numberWithCommas(this.state.flight?.price * 1.15)}</span>
                                            </p>
                                        </Col>

                                        <Col >
                                            € {this.numberWithCommas(this.state.flight?.price)}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <p className="h6" align="center">Only {this.state.flight?.capacity - this.state.flight?.soldTickets} seats left!</p>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Row style={{ padding: "10px" }} className="text-center">
                                        <Button className="btn  " variant="dark" onClick={() => { this.props.setPayMethod(this.props.flight) }}>Select</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </>
        )
    }
}


export default ReturnedFlightCard