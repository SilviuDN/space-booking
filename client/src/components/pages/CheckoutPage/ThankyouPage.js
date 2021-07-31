import { Component } from 'react'
// import UserService from '../../services/user.service'
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CheckoutPage.css'
import Astronaut from './astronaut.webp'

class ThankyouPage extends Component {
    constructor() {
        super()

        this.state = {
            user: undefined,
        }


    }





    render() {

        return (
            <>
                <Container>
                    <Row><Col className='p-5' > <div align="center"> <Image src={Astronaut} circle style={{ width: '75%', borderRadius: '7%' }} alt='astronaut' /> </div></Col></Row>
                    <Jumbotron className=" text-center">
                        <h1 className="display-3">Thank You!</h1>
                        <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                        <hr />
                        <p>
                            Having trouble? <a href="/">Contact us</a>
                        </p>
                        <p class="lead">
                            <Link to="/"> <Button to="/" bsPrefix="btn-flat" variant="primary" className="btn-sm" >
                                <strong> Continue to homepage</strong>
                            </Button></Link>
                        </p>
                    </Jumbotron>
                </Container>
            </>
        )
    }
}

export default ThankyouPage