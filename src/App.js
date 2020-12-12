import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import SideBar from './components/sidebar/sidebar.component';
import DashboardPage from '../src/pages/dashboard/dashboard.component';
import MyOrdersPage from './pages/my-orders/my-orders.component';
import MyProductsPage from './pages/my-products/my-products.component';

const App = () => {
  return(
    <Router>
        <div className='App'>
            <SideBar/>
            <div className='page-container'>
                <Switch>
                    <Route exact path='/'>
                        <DashboardPage/>
                    </Route>
                    <Route path='/my-orders'>
                        <MyOrdersPage/>
                    </Route>
                    <Route path='/my-products'>
                        <MyProductsPage/>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
  )
}

export default App;
