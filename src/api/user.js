import axios from 'axios';

export function login(user) {
  return axios.post(process.env.VUE_APP_BASE_API + '/user/login',user);
}

export function register(user) {
  return axios.post(process.env.VUE_APP_BASE_API + '/user/register',user);
}

export function rank(id,score,time) {
  return axios.get(process.env.VUE_APP_BASE_API + `/rank/${id}/${score}/${time}`);
}