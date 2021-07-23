
import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const FlightCard = ({ _id, flightNumber, price, capacity, destination, flightCompany, removeFlight }) => {

    return (

        <Col md={4}>

            <Card className="coaster-card">
                {/* ID ->> <cardFotoDest id= destination /> */}
                <Card.Img variant="top" src={destination?.image} />
                <Card.Body>
                    <Card.Title>Price: ${price}</Card.Title>
                    <Card.Subtitle>Seats: {capacity}</Card.Subtitle>
                    <Link to={`/flights/${_id}`}>
                        <Button variant="dark" block >Ver detalles</Button>
                    </Link>
                    <button className="btn btn-danger" onClick={removeFlight}>Delete</button>


                </Card.Body>
            </Card>

        </Col>
    )
}

export default FlightCard