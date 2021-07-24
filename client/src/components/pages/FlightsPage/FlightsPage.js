import FlightsList from './FlightsList'
import { Container } from 'react-bootstrap'

const FlightsPage = ({ loggedUser }) => {

    return (

        <Container>
            <h1>Flights Page</h1>
            <FlightsList loggedUser={loggedUser} />
        </Container>
    )
}

export default FlightsPage