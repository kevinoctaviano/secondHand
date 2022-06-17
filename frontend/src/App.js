import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import LayoutInfoProfile from './components/layouts/LayoutInfoProfile';
import LayoutInfoProductAdd from './components/layouts/LayoutInfoProductAdd';
import LayoutHome from './components/layouts/LayoutHome';
import LayoutProductBuyer from './components/layouts/LayoutProductBuyer';
import LayoutProductSeller from './components/layouts/LayoutProductSeller';
import LayoutDashboardDaftarJual from './components/layouts/LayoutDashboardDaftarJual';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={LayoutHome} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/info-profile'} component={LayoutInfoProfile} />
        <Route exact path={'/product-buyer'} component={LayoutProductBuyer} />
        <Route exact path={'/product-seller'} component={LayoutProductSeller} />
        <Route exact path={'/dashboard-daftar-jual'} component={LayoutDashboardDaftarJual} />
        <Route
          exact
          path={'/info-product-add'}
          component={LayoutInfoProductAdd}
        />
      </Switch>
    </Router>
  );
}

export default App;
