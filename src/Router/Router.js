import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFoundView from '../views/NotFoundView';

const HomeView = lazy(() =>
  import('../views/HomeView.js' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView.js' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('../views/LoginView.js' /* webpackChunkName: "login-page" */),
);

const ContactsView = lazy(() => 
  import('../views/ContactsView.js' /* webpackChunkName: "contacts-page" */)
)

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
            <Route path={routes.home} exact component={HomeView} />
            <Route path={routes.register} component={RegisterView} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.contacts} component={ContactsView} />
            <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  );
};

export default Router;