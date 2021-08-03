import { Component } from 'react'
import { Table, Col, Row } from 'react-bootstrap'
import CompanyCard from './CompanyCard'
import CompanyService from '../../../services/company.service'
import SearchBox from '../../shared/searchBox/searchBox'
import Spinner from 'react-bootstrap/Spinner';

class CompaniesList extends Component {

    constructor() {
        super()

        this.state = {
            company: undefined,
            searchBox: false,
            typingTimeout: 0,
            status: false,
            loading: false
        }

        this.companyService = new CompanyService()
    }



    loadCompanies = (searchString) => {

        !searchString ?

            this.companyService
                .getCompanies(this.state.status)
                .then(response => {
                    this.setState({ company: response.data, loading: false })

                })
                .catch(err => console.log(err))
            :

            this.companyService
                .searchBox(searchString)
                .then(response => {
                    this.setState({
                        company: response.data,
                        loading: false
                    })
                })
                .catch(err => console.log(err))
    }




    componentDidMount = () => {
        this.loadCompanies()
        if (this.props.sharedFunction) this.props.sharedFunction('companiesList', this.loadCompanies)
        // this.props.sharedFunctionStatus('companiesList', this.loadCompanies)
    }


    acceptCompany = (company, status, moderatorId) => {

        this.companyService
            .setStatus(company, status, moderatorId)
            .then((response) => {
                this.loadCompanies()
                console.log(response)
            })
            .catch(err => console.log(err))
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


    setStatus = () => {

        this.setState({
            status: !this.state.status,
            loading: true,
            checked: !this.state.checked
        })
        setTimeout(() => {

            this.loadCompanies()
        }, 200);
    }


    // componentDidUpdate(prevProps, prevState) {
    //     this.prevState !== this.state && this.loadCompanies()
    // }


    render() {
        return (

            this.state.loading ?
                <Spinner animation="grow" />
                :
                <>
                    <Row>
                        <Col md={11}>
                            <SearchBox load={this.loadCompanies} />
                        </Col>
                        <Col md={1} className={'text-center'} style={{ lineHeight: '40px' }}>
                            <input type="checkbox" checked={this.state.checked} onChange={() => this.setStatus()} style={{ boxShadow: '0px 0px 0px 7px black' }} />
                        </Col>

                    </Row>
                    <Table striped bordered hover className={'tableList'}>
                        <thead>
                            <tr>
                                <th>Compañia</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.company?.map(elm => <CompanyCard key={elm._id} {...elm} deleteCompany={this.deleteCompany} setList={this.props.setList} setId={this.props.setId} loggedUser={this.props.loggedUser} acceptCompany={this.acceptCompany} />)}

                        </tbody>
                    </Table>
                </>
        )

    }


}

export default CompaniesList
