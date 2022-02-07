import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../src/screens/home';
import TodoApp from '../src/screens/todo';
import WelcomeScreen from '../src/screens/welcomeScreen';
import RegisterForm from '../src/screens/registerForm';


function App() {
  return (
    <Router>
      <Switch>
          <Route  exact path ="/" component={Home} />
          <Route path ="/welcomeScreen" component={WelcomeScreen} />
          <Route path ="/TodoApp" component ={TodoApp}/>
          <Route path ="/RegisterForm" component ={RegisterForm}/>
      </Switch>
    </Router>
  //  <Home/>
  //  <WelcomeScreen/>
  );
}

export default App;
