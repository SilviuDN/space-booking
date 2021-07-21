import { Switch, Route } from 'react-router-dom'
import IndexPage2 from '../pages/indexPage/indexPage2.js'
import UserDetails from '../pages/UserDetails/UserDetails.js'
import UsersPage from '../pages/UsersPage/UsersPage.js'
import UserEditPage from '../pages/UserEditPage/UserEditPage.js'


const Routes = ({ storeUser, loggedUser }) => {

    return (
        <>
            <Switch>
                <Route path="/alex" exact render={() => <IndexPage2 />} />
                <Route path="/alex/userDetails/:user_id" render={props => <UserDetails {...props} />} />
                <Route path="/alex/user" exact render={() => <UsersPage />} />
                <Route path="/alex/userEdit/:user_id" render={props => <UserEditPage {...props} />} />
            </Switch>



        </>
    )
}

export default Routes