import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login']} component={Login} />
        <Route exact path={'/register'} component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
