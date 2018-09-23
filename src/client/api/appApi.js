import axios from 'axios';


export const addProduct = (prodDetails) => {
  axios({
    method: 'post',
    url: 'http://localhost:4200/addproduct',
    data: prodDetails
  });
}


