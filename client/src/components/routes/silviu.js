import { Switch, Route, Redirect } from 'react-router-dom'
import FlightDetails from '../FlightsPage/FlightDetails'
import FlightForm from '../FlightsPage/FlightForm'
import FlightsPage from '../FlightsPage/FlightsPage'
import TempEdit from '../FlightsPage/TempEdit'




const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/silviu/flights" exact render={() => <FlightsPage />} />
            <Route path="/silviu/flights/new" exact render={() => <FlightForm />} />
            <Route path="/silviu/flights/:flight_id/edit" exact render={(props) => <TempEdit {...props} />} />
            <Route path="/silviu/flights/:flight_id" exact render={(props) => <FlightDetails {...props} />} />
            {/* <Route path="/silviu/flights/:flight_id/delete" exact render={(props) => <FlightDetails {...props} />} /> */}
            {/* <Route path="/silviu" exact render={() => <IndexPage />} /> */}


        </Switch>
    )
}

export default Routes