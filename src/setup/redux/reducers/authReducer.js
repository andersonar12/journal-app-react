import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    auth: { uid: null, name: null },
  },
  reducers: {
    login: (state, action) => {
      state.auth.uid = action.payload.uid;
      state.auth.name = action.payload.displayName;
    },
    logout: (state) => {
      state.auth = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
