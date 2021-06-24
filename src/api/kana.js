import axios from 'axios';

export function getKanaList() {
  return axios.get(process.env.VUE_APP_BASE_API + '/kanas');
}
