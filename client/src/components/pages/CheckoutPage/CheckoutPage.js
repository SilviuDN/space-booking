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
            radioButtons: {
                1: false,
                2: false,
                3: false,
            }
        }

        this.userService = new UserService()
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    componentDidMount() {

        const user_id = this.props.match?.params.user_id || this.props.id

        this.userService
            .userDetails(user_id)
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))

    }

    render() {

        return (

            <Container>

                {!this.state.user ?

                    <h3>cargando</h3> :

                    <>
                        <Link to="" ><h3>Return to previous page</h3></Link>
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
                                        <input type="radio" value="Credit Card" name="gender" /> Tarjeta de crédito
                                        <hr />
                                        <input type="radio" value="Debit Card" name="gender" /> Tarjeta de débito
                                        <hr />
                                        <input type="radio" value="Bank" name="gender" /> Pago desde tu banca por internet
                                    </div>

                                </Card>
                                <br />
                                <Card body>

                                    <h3>Ingresa datos de la tarjeta</h3>
                                    <br />
                                    <Form>

                                        <Row>

                                            <Form.Group as={Col} md={6} className="mb-4">
                                                <FormLabel>NÚMERO DE TARJETA</FormLabel>
                                                <Form.Control id='street' type="text" placeholder="Ingresa el número de tarjeta" name='street' />
                                            </Form.Group>


                                            <Form.Group as={Col} md={6} className="mb-4">
                                                <FormLabel>TITULAR DE LA TARJETA</FormLabel>

                                                <Form.Control id='number' type="text" placeholder="Como figura en la tarjeta" name='number' />
                                            </Form.Group>

                                        </Row>

                                        <Row>

                                            <Form.Group as={Col} md={3} className="mb-4">
                                                <FormLabel>VENCIMIENTO</FormLabel>
                                                <Form.Control id='street' type="text" placeholder="Ingresa el número de tarjeta" name='street' />
                                            </Form.Group>


                                            <Form.Group as={Col} md={3} className="mb-4">
                                                <FormLabel>COD. SEGURIDAD</FormLabel>

                                                <Form.Control id='number' type="text" placeholder="Como figura en la tarjeta" name='number' />
                                            </Form.Group>

                                            <Form.Group as={Col} md={6} className="mb-4">
                                                <FormLabel>DOCUMENTO DEL TITULAR DE LA TARJETA</FormLabel>

                                                <Form.Control id='number' type="text" placeholder="Como figura en la tarjeta" name='number' />
                                            </Form.Group>

                                        </Row>
                                    </Form>
                                </Card>
                                <br />
                                <h5>Este es un sitio seguro</h5>
                                <p>Utilizamos conexiones seguras para proteger tu información</p>

                                <br />

                                <Card body>
                                    <h3>Documentación requerida</h3>
                                    <p>Chequea las condiciones de entrada de tu destino tanto para la ida como para la vuelta.</p>
                                    <Link to="">Ver condiciones</Link>

                                </Card>
                                <br />


                                <Card body>
                                    <h3>Tu vuelo solo incluye equipaje de mano</h3>

                                    <h5 className="red">ORIGIN - TARGET </h5>

                                    <p>Incluye una mochila o cartera</p>
                                    <p>Debe caber bajo el asiento delantero.</p>

                                    <p>Incluye equipaje de mano</p>
                                    <p>Debe caber en el compartimiento superior del avión.</p>

                                    <p>No incluye equipaje para documentar</p>
                                    <p>Podrás sumar maletas en el aeropuerto por un cargo extra.</p>

                                </Card>

                                <Card body>

                                    <h3>Antes de finalizar revisá los datos ingresados</h3>

                                    <h5>Date</h5>

                                    <p className="red">LA FECHA DE PARTIDA</p>




                                    <h3>Datos del pasajero</h3>
                                    <Row>
                                        <Col> <p>Name</p></Col>
                                        <Col><p>: {this.state.user.name} </p></Col>
                                    </Row>
                                    <Row>
                                        <Col> <p>Surname</p></Col>
                                        <Col><p>: {this.state.user.surname} </p></Col>
                                    </Row>
                                    <Row>
                                        <Col> <p>Personal ID</p></Col>
                                        <Col><p>: {this.state.user.typeOfId} {this.state.user.personalId} </p></Col>
                                    </Row>

                                    <Row>
                                        <Col> <p>E-mail</p></Col>
                                        <Col><p>: {this.state.user.email} </p></Col>
                                    </Row>
                                    <Row>
                                        <Col> <p>Phone Number</p></Col>
                                        <Col><p>: {this.state.user.phone} </p></Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col> <p>E-mail</p></Col>
                                        <Col><p>: {this.state.user.email} </p></Col>
                                    </Row>
                                    <hr />
                                    <p><strong>Address</strong></p>
                                    <Row>
                                        <Col> <p>Street</p></Col>
                                        <Col>  <p>: {this.state.user.address.street} {this.state.user.address.number}</p></Col>

                                    </Row>
                                    <Row>
                                        <Col> <p>Number</p></Col>
                                        <Col>  <p>: {this.state.user.address.number} </p></Col>

                                    </Row>


                                    <Row>
                                        <Col> <p>ZipCode</p></Col>
                                        <Col>  <p>: {this.state.user.address.zipCode} </p></Col>

                                    </Row>
                                    <Row>
                                        <Col> <p>City</p></Col>
                                        <Col>  <p>: {this.state.user.address.city} </p></Col>

                                    </Row>
                                    <Row>
                                        <Col> <p>Country</p></Col>
                                        <Col>  <p>: {this.state.user.address.country} </p></Col>

                                    </Row>

                                </Card>










                                <Link as={Button} variant="primary" to="/admin" onClick={() => this.props.setList('user')} className="btn btn-flat">Comprar</Link>

                            </Col>
                            <Col md={4}>

                                <h4>Detalle del pago</h4>
                                <br />
                                <Card body>

                                    <Row>
                                        <Col md={8}>
                                            <p>Vuelo para una persona</p>


                                        </Col>
                                        <Col md={4}>
                                            <p className="red num"> € 3445</p>

                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col md={8}>
                                            <p>Impuestos, tasas y cargos</p>


                                        </Col>
                                        <Col md={4} >
                                            <p className="red num"> € 430</p>

                                        </Col>

                                    </Row>



                                </Card>
                                <br />
                                <h4>Detalle de la compra</h4>
                                <br />
                                <Card body>
                                    <br />

                                    <h5 className="red"> ORIGEN(aeropuerto) - DESTINO(planeta) </h5>
                                    <p>Solo ida, 1 adulto</p>

                                    <p className="red">FECHA (dd mmm yyyy)</p>

                                    <p className="red">LOGO FLIGHT COMPANY</p>


                                    <hr />
                                    <p>Cambios</p>
                                    <p>- Permite (con costo)</p>

                                    <p>Cancelacion</p>
                                    <p>x No permite</p>


                                    <Link to="">Ver política de cambios y cancelaciones</Link>








                                </Card>





                            </Col>

                        </Row>
                    </>
                }

            </Container>
        )
    }
}

export default Checkout