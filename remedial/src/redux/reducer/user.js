import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const ToolCookies = new Cookies();

let getStatusAuth = ToolCookies.get("status_login");
let getDataAuth = ToolCookies.get("user_data");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    authStatus: getStatusAuth ? true : false,
    userData: getDataAuth ? getDataAuth : null,
    token: null, // duration 1 day
    refreshToken: "", // duration 1 month

    // userData: null,
    // token: null,
    // authStatus: false,
  },
  reducers: {
    setAuthStatus: (state, action) => {
      state.authStatus += action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthStatus, setUserData, setToken, setRefreshToken } = userSlice.actions;

export default userSlice.reducer;
