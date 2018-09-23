import React from 'react';
import './HomePage.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddProductComponent from '../addProduct/AddProductComponent';
import InventoryComponent from '../inventory/InventoryComponent';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {}
  };

  render() {
    return (
      <Router>
        <div className="routeClass">
          Dashboard Page
          <Link to="/">HOME</Link>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/inventory">Visit Inventory</Link>
          <Switch>
            <Route path="/" exact />
            <Route path="/addproduct" component={AddProductComponent} />
            <Route path="/inventory" component={InventoryComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HomePage;
