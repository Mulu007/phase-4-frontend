import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null
      }
    },
  });
  
  export const { login, logout } = loginSlice.actions;

  export const selectUser = (state) => state.user.user
  
  export default loginSlice.reducer;