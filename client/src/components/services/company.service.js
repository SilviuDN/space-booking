import axios from 'axios'

class CompanyService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/company',
            withCredentials: true
        })
    }

    companyDetails = (company_id) => this.app.get(`/${company_id}/company`)
    companyEdit = (state) => this.app.put(`/${state.company_id}/edit`, state)
    companyDelete = (company_id) => this.app.delete(`/${company_id}/delete`)
    getCompanies = () => this.app.get('/')

    searchBox = (string) => this.app.get(`/search/${string}`)
}
export default CompanyService