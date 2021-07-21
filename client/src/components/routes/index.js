import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/indexPage/indexPage.js'
import SignupPage from '../pages/signup/SignupPage'


const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/signup/:company" exact render={props => <SignupPage {...props} />} />
        </Switch>
    )
}

export default Routes