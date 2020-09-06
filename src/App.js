import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Orders from './components/orders/Orders'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
          <div className="container">
            <ul className="navbar-nav mr-auto" id="navbarSupportedContent">
            <li className="nav-item">
              <Link to="/products" className="nav-link text-white" >Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link text-white">Categories</Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link text-white">Orders</Link>
            </li>
          </ul>
          </div>
        </nav>

        <Switch>
          
          <Route path="/categories">
            <Categories />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
  }
}
