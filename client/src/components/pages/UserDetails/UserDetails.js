import { Component } from 'react'
import UserService from '../../services/user.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined
        }
        this.userService = new UserService()
    }


    componentDidMount() {
        const { user_id } = this.props.match.params
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
                    <Row className="justify-content-around">
                        <Col md={12}>
                            <h3>{this.state.user.name} {this.state.user.surname}</h3>
                            <p>{this.state.user.email}</p>

                            <hr></hr>

                            <p>Personal ID: {this.state.user.personalId}</p>
                            <p>Type of ID: {this.state.user.typeOfId}</p>
                            <p>phone : {this.state.user.phone}</p>
                            <br />
                            <p><strong>Address</strong></p>
                            <p>Street : {this.state.user.address.street}</p>
                            <p>Number: {this.state.user.address.number}</p>
                            <p>Zipcode: {this.state.user.address.zipCode}</p>
                            <p>City: {this.state.user.address.city}</p>
                            <p>Country: {this.state.user.address.country}</p>
                            <hr></hr>
                            <h3>History Flights</h3>

                            <hr></hr>

                            <Link to="/alex/user" className="btn btn-dark">Volver al listado</Link>

                        </Col>

                        <Col md={4}>

                        </Col>
                    </Row>
                }

            </Container>
        )
    }



}
export default UserDetails