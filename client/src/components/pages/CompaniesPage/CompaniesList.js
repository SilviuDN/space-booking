import { Component } from 'react'
import { Table } from 'react-bootstrap'
import CompanyCard from './CompanyCard'
import CompanyService from '../../services/company.service'

class CompaniesList extends Component {

    constructor() {
        super()
        this.state = {
            company: undefined
        }

        this.companyService = new CompanyService()
    }

    loadCompanies = () => {
        this.companyService
            .getCompanies()
            .then(response => this.setState({ company: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadCompanies()
    }

    deleteCompany = company_id => {

        this.setState({
            company: this.state.company.filter(elm => elm._id !== company_id)
        })

        this.companyService.companyDelete(company_id)
            .then(() => console.log('yeeee'))
            .catch(err => console.log(err))


    }


    render() {
        return (

            !this.state.company
                ?
                'CARGANDO'
                :
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Compañia</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.company.map(elm => <CompanyCard key={elm._id} {...elm} deleteCompany={this.deleteCompany} />)}

                        </tbody>
                    </Table>
                </>


        )

    }


}

export default CompaniesList
