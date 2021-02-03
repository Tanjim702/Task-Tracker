import request from "../../Axios/request";
// import { toggleAuthHeader } from "../../utils";
export const loadTransactions=()=>(dispatch)=>{
    request.get('/transactions/allTransactions')
        .then(res=>{
            dispatch({
                type:'LOAD_TRANSACTIONS',
                payload:{
                    transactions:res.data.data
                }
            })
        })
        .catch(err=>console.log(err))
}

export const createNew =(data,history)=>{
    return (dispatch)=>{
        request.post('/transactions/createTransaction',data)
            .then((res)=>{
                // console.table(res.data.data)
                dispatch({
                    type:'CREATE_NEW'
                })
                history.push('/dashboard')
            })
            .catch(err=>{
                console.log(err)
            })
    }
}
export const deleteTransaction =(id,incomeType)=>{
    return (dispatch)=>{
        console.log(id,incomeType)
        request.delete(`/transactions/delete/${id}`)
            .then(()=>{
                dispatch({
                    type:'DELETE_TRANSACTION',
                    payload:{id,incomeType}
                })
            })
    }
}