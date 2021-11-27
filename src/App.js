import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { css } from "@emotion/react";
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);
  const override = css``;
  useEffect(() => {
    AOS.init({ offset: 160, duration: 900, delay: 200 });
  });
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ?
      <div className='animation-box'>
        <GridLoader
          loading={loading}
          size={15}
          color="#f7d919"
          css={override}
        />
        </div>
        :
        <div className="App">
          <AuthProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route path='/signup'>
                  <SignUp></SignUp>
                </Route>
                <Route path='/explore'>
                  <Explore></Explore>
                </Route>
                <PrivateRoute path='/dashboard'>
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path='/placeOrder/:id'>
                  <PlaceOrder></PlaceOrder>
                </PrivateRoute>
                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </div>
      }
    </>
  );
}

export default App;
