import ReturnedFlightCard from "./BuyFlightCard"
import { Component } from 'react'
import FlightsService from '../../services/flights.service'
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap'
import IsearchPannelLeft from '../../pages/indexPage/isearchPannelLeft'
// import IndexSearchPanel from "../../pages/indexPage/indexSearchPanel";


class FlightsFound extends Component {
    constructor() {
        super()
        this.state = {
            flight: undefined,
        }
        this.flightsService = new FlightsService()
    }


    loadFlight = () => {


        const { airport, destination, departureDate, returnDate, /* adults, children  */ } = this.props.match.params


        this.flightsService
            .searchTravels(airport, destination, departureDate, returnDate)
            .then(response => {
                console.log()
                this.setState({
                    flight: response.data
                })
            })
            .catch(err => console.log(err))
    }


    componentDidMount() {
        this.loadFlight()
    }

    componentDidUpdate(prevProps, prevState) {

        // console.log(prevProps)

        prevProps.location.pathname !== this.props.location.pathname && this.loadFlight()

    }

    render() {
        console.log(this.props.match.params)


        return (

            <div className="flights-found">

                <Container fluid >

                    <Row>

                        <Col xl={2} lg={3} md={4} sm={12}>

                            <IsearchPannelLeft props={this.props} />
                            {/* <IsearchPannelLeft props={this.props} cols={12} /> */}

                        </Col>
                        <Col xl={9} lg={9} md={8} sm={12}>

                            {!this.state.flight ?

                                <Spinner animation="grow" />

                                :

                                this.state.flight.map(flight => <ReturnedFlightCard flight={flight} key={flight._id} />)

                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FlightsFound