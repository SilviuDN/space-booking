import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/indexPage/indexPage.js'
import SignupPage from '../pages/signup/SignupPage'

import UserDetails from '../pages/UserDetails/UserDetails.js'
import UsersPage from '../pages/UsersPage/UsersPage.js'
import UserEditPage from '../pages/UserEditPage/UserEditPage.js'

import CompaniesPage from '../pages/CompaniesPage/CompaniesPage.js'
import CompanyDetails from '../pages/CompanyDetails/CompanyDetails.js'
import CompanyEditPage from '../pages/CompanyEditPage/CompanyEditPage.js'

import FlightDetails from '../pages/FlightsPage/FlightDetails'
import FlightsPage from '../pages/FlightsPage/FlightsPage'
import TempEdit from '../pages/FlightsPage/TempEdit'

import DestinationsPage from '../pages/DestinationsPage/DestinationsPage'
import DestinationDetails from '../pages/DestinationsPage/DestinationDetails'
import TempDestinationEdit from '../pages/DestinationsPage/TempDestinationEdit'

import AdminPage from '../pages/AdminPage/AdminPage.js'

import Test01 from '../pages/Testing/Test01.js'





const Routes = ({ storeUser, loggedUser, showAlert }) => {

    return (
        <Switch>

            <Route path="/admin" exact render={props => <AdminPage {...props} storeUser={storeUser} loggedUser={loggedUser} />} />

            <Route path="/" exact render={props => <IndexPage {...props} storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route path="/signup/:company" exact render={props => <SignupPage {...props} showAlert={showAlert} />} />

            <Route path="/users/" exact render={() => <UsersPage />} />
            <Route path="/users/:user_id" exact render={props => <UserDetails {...props} />} />
            <Route path="/users/:user_id/edit" render={props => <UserEditPage {...props} />} />

            <Route path="/companies" exact render={() => <CompaniesPage />} />
            <Route path="/companies/:company_id" exact render={props => <CompanyDetails {...props} />} />
            <Route path="/companies/:company_id/edit" render={props => <CompanyEditPage {...props} showAlert={showAlert} />} />


            <Route path="/flights" exact render={() => <FlightsPage />} />
            <Route path="/flights/new" exact render={(props) => <TempEdit {...props} type="new" showAlert={showAlert} />} />
            <Route path="/flights/:flight_id/edit" exact render={(props) => <TempEdit {...props} type="edit" showAlert={showAlert} />} />
            <Route path="/flights/:flight_id" exact render={(props) => <FlightDetails {...props} />} />

            <Route path="/destinations" exact render={() => <DestinationsPage />} />
            <Route path="/destinations/new" exact render={(props) => <TempDestinationEdit {...props} type="new" showAlert={showAlert} />} />
            <Route path="/destinations/:destination_id/edit" exact render={(props) => <TempDestinationEdit {...props} type="edit" showAlert={showAlert} />} />
            <Route path="/destinations/:destination_id" exact render={(props) => <DestinationDetails {...props} />} />

            <Route path="/testing/01" exact render={() => <Test01 />} />








        </Switch>
    )
}

export default Routes