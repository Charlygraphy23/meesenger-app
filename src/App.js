import React from 'react';
import './App.css';
import 'firebase/auth'
import firebase from 'firebase/app'
import fireConfig from './Config'
import 'firebase/database'
import UserProvider from './Context/UserProvider'
import HomePage from './Components/HomePage'
import Navbar from './Components/NavBar'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './Components/SignupPage'
import Activesection from './Components/Activesection'

firebase.initializeApp(fireConfig)

const App=() =>  {

  return (
    <UserProvider>
       <div className="App">
         <ToastContainer/>
        <Router>
          <Navbar/>
          <Activesection/>
            <Switch>
              <Route  exact path="/" component={HomePage}/>
              <Route  exact path="/login" component={LoginPage}/>
              <Route  exact path="/signup" component={SignupPage}/>
            </Switch>
          </Router>
       </div>
    </UserProvider>
  );
}


export default App;
