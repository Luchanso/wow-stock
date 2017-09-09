import React from 'react';
import { NativeRouter, Link, Route } from 'react-router-native';

const Router = () => (
  <NativeRouter>
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div>
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </div>
  </NativeRouter>
);

export default Router;
