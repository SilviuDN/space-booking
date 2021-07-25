import DestinationsList from './DestinationsList'
import { Container } from 'react-bootstrap'

const DestinationsPage = ({ loggedUser, showAlert, history }) => {

    return (

        <Container>

            <h1>Destinations Page</h1>
            <DestinationsList loggedUser={loggedUser} showAlert={showAlert} history={history} />
        </Container>
    )
}

export default DestinationsPage