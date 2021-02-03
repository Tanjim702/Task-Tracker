import axios from "axios";

const request = axios.create({
    baseURL:'http://localhost:3030/'
})
const token = localStorage.getItem('token')
if(token){
    request.defaults.headers.common['authorization'] = token
}

export default request
