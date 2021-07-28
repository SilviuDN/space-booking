import { Component } from 'react'
import RateFlightCard from '../RatingComponent/RateFlightCard'


class Test01 extends Component {
    constructor() {
        super()
        this.state = {
            listState: 'user',
            chart: '',
            searchBox: '',
            isLoading: false,
            id: '',

        }
    }


    // this.state[this.state.listState]



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
            <>

            <h1>Hello</h1>
            <RateFlightCard  />


            </>
        )
    }
}


export default Test01