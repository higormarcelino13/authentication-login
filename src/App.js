import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import LoginSuccess from './LoginSucess';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route exact path="/LoginSucess" component={LoginSuccess} />
      </Switch>
    </Router>
  );
}

export default App;
