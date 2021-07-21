import './App.css';
import Routes from './routes'
import AuthService from './services/auth.service';
import { Component } from 'react'
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
        <Routes />
        <Alex />
        <Silviu />
        <Salva />
      </>

    )
  }
}

export default App;
