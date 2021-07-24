import { Component } from 'react'
import { Table } from 'react-bootstrap'
import CompanyCard from './CompanyCard'
import CompanyService from '../../services/company.service'
import SearchBox from '../../shared/searchBox/searchBox'

class CompaniesList extends Component {

    constructor() {
        super()

        this.state = {
            company: undefined,
            searchBox: '',
            typingTimeout: 0
        }

        this.companyService = new CompanyService()
    }



    loadCompanies = (searchString) => {

        !searchString ?

            this.companyService
                .getCompanies()
                .then(response => this.setState({ company: response.data }))
                .catch(err => console.log(err))
            :

            this.companyService
                .searchBox(searchString)
                .then(response => this.setState({ company: response.data }))
                .catch(err => console.log(err))
    }



    componentDidMount = () => {
        this.loadCompanies()
    }



    deleteCompany = company_id => {

        if (window.confirm('¿Are you sure want to delete this company ?')) {
            this.setState({
                company: this.state.company.filter(elm => elm._id !== company_id)
            })

            this.companyService.companyDelete(company_id)
                .then(() => console.log('FALTA ALERT'))
                .catch(err => console.log(err))

        }

    }



    render() {
        return (

            !this.state.company
                ?
                'CARGANDO'
                :
                <>
                    <SearchBox load={this.loadCompanies} />

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Compañia</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.company.map(elm => <CompanyCard key={elm._id} {...elm} deleteCompany={this.deleteCompany} setList={this.props.setList} setId={this.props.setId} loggedUser={this.props.loggedUser} />)}

                        </tbody>
                    </Table>
                </>


        )

    }


}

export default CompaniesList
