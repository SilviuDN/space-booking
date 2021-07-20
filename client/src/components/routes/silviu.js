import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/indexPage/indexPage.js'



const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/silviu" exact render={() => <IndexPage />} />


        </Switch>
    )
}

export default Routes