import React from 'react';
import './HomePage.css';
import * as appApi from '../api/appApi';
import AddProductComponent from '../addProduct/AddProductComponent';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {}
  };
  componentDidMount() {
    appApi.getInventory();
  }

  render() {
    return (
      <div className="">
        Dashboard Page
        <AddProductComponent />
      </div>
    );
  }
}

export default HomePage;
