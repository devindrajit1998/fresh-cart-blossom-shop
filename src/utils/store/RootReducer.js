import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import ProfileSlice from "../slices/ProfileSlice";
import GeneralSlice from "../slices/GeneralSlice";

export const RootReducer = combineReducers({
  auth: AuthSlice,
  profile: ProfileSlice,
  general: GeneralSlice,
});
