import axios from 'axios';

export const postInventory = () => {
  axios({
    method: 'post',
    url: 'http://localhost:4200/inventory',
    data: {
      "code": 1,
      "prodName": "Custody",
      "stockCount": 11
    }
  });
}


// export const getUsers = () => {
//   axios({
//     method: 'post',
//     url: 'http://localhost:4200/users',
//     responseType: 'json'
//   }).then((res) => {
//     console.log('getUsers', res)
//   }, (err) => { console.warn('Unable to fetch') });
// }
