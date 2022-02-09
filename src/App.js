import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../src/screens/home';
import TodoApp from '../src/screens/todo';
import WelcomeScreen from '../src/screens/welcomeScreen';
import RegisterForm from '../src/screens/registerForm';
import Calculator from '../src/screens/calculator';
import Movies from '../src/screens/movies';


function App() {
  return (
    <Router>
      <Switch>
          <Route  exact path ="/" component={Home} />
          <Route path ="/welcomeScreen" component={WelcomeScreen} />
          <Route path ="/TodoApp" component ={TodoApp}/>
          <Route path ="/RegisterForm" component ={RegisterForm}/>
          <Route path="/Calculator" component = {Calculator}></Route>
          <Route path="/Movies" component = {Movies}></Route>

      </Switch>
    </Router>
  //  <Home/>
  //  <WelcomeScreen/>
  );
}

export default App;
