import axios from 'axios';

export const addProduct = (prodDetails) => {
  axios({
    method: 'post',
    url: 'http://localhost:4200/addproduct',
    data: prodDetails
  });
}

export const getInventory = () => {
  axios({
    method: 'get',
    url: 'http://localhost:4200/inventory',
    responseType: 'json'
  }).then((res) => {
    console.log('getUsers', res)
  }, (err) => { console.warn('Unable to fetch') });
}
