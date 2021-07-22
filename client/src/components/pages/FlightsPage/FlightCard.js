
import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const FlightCard = ({ _id, flightNumber, price, capacity, destination, flightCompany }) => {

    return (

        <Col md={4}>

            <Card className="coaster-card">
                <Card.Img variant="top" src={destination} />
                <Card.Body>
                    <Card.Title>Price: ${price}</Card.Title>
                    <Card.Subtitle>Seats: {capacity}</Card.Subtitle>
                    <Link to={`/flights/${_id}`}>
                        <Button variant="dark" block >Ver detalles</Button>
                    </Link>


                </Card.Body>
            </Card>

        </Col>
    )
}

export default FlightCard