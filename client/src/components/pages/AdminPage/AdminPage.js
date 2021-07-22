import { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AdminNav from './AdminNav'
import UsersList from '../UsersPage/UsersList'
import CompanyLists from '../CompaniesPage/CompaniesList'
import Fligths from '../FlightsPage/FlightsList'
import Destination from '../DestinationsPage/DestinationsList'
import Airports from '../AirportsPage/AirportsList'
import AirportDetails from '../AirportsPage/AirportDetails'
import AirportEdit from '../AirportsPage/AirportEdit'


class AdminPage extends Component {
    constructor() {
        super()
        this.state = {
            listState: 'user',
            chart: '',
            isLoading: false,
            id: ''
        }
    }


    setList = (listState) => {
        this.setState({
            listState: listState,
        })
    }

    setId = (id) => {
        this.setState({
            id
        })
    }


    render() {
        return (

            <Row>
                <Container fluid>

                    <Row style={{ marginTop: 50 }}>
                        <Col xs={{ span: 2, offset: 3 }} >
                            1
                        </Col>
                        <Col xs={2} >
                            2
                        </Col>
                        <Col xs={2} >
                            3
                        </Col>
                        <Col xs={2} >
                            4
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 50 }}>
                        <Col xs={1} >
                            <AdminNav setList={this.setList} />
                        </Col>


                        <Col xs={{ span: 5, offset: 0 }} id="" >

                            {
                                this.state.listState === 'user' ? <UsersList /> :
                                    this.state.listState === 'company' ? <CompanyLists /> :
                                        this.state.listState === 'flights' ? <Fligths /> :
                                            this.state.listState === 'destinations' ? <Destination /> :
                                                this.state.listState === 'airports' ? <Airports setList={this.setList} setId={this.setId} /> :



                                                    this.state.listState === 'airportDetails' ? <AirportDetails id={this.state.id} setList={this.setList} /> :
                                                        this.state.listState === 'editAirport' ? <AirportEdit id={this.state.id} setList={this.setList} setId={this.setId} /> : null
                            }

                        </Col>

                        <Col xs={5} id="">
                            <h1>test</h1>
                        </Col>
                    </Row>

                </Container>



            </Row>
        )
    }
}

export default AdminPage