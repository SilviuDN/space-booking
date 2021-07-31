import { Component } from 'react'
import ReviewService from '../../../services/reviews.service'
import RateFlightCard from './RateFlightCard'
// import { Container, Row, Col, } from 'react-bootstrap'
// import BarChart from '../Charts/BarChart'
// import Rating from './Rating' 
// import StaticRating from './StaticRating'




class UnratedFlightsList extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined
        }
        this.reviewsService = new ReviewService()
    }


    componentDidMount = () => {

    }


    render() {
        return (

            <>
                {this.props.flights.map(flightId => this.props.ratedFlights.includes(flightId)
                    ? null
                    : <RateFlightCard key={flightId._id} flightId={flightId} updateRatedFlightsList={this.props.updateRatedFlightsList} />)}
            </>

        )
    }
}


export default UnratedFlightsList