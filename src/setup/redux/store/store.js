import { configureStore } from "@reduxjs/toolkit";
import authReducer from "setup/redux/reducers/authReducer.js";
import uiReducer from "../reducers/uiReducer.js";

export default configureStore({
  reducer: { auth: authReducer, ui: uiReducer },
});
