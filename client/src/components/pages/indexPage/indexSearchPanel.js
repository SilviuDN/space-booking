import { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import RadioButton from './RadioButtons';
import SearchBar from './searchBar';

import './searchPanel.css'


class IndexSearchPanel extends Component {
    constructor() {
        super()
        this.state = {
            radioButtons: {
                1: '',
                2: '',
                3: ''
            },
            checkBox: false,

        }



    }



    setRadioButton = (key, value) => {

        this.setState({
            radioButtons: {
                ...this.state.radioButtons,
                [key]: value,
            }
        })
    }



    searchInput = (e) => {



    }




    render() {

        let radios = [];
        for (var i = 1; i < 4; i++) {
            radios.push(<RadioButton key={i} value={i} setRadioValue={this.setRadioButton} />);
        }


        return (


            <div className='search-container'>

                <Container >

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
                            <SearchBar />
                            {/* <input type="text" className="form-control" placeholder="From" /> */}
                            <input type="checkbox" placeholder="From" /> <span className="span">Xxxxx</span>
                        </Col>
                        <Col md={5}>
                            <label className="checkbox-search" ><span className="span"><small className="small">To</small></span></label>
                            <input type="text" className="form-control" placeholder="To" />
                            <input type="checkbox" placeholder="From" /> <span className="span">Xxxxx</span>
                        </Col>
                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">Cabin class</small></span></label>
                            <input type="text" className="form-control" placeholder="Cabin Class" />
                            <label />
                        </Col>
                    </Row>
                    <Row className="row searchbox">

                        <Col md={3}>
                            <label className="checkbox-search" ><span className="span"><small className="small">glgl</small></span></label>
                            <input type="text" className="form-control" placeholder="From" />
                        </Col>
                        <Col md={3}>
                            <label className="checkbox-search" ><span className="span"><small className="small">glgl</small></span></label>
                            <input type="text" className="form-control" placeholder="To" />
                        </Col>
                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">glgl</small></span></label>
                            <input type="text" className="form-control" placeholder="Cabin Class" />
                        </Col>
                        <Col md={2}>
                            <label className="checkbox-search" ><span className="span"><small className="small">glgl</small></span></label>
                            <input type="text" className="form-control" placeholder="Cabin Class" />
                        </Col>
                        <Col md={2} >
                            <label className="checkbox-search" />
                            <Button type="submit" className="button searcbox">Search Flight</Button>
                        </Col>

                    </Row>
                </Container>
            </div>
        )




    }
}

export default IndexSearchPanel