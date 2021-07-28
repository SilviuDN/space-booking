import { Component } from 'react';
import NasaService from '../../../services/nasa.service';
import { Carousel, Row, Col, Button } from "react-bootstrap"


class PlanetDetails extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.NasaService = new NasaService()
    }


    async loadData() {
        this.NasaService
            .searchData(this.props.view)
            .then(response => {

                const data = JSON.parse(JSON.stringify(response.data.collection.items))
                const finalData = data.filter(item => item.links?.map(link => (['render'] in link)))

                this.setState({
                    data: finalData
                })
                console.log(finalData)
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



            <Carousel carousel={'true'} fade controls={true} >
                {
                    this.state.data?.map((item, index) => {

                        return (<Carousel.Item style={{ height: '95vh' }} key={index}>

                            <Row className={'mt-5'}>

                                <Col lg={{ span: 4, offset: 1 }} style={{ background: '#1e2746', color: 'white', borderRadius: 8, textAlign: 'center', maxHeight: '300px', overflowY: 'scroll' }}>

                                    <div style={{ padding: 30 }}>
                                        <hr />
                                        <h1 >{item.data[0].title}</h1>
                                        <hr />
                                        <h4 className={'mt-4'}>{'Center: ' + item.data[0].center + '  --- ' + item.data[0].date_created.split('T')[0]}</h4>

                                        <p>{item.data[0].description}</p>

                                        <Button className={'d-block button'} style={{ marginLeft: 'auto' }} onClick={() => this.props.changeView('discover')}>Back to planets</Button>
                                    </div>

                                </Col>
                            </Row>
                            <img
                                className="d-block  c "
                                src={item.links[0].href}
                                alt="First slide"
                                style={{ position: 'absolute', bottom: 0, left: 0, top: 0, right: 0, zIndex: -300 }} />

                        </Carousel.Item>)
                    })
                }
            </Carousel>
        )
    }
}


export default PlanetDetails;