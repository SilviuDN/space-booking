import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import EarthPlanet from './EarthPlanet'
import MercuryPlanet from './MercuryPlanet'
import VenusPlanet from './VenusPlanet';
import MarsPlanet from './MarsPlanet';
import JupiterPlanet from './JupiterPlanet';
import SaturnPlanet from './SaturnPlanet';
import UranusPlanet from './UranusPlanet';
import NeptunePlanet from './NeptunePlanet';
import PlutoPlanet from './PlutoPlanet';
import SunPlanet from './SunPlanet';
import Background from '../background.jpeg';
import React from 'react';
import ReactDOM from 'react-dom';
// import createReactClass from "create-react-class";

class Planets extends Component {
    constructor() {
        super()
        this.state = {
            showinfo: false,
            title: 'TITLE',
            info: 'askldjgashdlakjhdakljhdakashdakjhdsalkd',

        }

        this.divRef = React.createRef()
    }


    renderInfo = () => {



    }


    showInfo = (info) => {
        // alert('se viene')
        this.setState({
            info: info,
        })

        this.divRef.current.classList.add('white')

    }

    hideInfo = () => {

        this.divRef.current.classList.remove('white')

    }


    render() {
        return (

            <div style={{ backgroundImage: `url(${Background})`, height: '95vh' }} className={'pt-5 text-light'}>


                <Container fluid className={'text-center'}>

                    <Row>
                        <Col md={12} className={'text-center'}>
                            {/* <h3>{this.state.title}</h3> */}
                        </Col>
                    </Row>
                    <Row >
                        <Col md={12}>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={{ span: 1, offset: 1 }}>
                            <SunPlanet showInfo={this.showInfo} hideInfo={this.hideInfo} changeView={this.props.changeView} />
                        </Col>

                        <Col xs={{ span: 6, offset: 1 }} className='info' ref={this.divRef} >

                            {this.state.info ? <div dangerouslySetInnerHTML={{ __html: this.state.info }} /> : null}
                        </Col>
                    </Row>
                    <Row className={'pb-5'}>
                        <Col xs={{ span: 1, offset: 3 }} >
                            {/* <p>earth</p> */}
                            <MercuryPlanet />
                        </Col>
                        <Col xs={{ span: 1, offset: 1 }}>

                            <VenusPlanet />
                        </Col>

                        <Col xs={{ span: 1, offset: 1 }}>
                            <EarthPlanet />
                        </Col>

                        <Col xs={{ span: 1, offset: 1 }}>
                            <MarsPlanet />
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '100px' }}>
                        <Col xs={{ span: 1, offset: 1 }}>
                            <JupiterPlanet />
                        </Col>
                        <Col xs={{ span: 1, offset: 1 }}>
                            <SaturnPlanet />
                        </Col>
                        <Col xs={{ span: 1, offset: 1 }}>
                            <UranusPlanet />
                        </Col>
                        <Col xs={{ span: 1, offset: 1 }}>
                            <NeptunePlanet />
                        </Col>
                        <Col xs={{ span: 1, offset: 1 }}>
                            <PlutoPlanet />
                        </Col>

                    </Row>


                </Container>


            </div >









        )
    }
}


export default Planets;