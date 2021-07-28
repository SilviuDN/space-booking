import { Route } from 'react-router-dom'
import DiscoverPage from '../pages/DiscoverPage/DiscoverPage.js'
// import PlanetDetails from '../pages/DiscoverPage/planetDetails/PlanetDetails.js'

const PlanetRoutes = ({ loggedUser, showAlert }) => {

    return (
        <>
            <Route path="/discover" exact render={props => <DiscoverPage {...props} />} />
            {/* <Route path="/discover/details/:planet" exact render={props => <PlanetDetails {...props} />} /> */}
        </>
    )
}

export default PlanetRoutes