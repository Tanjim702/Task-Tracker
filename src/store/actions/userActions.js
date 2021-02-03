import request from "../../Axios/request";
import { toggleAuthHeader } from "../../utils";
import jwtDecode from "jwt-decode";
export const login =(link,data,history)=>{
    return (dispatch)=>{
        request.post(link,data)
            .then(res=>{
                const token = res.data.token
                toggleAuthHeader('login',token)
                const decode = jwtDecode(token)
                dispatch({
                    type:'LOGIN_USER',
                    payload:{
                        user:decode
                    }
                })
                history.push('/')
            })
            .catch(err=>{
                console.error(err);
            })
    }
}
export const logout = (history)=>{
    return (dispatch)=>{
        toggleAuthHeader('logout')
        dispatch({
            type:'LOGOUT_USER'
        })
        history.push('/login')
    }
}