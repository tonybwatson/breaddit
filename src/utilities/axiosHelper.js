import axios from 'axios';

export const axiosHelper = ({ 
    route,
    method,
    data = {},
    successMethod = r => console.log(r),
    failureMethod = e => console.log(e)
}) => {
    return axios({
        method,
        url: "https://breadditlaravel-tonybwatson324900.codeanyapp.com/api/v1/" + route,
        data
    })
        .then(res => successMethod(res))
        .catch(err => failureMethod(err))
}

export default axiosHelper;