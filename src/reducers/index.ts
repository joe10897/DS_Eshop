import { combineReducers } from "redux";
import AppReducer from "../containers/App/reducer";
import DashboardReducer from "../containers/Dashboard/reducer";

export default combineReducers({
  AppReducer,
  DashboardReducer,
});
