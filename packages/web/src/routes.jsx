import { lazy, Suspense } from 'react';
import { Route as RouteBase, Switch, Redirect } from 'react-router-dom';

import { useAuth } from 'contexts/auth';

import './App.css';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const Home = lazy(() => import('pages/Home'));
const UpdateProject = lazy(() => import('pages/UpdateProject'));
const UpdateTask = lazy(() => import('pages/UpdateTask'));

function Route({ component: Component, isPrivate = false, ...props }) {
  const { signed } = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <RouteBase {...props} component={Component} />;
}

function Routes() {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/projects/:id/edit" component={UpdateProject} isPrivate />
        <Route path="/tasks/:id/edit" component={UpdateTask} isPrivate />
        <Route path="/" component={Home} isPrivate />
      </Switch>
    </Suspense>
  );
}

export default Routes;
