import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import MovieContainer from './movie/movie_container'
import { Switch, Route } from 'react-router-dom';

export default () => (
  <div>
    <Switch>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/browse" component={MovieContainer} />
    <AuthRoute path="/" component={SplashContainer} />
    </Switch>
  </div>
);