import axios from 'axios'

class ReviewService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/review',
            withCredentials: true
        })
    }

    leaveReview = review_info => this.app.put(`/${review_info.id}/${review_info.which}/edit`, review_info)
}

export default ReviewService