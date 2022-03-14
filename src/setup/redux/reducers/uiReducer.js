import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    msgError: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action["payload"];
    },
    setError: (state, action) => {
      state.msgError = action["payload"];
    },
    removeError: (state, action) => (state.msgError = null),
  },
});

export const { setLoading, setError, removeError } = uiSlice.actions;

export default uiSlice.reducer;
