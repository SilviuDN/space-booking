import { Component } from 'react'
import CompanyService from '../../services/company.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CompanyDetails extends Component {

    constructor() {
        super()
        this.state = {
            company: undefined
        }
        this.companyService = new CompanyService()
    }


    componentDidMount() {
        const { company_id } = this.props.match.params
        this.companyService
            .companyDetails(company_id)
            .then(response => this.setState({ company: response.data }))
            .catch(err => console.log(err))
    }

    render() {


        return (

            <Container>
                {!this.state.company ?
                    <h3>cargando</h3> :
                    <Row className="justify-content-around">
                        <Col md={12}>
                            <h3>{this.state.company.companyName} </h3>

                            <hr></hr>

                            <p>Company ID: Debe tener ID</p>
                            <p>Type of company ID: Debe tener tipo de ID</p>
                            <p>phone : Debe tener telefono</p>
                            <br />
                            <p><strong>Address</strong></p>
                            <p>Street : {this.state.company.companyAddress.street}</p>
                            <p>Number: {this.state.company.companyAddress.number}</p>
                            <p>Zipcode: {this.state.company.companyAddress.zipCode}</p>
                            <p>City: {this.state.company.companyAddress.city}</p>
                            <p>Country: {this.state.company.companyAddress.country}</p>
                            <hr></hr>
                            <h3>Flights</h3>

                            <hr></hr>

                            <Link to="/alex/company" className="btn btn-dark">Volver al listado</Link>

                        </Col>

                        <Col md={4}>

                        </Col>
                    </Row>
                }

            </Container>
        )
    }



}
export default CompanyDetails