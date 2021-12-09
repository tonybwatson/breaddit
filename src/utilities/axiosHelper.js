import axios from 'axios';

export const axiosHelper = ({
  route,
  method,
  data = {},
  successMethod = r => console.log(r),
  failureMethod = e => console.log(e),
  // headers,
}) => {
  return axios({
    method,
    url: "https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/" + route,
    data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Credentials': true,
      'Authorization': 'Bearer ' + token
    },
  })
    .then(res => successMethod(res))
    .catch(err => failureMethod(err))
}
const token = localStorage.getItem('token');

export default axiosHelper;