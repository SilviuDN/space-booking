import axios from 'axios'

class UploadService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/upload',
            withCredentials: true
        })
    }



    fileUpload = (formData) => this.app.post(`/`, formData)

}

export default UploadService