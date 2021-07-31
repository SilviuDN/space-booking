import './App.css';
import Routes from './routes'
import AuthService from './services/auth.service';
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './layout/Navigation/Navigation';
// import Footer from '../layout/Footer/Footer';
import Alert from './shared/Alert/Alert';


class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedUser: null,
      toast: {
        text: '',
        show: false,
      }
    }
    this.authService = new AuthService();
  }

  storeUser = loggedUser => this.setState({ loggedUser });
  showAlert = text => this.setState({ toast: { show: true, text } })

  getUser = () => {
    this.authService.isLoggedIn()
      .then(res => this.storeUser(res.data))
      .catch(err => console.log(err))
  }

  componentDidMount = () => this.getUser();


  render() {
    console.log(this.state.loggedUser)
    return (

      <>
        <Switch>
          <Route path="/" render={props => <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} {...props} showAlert={this.showAlert} />} />
        </Switch>


        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert} />

        <Alert
          show={this.state.toast.show}
          text={this.state.toast.text}
          closeAlert={() => this.setState({ toast: { ...this.state.toast, show: false } })} />


        {/* <Footer loggedUser={this.state.loggedUser} /> */}
      </>

    )
  }
}

export default App;
