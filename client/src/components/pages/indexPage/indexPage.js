// import { Link } from 'react-router-dom';
import { Component } from 'react'
import { Carousel } from "react-bootstrap"
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import './IndexPage.css'

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

            </>
        )
    }
}

export default IndexPage