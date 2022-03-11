import {createStore , applyMiddleware  } from 'redux' ;
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

 export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) ;

// export default store ; 