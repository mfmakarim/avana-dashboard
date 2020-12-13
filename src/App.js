import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import SideBar from './components/sidebar/sidebar.component';
import { Dashboard, Orders, Agent, MyPurchase, Products, ProductCategories} from './pages/pages-list';

const App = () => {
  return(
    <Router>
        <div className='App'>
            <SideBar/>
            <div className='page-container'>
                <Switch>
                    <Route exact path='/'>
                        <Dashboard/>
                    </Route>
                    <Route exact path='/dashboard'>
                        <Dashboard/>
                    </Route>
                    <Route path='/agent'>
                        <Agent/>
                    </Route>
                    <Route path='/orders'>
                        <Orders/>
                    </Route>
                    <Route path='/my-purchase'>
                        <MyPurchase/>
                    </Route>
                    <Route path='/product-categories'>
                        <ProductCategories/>
                    </Route>
                    <Route path='/product-allproduct'>
                        <Products/>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
  )
}

export default App;
