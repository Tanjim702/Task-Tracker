const init = {
    transactions: {},
    isLoading: true,
    err: false,
}
const transactionReducer = (state = init, action) => {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload.transactions,
                isLoading: false
            }
        case "CREATE_NEW":
            return state
        case "DELETE_TRANSACTION":
            const newSet = state.transactions[`${action.payload.incomeType}`].filter(trans => trans._id !== action.payload.id)
            return {
                ...state,
                transactions: {
                    ...state.transactions,
                    [action.payload.incomeType]: newSet
                }
            }
        default:
            return state
    }
}
export default transactionReducer