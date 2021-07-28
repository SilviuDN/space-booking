import { Component } from 'react';
import NasaService from '../../../services/nasa.service';

class PlanetDetails extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.NasaService = new NasaService()
    }


    async loadData() {
        this.NasaService
            .searchData(this.props.view)
            .then(response => {

                const data = JSON.parse(JSON.stringify(response.data.collection.items))
                console.log(data)
            })
            .catch(err => console.log(err))

    }


    test() {
        console.log(this.props.view)




        //             (component, props) => <component props />
        //         (componente, props, condition) => condition ? <Componente props />
        //  resolveType(listState) return
    }


    componentDidMount() {
        this.loadData()
    }



    render() {
        return (
            null
        )
    }
}


export default PlanetDetails;