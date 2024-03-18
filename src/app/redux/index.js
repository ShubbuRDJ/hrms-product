import { combineReducers } from "redux";
import { dashboardReducer } from "./Reducer/dashboardReducer_SA";

export const reducers = combineReducers({
dashboard:dashboardReducer,
});