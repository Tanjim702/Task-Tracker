import request from "../../Axios/request";
const login_signup = async (link, data, type, history) => {

    try {
        const res = await request.post(link, data)
        if(type === 'login'){
            console.log(res.data)
            request.defaults.headers.common['authorization'] = res.data.token
            localStorage.setItem('token',JSON.stringify(res.data.token))
            history.push('/dashboard')
        }else if(type === 'signup'){
            console.log(res)
            history.push('/login')
        }
    } catch (error) {
        return history.push('/')
    }
}
export default login_signup