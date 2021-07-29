import { Component } from 'react'
import UserService from '../../services/user.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UnratedFlightsList from '../RatingComponent/UnratedFlightsList'

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

            <Container>

                {!this.state.user ?

                    <h3>cargando</h3> :

                    <Row className="justify-content-around">

                        <Col md={12}>

                            <h3>{this.state.user.name} {this.state.user.surname}</h3>
                            <p>{this.state.user.email}</p>

                            <hr />

                            <p>Personal ID: {this.state.user.personalId}</p>
                            <p>Type of ID: {this.state.user.typeOfId}</p>
                            <p>phone : {this.state.user.phone}</p>

                            <hr />

                            <p><strong>Address</strong></p>
                            <p>Street : {this.state.user.address.street}</p>
                            <p>Number: {this.state.user.address.number}</p>
                            <p>Zipcode: {this.state.user.address.zipCode}</p>
                            <p>City: {this.state.user.address.city}</p>
                            <p>Country: {this.state.user.address.country}</p>

                            <hr></hr>

                            <h5>History Flights</h5>

                            <UnratedFlightsList {...this.state.user} updateRatedFlightsList={this.updateRatedFlightsList} />

                            <hr></hr>


                        </Col>

                    </Row>
                }

            </Container>
        )
    }
}

export default UserDetails