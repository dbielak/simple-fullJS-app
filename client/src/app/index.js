import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoadingFallback from '@root/loading_fallback';
import { isAuthenticated } from '@root/auth';
import AppWrapper from '@root/app_wrapper';

import 'typeface-roboto';

const Home = lazy(() => import('@root/home'));
const AddItem = lazy(() => import('@root/add_item'));
const Policy = lazy(() => import('@root/pages/info_pages/Policy'));
const Terms = lazy(() => import('@root/pages/info_pages/Terms'));
const Page404 = lazy(() => import('@root/pages/Page404'));
const Login = lazy(() => import('@root/pages/Login'));

const PrivateRoute = ({ Component, ...rest }) => (
  <Route {...rest} render={(props) => (isAuthenticated() === true ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const App = () => (
  <Router>
    <AppWrapper>
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/nowa-oferta" component={AddItem} />

          <Route path="/login" component={Login} />

          <Route path="/regulamin" component={Policy} />
          <Route path="/polityka-prywatnosci" component={Terms} />

          <PrivateRoute path="/protected" component={Home} />

          <Route path="*" component={Page404} />
        </Switch>
      </Suspense>
    </AppWrapper>
  </Router>
);

PrivateRoute.propTypes = {
  Component: PropTypes.node
};

export default App;
