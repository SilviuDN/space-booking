import { Component } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import RadioButton from '../../shared/RadioButtons/RadioButtons';
import SearchBar from '../../shared/searchBox/searchBar';
import AirportService from '../../services/AirportService';
import DestinationService from '../../services/destinations.service';
import './searchPanel.css'


class IndexSearchPanel extends Component {
    constructor() {
        super()
        this.state = {
            radioButtons: {
            },
            checkBox: false,
        }
        this.AirportService = new AirportService()
        this.DestinationService = new DestinationService()



    }



    setRadioButton = (key, value) => {

        this.setState({
            radioButtons: {
                ...this.state.radioButtons,
                [key]: value,
            }
        })
    }




    handleFormSubmit = (e) => {



    }




    render() {

        const radios = [];
        for (let i = 1; i < 4; i++) {
            radios.push(<RadioButton key={i} value={i} setRadioValue={this.setRadioButton} />);
        }


        return (


            <Form onSubmit={this.handleFormSubmit} className='search-container '>

                <Container  >

                    <Row className="row searchbox">
                        <div className="round ">
                            <div className="span">

                                {radios}

                            </div>
                            <div className='span'>
                                <input type="checkbox" className="checkbox-search" />
                                <span id="checkbox-text">Show offers</span>
                            </div>

                        </div>
                    </Row>
                    <Row className="row searchbox">

                        <Col md={5}>
                            <label className="checkbox-search" ><span className="span"><small className="small">From</small></span></label>

                            <SearchBar dataToLoad={this.AirportService} dataKey={'airports'} />

                            {/* <input type="text" className="form-control" placeholder="From" /> */}
                            <input type="checkbox" placeholder="From" /> <span className="span">Add nearby ariports</span>
                        </Col>
                        <Col md={5}>
                            <label className="checkbox-search" ><span className="span"><small className="small">To</small></span></label>

                            <SearchBar dataToLoad={this.DestinationService} dataKey={'destinations'} />

                            {/* <input type="text" className="form-control" placeholder="To" /> */}
                            <input type="checkbox" placeholder="From" /> <span className="span">Add nearby ariports</span>
                        </Col>
                        <Col md={2}>
                            {/* SELECT */}
                            <label className="checkbox-search" ><span className="span"><small className="small">Cabin class</small></span></label>
                            <input type="text" className="form-control" placeholder="Cabin Class" />
                            <label />
                        </Col>
                    </Row>
                    <Row className="row searchbox">

                        <Col md={3}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Departure</small></span></label>
                            <input type="date" className="form-control" placeholder="From" />
                        </Col>
                        <Col md={3}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Return</small></span></label>
                            <input type="date" className="form-control" placeholder="To" />
                        </Col>
                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Adults(16+)</small></span></label>
                            <input type="number" className="form-control" placeholder="Cabin Class" />
                        </Col>
                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Children</small></span></label>
                            <input type="number" className="form-control" placeholder="Cabin Class" />
                        </Col>
                        <Col md={2} >
                            <label className="checkbox-search" />
                            <Button type="submit" className="button searcbox">Search Flight</Button>
                        </Col>

                    </Row>
                </Container>
            </Form>
        )




    }
}

export default IndexSearchPanel