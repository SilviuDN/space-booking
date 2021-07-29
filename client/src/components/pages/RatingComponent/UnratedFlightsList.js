import { Component } from 'react'
import ReviewService from '../../services/reviews.service'
import BarChart from '../Charts/BarChart'
import Rating from './Rating' 
import RateFlightCard from './RateFlightCard'


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
        console.log(this.props.flights)
        return (

            <>
           {this.props.flights.map(flightId => <RateFlightCard key={flightId._id} flightId = {flightId}/>)}
           </>

        )
    }
}


export default UnratedFlightsList