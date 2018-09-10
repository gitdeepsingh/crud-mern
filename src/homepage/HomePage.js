import React from 'react';
import './HomePage.css';
import InventoryComponent from '../inventory/InventoryComponent'

class HomePage extends React.Component {
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
