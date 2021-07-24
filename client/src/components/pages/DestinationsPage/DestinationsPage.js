import DestinationsList from './DestinationsList'

const DestinationsPage = ({ loggedUser }) => {

    return (
        <>
            <h1>Destinations Page</h1>
            <DestinationsList loggedUser={loggedUser} />
        </>
    )
}

export default DestinationsPage