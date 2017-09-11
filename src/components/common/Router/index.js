import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import SideMenu from 'react-native-side-menu';
import Sidebar from '../Sidebar';
import TestPage from '../TestPage';

const menu = <Sidebar />;

const Router = () => (
  <NativeRouter>
    <SideMenu menu={menu}>
      <Route path="/" component={TestPage} />
    </SideMenu>
  </NativeRouter>
);

export default Router;
