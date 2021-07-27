import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Planets from './Planets/planets';



class DiscoverPage extends Component {
    constructor() {
        super()
        this.state = {
            view: 'discover'
        }
    }



    changeView = (view) => {
        this.setState({
            view: view
        })
    }



    render() {
        return (


            this.state.view === 'discover' ? <Planets changeView={this.changeView} /> :

                null



        )
    }
}

export default DiscoverPage;