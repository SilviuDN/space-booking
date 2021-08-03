import { Component } from 'react'
import UserService from '../../../services/user.service'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UnratedFlightsList from '../RatingComponent/UnratedFlightsList'
import profileWall from './profileWall.png'

class UserDetails extends Component {

    constructor() {

        super()

        this.state = {

            user: undefined

        }

        this.userService = new UserService()

    }


    loadDetails = () => {


        const user_id = this.props.match?.params.user_id || this.props.id

        this.userService
            .userDetails(user_id)
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => this.loadDetails()



    componentDidUpdate = (prevProps, prevState) => prevProps.id !== this.props.id && this.loadDetails()



    updateRatedFlightsList = (flightId) => {
        if (!this.state.user.ratedFlights?.includes(flightId)) {
            console.log("hei", this.state.user.ratedFlights)
            this.userService
                .updateRatedFlights(this.state.user._id, flightId)
                .then(response => {
                    const newList = this.state.user.listedFlights?.push(flightId)
                    this.setState({
                        ...this.state.user,
                        ratedFlights: newList,
                    })

                })
                .catch(err => console.log(err))
        }
    }

    render() {

        return (
            <div style={{ backgroundColor: "#f3f4f7", height: "100vh" }}>
                <Container >

                    {!this.state.user ?

                        <h3>cargando</h3> :

                        <>
                            <br /><br />
                            <Card body >
                                <Row >

                                    <Card.Img src={profileWall} style={{ height: "200px" }} />

                                    <Card.ImgOverlay>
                                        <Row>
                                            <Col md={2} style={{ padding: "15px 0px 0px 25px", }}  >

                                                <Link to={`/users/${this.props.match?.params.user_id || this.props.id}/edit`}><Image src={this.state.user.profileImg} roundedCircle style={{ height: "17vh", objectFit: "cover" }} alt="profile image" /></Link>

                                            </Col>
                                            <Col md={9} className=" text-white">
                                                <br />
                                                <br />
                                                <h2 style={{ paddingLeft: "10px" }}>   {this.state.user.name} {this.state.user.surname}</h2>
                                                <hr />


                                            </Col>
                                        </Row>
                                    </Card.ImgOverlay>



                                    <br /><br />
                                    <Row>
                                        <Col>
                                            <strong>E-mail</strong>
                                        </Col>
                                        <Col>
                                            <p>: {this.state.user.email}</p>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>
                                            <strong>Phone number</strong>
                                        </Col>
                                        <Col>
                                            <p>: {this.state.user.phone}</p>
                                        </Col>

                                    </Row>



                                    <Row>
                                        <Col>
                                            <strong>Personal ID: </strong>
                                        </Col>
                                        <Col>
                                            <p>: {this.state.user.typeOfId} - {this.state.user.personalId}</p>
                                        </Col>

                                    </Row>









                                    <Row >

                                        <Col md={6} style={{ borderRight: "1px solid #C8C9CA", borderTop: "1px solid #C8C9CA" }}>
                                            <br />
                                            <Row>
                                                <Col md={4}>
                                                    <strong>Street </strong>
                                                </Col>
                                                <Col >
                                                    <p>: {this.state.user.address.number} {this.state.user.address.street} </p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md={4} >
                                                    <strong>City</strong>
                                                </Col>
                                                <Col >
                                                    : {this.state.user.address.city}
                                                </Col>
                                            </Row>

                                        </Col>

                                        <Col md={6} style={{ borderTop: "1px solid #C8C9CA" }}>
                                            <br />
                                            <Row><Col  >
                                                <strong>Zipcode </strong>
                                            </Col>

                                                <Col >
                                                    <p> : {this.state.user.address.zipCode}</p>
                                                </Col></Row>



                                            <Row>
                                                <Col >
                                                    <strong>Country</strong>
                                                </Col>
                                                <Col ><p>: {this.state.user.address.country}</p>
                                                </Col>

                                            </Row>
                                        </Col>

                                    </Row>




                                    <hr></hr>

                                    <h5>History Flights</h5>
                                    <hr></hr>
                                    <h5>Reviews</h5>
                                    <hr></hr>
                                    <UnratedFlightsList {...this.state.user} updateRatedFlightsList={this.updateRatedFlightsList} />






                                </Row>

                            </Card>



                        </>
                    }

                </Container>
            </div>
        )
    }
}

export default UserDetails