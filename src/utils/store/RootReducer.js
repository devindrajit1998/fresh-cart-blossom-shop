import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import ProfileSlice from "../slices/ProfileSlice";

export const RootReducer = combineReducers({
  auth: AuthSlice,
  profile: ProfileSlice,
});
