import React from 'react';
import './HomePage.css';
import * as appApi from '../api/appApi';
import InventoryComponent from '../inventory/InventoryComponent';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {}
  };
  componentDidMount() {
    appApi.postInventory();
    // appApi.getUsers();
  }

  render() {
    return (
      <div className="">
        Dashboard Page
        <InventoryComponent />
      </div>
    );
  }
}

export default HomePage;
