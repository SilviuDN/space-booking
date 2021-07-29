import { Component } from 'react'
import UserService from '../../services/user.service'
import { Container, Row, Col, Card, Form, FormLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CheckoutPage.css'

class Checkout extends Component {
    constructor() {
        super()

        this.state = {
            user: undefined,
        }

        this.userService = new UserService()
    }

    onChangeValue(event) {
        // por si queremos usar los radials
        // console.log(event.target.value);
    }


    setflightInUser = () => {
        this.userService.setflightInUser(this.state.user)
        console.log(this.props)
    }



    render() {

        return (

            <Container>
                <Button onClick={() => this.props.setPayMethod(undefined)}><h3>Return to previous page</h3></Button>

                <br />

                <Row className="justify-content-around">
                    <Col md={8}>
                        <h4>Not long to go! Complete your data and finalize your purchase</h4>
                        <br />

                        <Card body>¡ With your Space card you can earn double Space Points on this purchase!</Card>

                        <br />

                        <Card body>
                            <h3>Payment Method</h3>

                            <br />

                            <div onChange={this.onChangeValue}>
                                <input type="radio" value="Credit Card" name="gender" /> Credit Card
                                <hr />
                                <input type="radio" value="Debit Card" name="gender" /> Debit Card
                                <hr />
                                <input type="radio" value="Bank" name="gender" /> By Bank
                            </div>
                        </Card>

                        <br />

                        <Card body>
                            <h3>Insert Card data</h3>

                            <br />

                            <Form>
                                <Row>
                                    <Form.Group as={Col} md={6} className="mb-4">
                                        <FormLabel>Card Number</FormLabel>
                                        <Form.Control id='cardNumber' type="text" placeholder="Ingresa el número de tarjeta" name='cardNumber' />
                                    </Form.Group>


                                    <Form.Group as={Col} md={6} className="mb-4">
                                        <FormLabel>Card owner</FormLabel>

                                        <Form.Control id='cardOwner' type="text" placeholder="owner" name='cardOwner' />
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group as={Col} md={3} className="mb-4">
                                        <FormLabel>Expiration</FormLabel>
                                        <Form.Control id='expDate' type="text" placeholder="expiration date" name='street' />
                                    </Form.Group>

                                    <Form.Group as={Col} md={3} className="mb-4">
                                        <FormLabel>Segurity code</FormLabel>

                                        <Form.Control id='codeNumber' type="text" placeholder="Code" name='number' />
                                    </Form.Group>

                                    <Form.Group as={Col} md={6} className="mb-4">
                                        <FormLabel>Document from card owner</FormLabel>

                                        <Form.Control id='docNumber' type="text" placeholder="Doc. number" name='number' />
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card>

                        <br />

                        <h5>This is a safe place</h5>
                        <p>Using safe conections to protect you information</p>

                        <br />

                        <Card body>
                            <h3>Required documentation</h3>
                            <p>Check the entry conditions of your destination for both the outward and return.</p>
                            <Link to="">View Conditions</Link>
                        </Card>

                        <br />

                        <Card body>

                            <h3>Your flight only includes hand luggage</h3>

                            <h5 className="red">
                                {this.props.flightDetails?.flight.airport.address.city + ' - ' + this.props.flightDetails?.flight.destination.name
                                }
                            </h5>

                            <p>Includes a backpack or purse</p>
                            <p>
                                Must fit under the front seat</p>

                            <p>
                                Includes carry-on luggage</p>
                            <p>It must fit in the upper compartment of the plane.
                            </p>

                            <p>Does not include baggage to check
                            </p>
                            <p>You can add luggage at the airport for an extra charge.
                            </p>

                        </Card>

                        <Card body>

                            <h3>Antes de finalizar revisá los datos ingresados</h3>

                            <h5>Date</h5>

                            <p className="red">{this.props.flightDetails.flight.date.split('T')[0]}</p>

                            <h3>Datos del pasajero</h3>

                            <Row>
                                <Col> <p>Name:</p></Col>
                                <Col><p> {this.props.props.loggedUser?.name} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>Surname:</p></Col>
                                <Col><p> {this.props.props.loggedUser?.surname} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>Personal ID:</p></Col>
                                <Col><p> {this.props.props.loggedUser?.typeOfId} {this.props.props.loggedUser?.personalId} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>E-mail:</p></Col>
                                <Col><p> {this.props.props.loggedUser?.email} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>Phone Number:</p></Col>
                                <Col><p> {this.props.props.loggedUser?.phone} </p></Col>
                            </Row>

                            <hr />

                            <Row>
                                <Col> <p>E-mail:</p></Col>
                                <Col><p> {this.props.props.loggedUser?.email} </p></Col>
                            </Row>

                            <hr />

                            <p><strong>Address</strong></p>

                            <Row>
                                <Col> <p>Street:</p></Col>
                                <Col>  <p>{this.props.props.loggedUser?.address.street} {this.props.props.loggedUser?.address.number}</p></Col>
                            </Row>

                            <Row>
                                <Col> <p>Number:</p></Col>
                                <Col>  <p> {this.props.props.loggedUser?.address.number} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>ZipCode:</p></Col>
                                <Col>  <p> {this.props.props.loggedUser?.address.zipCode} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>City:</p></Col>
                                <Col>  <p> {this.props.props.loggedUser?.address.city} </p></Col>
                            </Row>

                            <Row>
                                <Col> <p>Country:</p></Col>
                                <Col>  <p> {this.props.props.loggedUser?.address.country} </p></Col>
                            </Row>
                        </Card>

                        <Link as={Button} variant="primary" onClick={() => this.setflightInUser()} className="btn btn-flat">Confirm Buy</Link>
                        {/* <Link as={Button} variant="primary" to="/users/checkout/thankyou" onClick={() => this.setflightInUser()} className="btn btn-flat">Confirm Buy</Link> */}
                    </Col>

                    <Col md={4}>

                        <h4>Payment Details</h4>

                        <br />

                        <Card body>
                            <Row>
                                <Col md={8}>
                                    <p> Number of passangers: {+this.props.flightDetails.adults + +this.props.flightDetails.children}</p>

                                    <p>Adults: {this.props.flightDetails.adults}</p>

                                    {
                                        this.props.flightDetails.children >= 1 ?

                                            <p>Child: {this.props.flightDetails.children}</p>

                                            : null
                                    }
                                </Col>

                                <Col md={4}>
                                    <p className="red num"> € {(+this.props.flightDetails.adults + +this.props.flightDetails.children) * this.props.flightDetails.flight.price}</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={8}>
                                    <p>Taxes</p>
                                </Col>

                                <Col md={4} >
                                    <p className="red num"> € {(21 * (+this.props.flightDetails.adults + +this.props.flightDetails.children) * this.props.flightDetails.flight.price) / 100}</p>
                                </Col>
                            </Row>
                        </Card>

                        <br />

                        <h4>
                            Purchase details</h4>

                        <br />

                        <Card body>
                            <br />

                            <h5 className="red"> {this.props.flightDetails?.flight.airport.address.city + ' (' + this.props.flightDetails?.flight.airport.address.country + ') ' + ' - ' +
                                this.props.flightDetails?.flight.destination.name
                            }</h5>
                            <p>
                                One way, {this.props.flightDetails?.adults} adult</p>

                            {
                                this.props.flightDetails.children >= 1 ?

                                    <p>Child: {this.props.flightDetails?.children}</p>

                                    : null
                            }
                            <p className="red">Departure ({this.props.flightDetails?.flight.date.split('T')[0]})</p>

                            <div style={{ width: 80, height: 80 }}>
                                <img src={this.props.flightDetails?.flight.flightCompany.logo} alt="company" style={{ width: '100%' }} />
                            </div>

                            <hr />

                            <p>Changes</p>
                            <p>Allowed (with additional cost)</p>

                            <p>Cancellation</p>
                            <p>Not allowed</p>

                            <Link to="">
                                See change and cancellation policy</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Checkout