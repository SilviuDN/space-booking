// import { Link } from 'react-router-dom';
import { Component } from 'react'
import { Carousel, Row, Col } from "react-bootstrap"
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import './IndexPage.css'
import b1 from './b1.png'
import b2 from './b2.png'
import b3 from './b3.png'
import b4 from './b4.png'
import b5 from './b5.png'

class IndexPage extends Component {

    constructor() {
        super()
        this.state = {
        }
    }




    render() {

        return (

            <>

                <Carousel fade controls={false} >
                    <Carousel.Item >
                        <img
                            className="d-block  c "
                            src={c1}
                            alt="First slide"
                        />

                    </Carousel.Item >
                    <Carousel.Item >
                        <img
                            className="d-block  c"
                            src={c2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block  c"
                            src={c3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

                <Row  >
                    <Col xs={6} md={3} >
                        <p align="center"><img
                            className="d-block  b"
                            src={b1}
                            alt="b1"
                        /></p>
                    </Col>
                    <Col xs={6} md={3}>
                        <p align="center"><img
                            className="d-block  b"
                            src={b2}
                            alt="b2"
                        /></p>
                    </Col>
                    <Col xs={6} md={3}>
                        <p align="center"><img
                            className="d-block  b"
                            src={b3}
                            alt="b3"
                        /></p>
                    </Col>
                    <Col xs={6} md={3}>
                        <p align="center"> <img
                            className="d-block  b"
                            src={b4}
                            alt="b4"
                        /></p>
                    </Col>
                </Row>

            </>
        )
    }
}

export default IndexPage