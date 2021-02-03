const init = {
    isAuthenticated:true,
    user:{},
    error:{},
}
const authReducer = (state=init,action)=>{
    switch (action.type) {
        case "SET_USER":
            return {...state,
                    isAuthenticated:true,
                    user:action.payload}
        case "CREATE_USER":
            return {isAuthenticated:false,user:{},err:{}}
        case "LOGIN_USER":
            return {
                isAuthenticated:true,
                user:action.payload.user,
                error:{}
            }
        case "LOGOUT_USER":
            return {
                isAuthenticated:false,
                user:{},
                error:{}
            }        
        default:
            return state
    }
}

export default authReducer