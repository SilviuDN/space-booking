import axios from 'axios'

class CompanyService {

    constructor() {
        this.app = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL + '/company',
            withCredentials: true
        })
    }

    newCompany = (companyData, userId) => this.app.post('/new', { ...companyData, userId })

    companyDetails = (company_id) => this.app.get(`/${company_id}/company`)

    companyEdit = (state) => this.app.put(`/${state.company_id}/edit`, state)

    companyDelete = (company_id) => this.app.delete(`/${company_id}/delete`)

    getCompanies = (status) => this.app.get(`/${status}`)

    setStatus = (company_id, status, moderatorId) => this.app.put(`/setStatus/${company_id}/${moderatorId}`, { status })

    searchBox = (string) => this.app.get(`/search/${string}`)

    getMyCompany = (userId) => this.app.get(`/myCompany/${userId}`)
}
export default CompanyService