import { combineReducers } from "redux";

import FdnSlice from "../slice/fdnSlice";

export const reducers = combineReducers({
  [FdnSlice.name]: FdnSlice.reducer,
});