import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Login from './components/pages/Login';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Register from './components/pages/Register';
import LayoutInfoProfile from './components/layouts/LayoutInfoProfile';
import LayoutInfoProductAdd from './components/layouts/LayoutInfoProductAdd';
import LayoutHome from './components/layouts/LayoutHome';
import LayoutProductBuyer from './components/layouts/LayoutProductBuyer';
import LayoutProductSeller from './components/layouts/LayoutProductSeller';
import LayoutDashboardDaftarJual from './components/layouts/LayoutDashboardDaftarJual';
import LayoutInfoPenawar from './components/layouts/LayoutInfoPenawar';
import LayoutDaftarJualDiminati from './components/layouts/LayoutDaftarJualDiminati';
import LayoutKategori from './components/layouts/LayoutKategori';
import LayoutAddKategori from './components/layouts/LayoutAddKategori';
import LayoutEditKategori from './components/layouts/LayoutEditKategori';
import LayoutDaftarTerjual from './components/layouts/LayoutDaftarTerjual';
import LayoutDaftarJualDetail from './components/layouts/LayoutDaftarJualDetail';
import LayoutdDaftarPenawar from './components/layouts/LayoutDaftarPenawar';

import { history } from './helpers/history';
import { getAllKategori, getUserByID } from './actions/user';

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getAllDataProduct);
    dispatch(getAllKategori);
    dispatch(getUserByID);
  }, [dispatch]);
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={'/'} component={LayoutHome} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          {currentUser ? (
            <>
              <Route
                exact
                path={'/info-profile'}
                component={LayoutInfoProfile}
              />
              <Route
                exact
                path={'/info-penawar'}
                component={LayoutInfoPenawar}
              />
              <Route
                exact
                path={'/product-buyer/:id'}
                component={LayoutProductBuyer}
              />
              <Route
                exact
                path={'/product-seller/:id'}
                component={LayoutProductSeller}
              />
              <Route
                exact
                path={'/daftar-jual'}
                component={LayoutDashboardDaftarJual}
              />
              <Route
                exact
                path={'/detail-daftar-jual/:id'}
                component={LayoutDaftarJualDetail}
              />
              <Route
                exact
                path={'/daftar-penawar'}
                component={LayoutdDaftarPenawar}
              />
              <Route
                exact
                path={'/diminati'}
                component={LayoutDaftarJualDiminati}
              />
              <Route exact path={'/terjual'} component={LayoutDaftarTerjual} />
              <Route
                exact
                path={'/info-product-add'}
                component={LayoutInfoProductAdd}
              />
              <Route exact path={'/kategori'} component={LayoutKategori} />
              <Route
                exact
                path={'/add-kategori'}
                component={LayoutAddKategori}
              />
              <Route
                exact
                path={'/edit-kategori/:id'}
                component={LayoutEditKategori}
              />
            </>
          ) : (
            <Route path={'/'} component={ErrorPage} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
