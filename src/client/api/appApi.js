import axios from 'axios';

export const getWelcome = () => {
  axios({
    method: 'get',
    url: 'http://localhost:4200/',
    responseType: 'json'
  }).then((res) => {
    console.log('getWelcome', res)
  }, (err) => { console.warn('Unable to fetch') });
}

export const getUsers = () => {
  axios({
    method: 'get',
    url: 'http://localhost:4200/users',
    responseType: 'json'
  }).then((res) => {
    console.log('getUsers', res)
  }, (err) => { console.warn('Unable to fetch') });
}
