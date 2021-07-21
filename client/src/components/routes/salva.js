import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/indexPage/indexPage.js'



const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/salva" exact render={() => <IndexPage />} />


        </Switch>
    )
}

export default Routes