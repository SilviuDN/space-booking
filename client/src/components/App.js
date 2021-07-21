import './App.css';
import Routes from './routes'
import AuthService from './services/auth.service';
import { Component } from 'react'
import Navigation from '../layout/Navigation/Navigation';
import Footer from '../layout/Footer/Footer';
import Alex from './routes/alex'
import Silviu from './routes/silviu'
import Salva from './routes/salva'

class App extends Component {

  constructor() {
    super();
    this.state = { loggedUser: null }
    this.authService = new AuthService();
  }

  storeUser = loggedUser => this.setState({ loggedUser });

  getUser = () => {
    this.authService.isLoggedIn()
      .then(this.storeUser)
      .catch(err => console.log(err));
  }

  componentDidMount = () => this.getUser();

  render() {
    return (

      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} props={this.props} />

        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} />
        <Alex />
        <Silviu />
        <Salva />

        <Footer loggedUser={this.state.loggedUser} />
      </>

    )
  }
}

export default App;
