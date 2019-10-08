/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard';


const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/inventory" />
  },

  {
    route: '*',
    component: DashboardLayout, /* This is saying that the following routes are following the Dashboard Layout Style (Used for when Auth is added */
    routes: [

      {
        path: '/inventory/add',
        exact: true,
        component: lazy(() => import('views/AddToInventory')) /*This lazy function is basically what mounts what page to the view*/
        /*Example: This will look in the views/ProjectCreate folder for an index, which we have that exports our ProjectCreate.js file, which uses components within the same folder */
      },
      {
        path: '/inventory/:id',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/inventory/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/inventory',
        exact: true,
        component: lazy(() => import('views/ProjectList'))
      },

    ]
  }
];

export default routes;
