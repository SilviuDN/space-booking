import axios from 'axios'

class CompanyService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    companyDetails = (company_id) => this.app.get(`/company/${company_id}/company`)
    companyEdit = (state) => this.app.put(`/company/${state.company_id}/edit`, state)
    companyDelete = (company_id) => this.app.delete(`/company/${company_id}/delete`)
    getCompanies = () => this.app.get('/company')
}
export default CompanyService