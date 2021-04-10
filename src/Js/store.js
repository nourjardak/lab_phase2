import {createStore  } from "redux";
import rootReducer from "./Reducers";


const devtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer,devtools)
export default store