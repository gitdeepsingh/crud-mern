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
  }

  render() {
    return (
      <div className="">
        Dashboard Page
        <InventoryComponent />
        <button onClick={appApi.getInventory}>GET DETAILS</button>
      </div>
    );
  }
}

export default HomePage;
