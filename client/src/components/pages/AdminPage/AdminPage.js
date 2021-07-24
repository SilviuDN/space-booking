import { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AdminNav from './AdminNav'
import UsersList from '../UsersPage/UsersList'
import CompanyLists from '../CompaniesPage/CompaniesList'
import Fligths from '../FlightsPage/FlightsList'
import Destination from '../DestinationsPage/DestinationsList'
import Airports from '../AirportsPage/AirportsList'
import UserDetails from '../UserDetails/UserDetails'
import AirportDetails from '../AirportsPage/AirportDetails'
import CompanyDetails from '../CompanyDetails/CompanyDetails'
import AirportEdit from '../AirportsPage/AirportEdit'
import UserEdit from '../UserEditPage/UserEditPage'
import AdminBigChart from '../Testing/adminBigChart'
import FlightDetails from '../FlightsPage/FlightDetails'
import EditCreateFlight from '../FlightsPage/EditCreateFlight'
import DestinationDetails from '../DestinationsPage/DestinationDetails'



class AdminPage extends Component {
    constructor() {
        super()
        this.state = {
            listState: 'user',
            chart: '',
            isLoading: false,
            id: '',
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

                    <Row style={{ marginTop: 0 }}>
                        <Col xs={{ span: 2, offset: 2 }} className={'col'} >
                            <AdminBigChart />
                        </Col>
                        <Col xs={2} className={'col'}>
                            <AdminBigChart />
                        </Col>
                        <Col xs={2} className={'col'}>
                            <AdminBigChart />
                        </Col>
                        <Col xs={2} className={'col'}>
                            <AdminBigChart />
                        </Col>
                    </Row>



                    <Row style={{ marginTop: 0 }}>
                        <Col xs={1} >
                            <AdminNav setList={this.setList} />
                        </Col>


                        <Col xs={{ span: 5, offset: 0 }} id="admin-list" >


                            {


                                this.state.listState === 'user' ? <UsersList setList={this.setList} setId={this.setId} /> :
                                    this.state.listState === 'company' ? <CompanyLists id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} /> :
                                        this.state.listState === 'flights' ? <Fligths id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} /> :
                                            this.state.listState === 'destinations' ? <Destination id={this.state.id} setList={this.setList} setId={this.setId} /> :
                                                this.state.listState === 'airports' ? <Airports setList={this.setList} setId={this.setId} /> :



                                                    this.state.listState === 'airportDetails' ? <AirportDetails id={this.state.id} setList={this.setList} /> :
                                                        this.state.listState === 'userDetails' ? <UserDetails id={this.state.id} setList={this.setList} setId={this.setId} /> :
                                                            this.state.listState === 'companyDetails' ? <CompanyDetails id={this.state.id} setList={this.setList} setId={this.setId} /> :
                                                                this.state.listState === 'flightDetails' ? <FlightDetails id={this.state.id} setList={this.setList} setId={this.setId} /> :
                                                                    this.state.listState === 'destinationDetails' ? <DestinationDetails id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} /> :



                                                                        this.state.listState === 'editAirport' ? <AirportEdit id={this.state.id} setList={this.setList} setId={this.setId} /> :
                                                                            this.state.listState === 'userEdit' ? <UserEdit id={this.state.id} setList={this.setList} setId={this.setId} /> :
                                                                                this.state.listState === 'flightEdit' ? <EditCreateFlight id={this.state.id} setList={this.setList} setId={this.setId} type={'edit'} /> :
                                                                                    this.state.listState === 'flightCreate' ? <EditCreateFlight id={this.state.id} setList={this.setList} setId={this.setId} type={'new'} showAlert={this.props.showAlert} /> :

                                                                                        null

                            }

                        </Col>

                        <Col xs={5} id="">

                        </Col>
                    </Row>

                </Container>



            </Row>
        )
    }
}


export default AdminPage