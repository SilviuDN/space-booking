import { Component } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import RadioButton from '../../shared/RadioButtons/RadioButtons';
import SearchBar from '../../shared/searchBox/searchBar';
import DestinationService from '../../services/destinations.service';
import FlightService from '../../services/flights.service';
import './searchPanel.css'


class IndexSearchPanel extends Component {
    constructor() {
        super()
        this.state = {
            destinations: '',
            airports: '',
            departureDate: undefined,
            returnDate: undefined,
            adults: 1,
            children: 0,

            radioButtons: {
            },

            checkBox: false,
        }
        this.FlightService = new FlightService()
        this.DestinationService = new DestinationService()

    }


    handleInput = (e) => {

        if (e.target.id) {

            this.setState({
                [e.target.id]: e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }


    handleFormSubmit = (e) => {
        e.preventDefault()

        this.props.props.history.push(`/flights/found/${this.state.airports}/${this.state.destinations}/${this.state.departureDate}/${this.state.returnDate}/${this.state.adults}/${this.state.children}`)
    }


    setRadioButton = (key, value) => {

        this.setState({
            radioButtons: {
                ...this.state.radioButtons,
                [key]: value,
            }
        })
    }


    setTravel = (key, value) => {

        this.setState({
            [key]: value
        })

    }


    render() {

        return (

            <Form onSubmit={this.handleFormSubmit} className='search-container'>

                <Container>

                    <Row className="row searchbox">

                        <Col md={5}>

                            <label className="checkbox-search" ><span className="span"><small className="small">To</small></span></label>

                            {/* SearchBar */}
                            <SearchBar dataToLoad={this.DestinationService} dataKey={'destinations'} setTravel={this.setTravel} />

                        </Col>

                        <Col md={5}>
                            {
                                this.state.destinations ?
                                    <>
                                        <label className="checkbox-search" ><span className="span"><small className="small">From</small></span></label>

                                        {/* SearchBar */}
                                        <SearchBar dataToLoad={this.FlightService} dataKey={'airports'} destinationId={this.state.destinations} setTravel={this.setTravel} />

                                    </>
                                    :
                                    <>
                                        {/* placeholder */}
                                        <label className="checkbox-search" ><span className="span"><small className="small">From</small></span></label>
                                        <input type="text" className="form-control" disabled />
                                    </>
                            }
                        </Col>

                        <Col md={2}>
                            <br />
                            <label className="checkbox-search" ><span className="span"><small className="small">Cabin class</small></span></label>
                            <input type="text" className="form-control" placeholder="Cabin Class" />
                            <label />
                        </Col>

                    </Row>

                    <Row className="row searchbox">

                        <Col md={3}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Departure from date  </small></span></label>
                            <input type="date" className="form-control" onChange={(e) => this.handleInput(e)} placeholder="From" id="departureDate" />
                        </Col>

                        <Col md={3}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Departure to date</small></span></label>
                            <input type="date" className="form-control" onChange={(e) => this.handleInput(e)} placeholder="To" id="returnDate" />
                        </Col>

                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Adults(16+)</small></span></label>
                            <input type="number" value={this.state.adults} className="form-control" onChange={(e) => this.handleInput(e)} placeholder="0" name="adults" />
                        </Col>

                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Children</small></span></label>
                            <input type="number" className="form-control" onChange={(e) => this.handleInput(e)} placeholder="0" name="children" />
                        </Col>

                        <Col md={2} >
                            <label className="checkbox-search" />
                            <Button type="submit" className="button searchbox">Search Flight</Button>
                        </Col>

                    </Row>
                </Container>
            </Form>
        )




    }
}

export default IndexSearchPanel