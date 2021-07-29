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
import FlightDetails from '../FlightsPage/FlightDetails'
import EditCreateFlight from '../FlightsPage/EditCreateFlight'
import DestinationDetails from '../DestinationsPage/DestinationDetails'
import EditDestination from '../DestinationsPage/DestintationEdit'
import BarsLists from '../Charts/BarsLists'
import UpperChartsPie from '../Charts/UpperChartsPie'
import CompanyEditPage from '../CompanyEditPage/CompanyEditPage'



class AdminPage extends Component {
    constructor() {
        super()
        this.state = {
            rightView: '',
            leftView: 'user',
            chart: '',
            searchBox: '',
            isLoading: false,
            id: '',
            loadSharedFunction: {
                user: undefined
            }
        }


    }

    sharedFunction = (key, fn) => this.setState({ loadSharedFunction: { ...this.state.loadSharedFunction, [key]: fn } })


    renderSwitch(param) {
        switch (param) {
            case 'user':
                return <UsersList setList={this.setList} setId={this.setId} showAlert={this.props.showAlert} sharedFunction={this.sharedFunction} />;
            case 'company':
                return <CompanyLists id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} showAlert={this.props.showAlert} sharedFunction={this.sharedFunction} />;
            case 'flights':
                return <Fligths id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} showAlert={this.props.showAlert} sharedFunction={this.sharedFunction} />

            case 'destinations':
                return <Destination id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} showAlert={this.props.showAlert} sharedFunction={this.sharedFunction} />

            case 'airports':
                return <Airports setList={this.setList} setId={this.setId} showAlert={this.props.showAlert} />


            case 'userEdit':
                return <UserEdit id={this.state.id} setList={this.setList} setId={this.setId} showAlert={this.props.showAlert} sharedFunction={this.state.loadSharedFunction['usersList']} />
            case 'editCompany':
                return <CompanyEditPage type={'edit'} id={this.state.id} setList={this.setList} setId={this.setId} showAlert={this.props.showAlert} sharedFunction={this.state.loadSharedFunction['companiesList']} />
            case 'flightEdit':
                return <EditCreateFlight id={this.state.id} setList={this.setList} setId={this.setId} type={'edit'} showAlert={this.props.showAlert} sharedFunction={this.state.loadSharedFunction['flightsList']} />
            case 'flightCreate':
                return <EditCreateFlight id={this.state.id} setList={this.setList} setId={this.setId} type={'new'} showAlert={this.props.showAlert} />

            case 'editDestination':
                return <EditDestination type={'edit'} id={this.state.id} setList={this.setList} setId={this.setId} showAlert={this.props.showAlert} sharedFunction={this.state.loadSharedFunction['destinationsList']} />
            case 'createDestination':
                return <EditDestination id={this.state.id} setList={this.setList} setId={this.setId} type={'new'} showAlert={this.props.showAlert} sharedFunction={this.state.loadSharedFunction['destinationsList']} />

            case 'editAirport':
                return <AirportEdit id={this.state.id} setList={this.setList} setId={this.setId} />




            case 'userDetails':
                return <UserDetails id={this.state.id} setList={this.setList} setId={this.setId} />
            case 'airportDetails':
                return <AirportDetails id={this.state.id} setList={this.setList} />
            case 'companyDetails':
                return <CompanyDetails id={this.state.id} setList={this.setList} setId={this.setId} />
            case 'flightDetails':
                return <FlightDetails id={this.state.id} setList={this.setList} setId={this.setId} />
            case 'destinationDetails':
                return <DestinationDetails id={this.state.id} setList={this.setList} setId={this.setId} loggedUser={this.props.loggedUser} />




            default:
                return null;
        }
    }


    setLeftView = (leftView) => this.setState({ leftView })


    setList = (rightView) => this.setState({ rightView })


    setId = (id) => this.setState({ id })


    // componentDidUpdate = (prevProps, prevState) => prevState.rightView !== this.state.rightView &&



    render() {


        return (

            <Row>
                <Container fluid>


                    <Row style={{ marginTop: 0 }}>
                        <Col xs={{ span: 4, offset: 2 }} className={'col'} >
                            <UpperChartsPie />
                        </Col>

                        <Col xs={{ span: 4, offset: 1 }} className={'col'} >
                            {
                                ["company", "flights", "destinations", "airports"].includes(this.state.leftView) ?
                                    <BarsLists type={this.state.leftView} /> : null
                            }
                        </Col>

                    </Row>

                    <Row style={{ marginTop: 0 }}>
                        <Col xs={1} >
                            <AdminNav setLeftView={this.setLeftView} />
                        </Col>


                        <Col xs={{ span: 5, offset: 0 }} id="admin-list" >


                            {
                                this.renderSwitch(this.state.leftView)


                            }

                        </Col>

                        <Col xs={{ span: 5, offset: 0 }} id="admin-list" >


                            {
                                this.renderSwitch(this.state.rightView)

                            }

                        </Col>


                    </Row>

                </Container>



            </Row>
        )
    }
}


export default AdminPage