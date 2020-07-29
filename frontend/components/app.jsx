import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupContainer from './session/signup_container';

export default () => (
  <div>
    {/* <ProtectedRoute path="/browse" component={} /> */}
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);