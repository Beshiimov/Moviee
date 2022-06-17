import {combineReducers, legacy_createStore as createStore} from "redux";
import headerReducer from "./header-reducer";
import homePageReducer from "./homePage-reducer";

const reducers = combineReducers({headerReducer, homePageReducer});
const store = createStore(reducers);

window.store = store

export default store;