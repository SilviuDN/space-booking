import './App.css';
import Routes from './routes'
import AuthService from './services/auth.service';
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../layout/Navigation/Navigation';
import Footer from '../layout/Footer/Footer';


class App extends Component {

  constructor() {
    super();
    this.state = { loggedUser: null }
    this.authService = new AuthService();
  }

  storeUser = loggedUser => this.setState({ loggedUser });

  getUser = () => {
    this.authService.isLoggedIn()
      .then(res => this.storeUser(res.data))
      .catch(err => console.log(err))
  }

  componentDidMount = () => this.getUser();

  render() {
    return (

      <>
        <Switch>
          <Route path="*" render={props => <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} {...props} />} />
        </Switch>


        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} />



        <Footer loggedUser={this.state.loggedUser} />
      </>

    )
  }
}

export default App;
