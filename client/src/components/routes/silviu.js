import { Switch, Route } from 'react-router-dom'
import DestinationsPage from '../DestinationsPage/DestinationsPage'
import DestinationDetails from '../DestinationsPage/DestinationDetails'
import FlightForm from '../FlightsPage/FlightForm'
import FlightDetails from '../FlightsPage/FlightDetails'
import FlightsPage from '../FlightsPage/FlightsPage'
import TempEdit from '../FlightsPage/TempEdit'
import TempDestinationEdit from '../DestinationsPage/TempDestinationEdit'
import DestinationForm from '../DestinationsPage/DestinationForm'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/silviu/flights" exact render={() => <FlightsPage />} />
            <Route path="/silviu/flights/new" exact render={(props) => <FlightForm {...props} />} />
            <Route path="/silviu/flights/:flight_id/edit" exact render={(props) => <TempEdit {...props} />} />
            <Route path="/silviu/flights/:flight_id" exact render={(props) => <FlightDetails {...props} />} />
            {/* <Route path="/silviu/flights/:flight_id/delete" exact render={(props) => <FlightDetails {...props} />} /> */}
            {/* <Route path="/silviu" exact render={() => <IndexPage />} /> */}

            <Route path="/silviu/destinations" exact render={() => <DestinationsPage />} />
            <Route path="/silviu/destinations/new" exact render={(props) => <DestinationForm {...props} />} />
            <Route path="/silviu/destinations/:destination_id/edit" exact render={(props) => <TempDestinationEdit {...props} />} />
            <Route path="/silviu/destinations/:destination_id" exact render={(props) => <DestinationDetails {...props} />} />


        </Switch>
    )
}

export default Routes