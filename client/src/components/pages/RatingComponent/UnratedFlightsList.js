import { Component } from 'react'
import ReviewService from '../../services/reviews.service'
import BarChart from '../Charts/BarChart'
import Rating from './Rating' 
import RateFlightCard from './RateFlightCard'
import StaticRating from './StaticRating'


import { Container, Row, Col, } from 'react-bootstrap'


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
            <StaticRating rating={3}/>
           {this.props.flights.map(flightId => this.props.ratedFlights.includes(flightId) 
                ? null
                : <RateFlightCard key={flightId._id} flightId = {flightId} updateRatedFlightsList={this.props.updateRatedFlightsList}/> )}
           </>

        )
    }
}


export default UnratedFlightsList