import './App.css';
import Routes from './routes';
import AuthService from './../services/auth.service';
// import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './layout/Navigation/Navigation';
// import Footer from '../layout/Footer/Footer';
import Alert from './shared/Alert/Alert';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [loggedUser, setLoggedUser] = useState(null);
  const [toast, setToast] = useState({ text: '', show: false });
  const [loginPop, setLoginPop] = useState(undefined);


  const storeUser = loggedUser => setLoggedUser(loggedUser);
  const showAlert = text => setToast({ text: text, show: true });
  const setLoginFunction = (fn) => setLoginPop(fn)


  const authService = new AuthService();
  const getUser = () => {
    authService
      .isLoggedIn()
      .then(res => storeUser(res.data))
      .catch(err => console.log(err));
  };


  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log(loggedUser);
  return (
    <>
      <Switch>
        <Route
          path="/"
          render={props => (
            <Navigation
              storeUser={setLoggedUser}
              loggedUser={loggedUser}
              {...props}
              showAlert={showAlert}
              setLoginPop={setLoginFunction}
            />
          )}
        />
      </Switch>

      <Routes
        storeUser={storeUser}
        loggedUser={loggedUser}
        showAlert={showAlert}
        setLoginPop={loginPop}
      />

      <Alert
        show={toast.show}
        text={toast.text}
        closeAlert={() => setToast({ ...toast, show: false })}
      />

      {/* <Footer loggedUser={this.state.loggedUser} /> */}
    </>
  );
}

export default App;
