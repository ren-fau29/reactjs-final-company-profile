// reducers/index.js
import { combineReducers } from "redux";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  notification: notificationReducer,
  // reducers lain di sini
});

export default rootReducer;
