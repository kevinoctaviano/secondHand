import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import LayoutInfoProfile from './components/layouts/LayoutInfoProfile';
import LayoutInfoProductAdd from './components/layouts/LayoutInfoProductAdd';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login']} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/info-profile'} component={LayoutInfoProfile} />
        <Route exact path={'/info-product-add'} component={LayoutInfoProductAdd} />
      </Switch>
    </Router>
  );
}

export default App;
