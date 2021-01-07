/**
 * DO NOT REMOVE/RNAME THE [TREASURE_MAP_INJECT_*] if you intend on using `treasure-map` to create new features
 */
import { combineReducers } from "redux";
 import unicorns from "./unicorns/unicorns.reducer"; 

// [TREASURE_MAP_INJECT_IMPORT]


/**
 * All of the example feature (login, signup, myaccount) reducers should be added here
 * this way when these are imported into the main app, they will be namespaced under User_App in the redux store
 */
const appReducer = combineReducers({
    unicorns, 
  // [TREASURE_MAP_INJECT_REDUCER]
});

export default  appReducer;
