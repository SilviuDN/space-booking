import { Component } from 'react';
import Planets from './Planets/planets';
import PlanetDetails from './planetDetails/PlanetDetails';



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

    // loadDetails = () => {
    //     this.props.history.push(`/discover/details/${this.state.view}`)
    // }



    render() {
        return (


            this.state.view === 'discover' ? <Planets changeView={this.changeView} /> :
                this.state.view !== '' ? <PlanetDetails view={this.state.view} changeView={this.changeView} /> :
                    null



        )
    }
}

export default DiscoverPage;