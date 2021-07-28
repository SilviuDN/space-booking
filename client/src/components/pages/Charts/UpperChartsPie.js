import { Component } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

import FlightsOccupationChart from './FlightsOccupationChart'

class UpperChartsPie extends Component {

    constructor() {
        super()
        this.state = {
            type: undefined,
            listForBarsChart: undefined,
            howManyDays: 3
        }
    }

    componentDidMount() {

    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }



    handleFormSubmit = e => {
        e.preventDefault()
    }

    componentDidUpdate = (prevProps, prevState) => prevState.howManyDays !== this.state.howManyDays



    render() {

        return (
        <>

            <Form onSubmit={this.handleFormSubmit}>

                    <Form.Label>How Many</Form.Label>
                    <Form.Control type="text" value={this.state.howManyDays} onChange={this.handleInputChange} name="howManyDays" />

                <FlightsOccupationChart howManyDays={+this.state.howManyDays}/>
            </Form>
            

        </>

        )
    }
}

export default UpperChartsPie
