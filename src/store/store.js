import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

// const reduxMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = [thunk]
// const store = createStore(rootReducer,compose(applyMiddleware(...middleware),reduxMiddleware))
const store = createStore(rootReducer,compose(applyMiddleware(...middleware)))

    
export default store