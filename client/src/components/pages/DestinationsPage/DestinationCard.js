import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const DestinationCard = ({ _id, name, description, image, removeDestination }) => {

    return (

        <Col md={4}>

            <Card className="coaster-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Subtitle>Description: {description}</Card.Subtitle>
                    <Link to={`/destinations/${_id}`}>
                        <Button variant="dark" block >Details</Button>
                    </Link>
                    <button className="btn btn-danger" onClick={removeDestination}>Delete</button>


                </Card.Body>
            </Card>

        </Col>
    )
}

export default DestinationCard