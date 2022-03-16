import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  is_login: false,
  product_cart: {},
  at: "",
  rt: "",
  headers: "",
  lastOrder: {},
  apiurl: "http://127.0.0.1:8000/api/v1/",
  cancel_reason: [],
  username: "",
  email: "",
  phone_number: "",
};

export const Reducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeLoginState: (state, action) => {
      state.is_login = action.payload;
    },
    updateProductCart: (state, action) => {
      state.product_cart[action.payload.prod_id] = action.payload.quantity;
    },
    deleteProductCart: (state) => {
      state.product_cart = [];
    },
    makeHeaders: (state) => {
      state.headers = {
        "Content-Type": "application/json",
        Authorization: "JWT " + state.at,
      };
    },
    updateAT: (state, action) => {
      state.at = action.payload;
    },
    updateRT: (state, action) => {
      state.rt = action.payload;
    },
    updateLastOrder: (state, action) => {
      state.lastOrder = action.payload;
    },
    updateCancelReason: (state, action) => {
      state.cancel_reason = action.payload;
    },
    updateName: (state, action) => {
      state.username = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone_number = action.payload;
    },
    // updateLoginINFO: (state, action) => {
    //   state.A
    // }
  },
});

// Action creators are generated for each case reducer function
export const {
  changeLoginState,
  updateProductCart,
  makeHeaders,
  updateAT,
  updateRT,
  updateLastOrder,
  updateCancelReason,
  deleteProductCart,
  updateName,
  updateEmail,
  updatePhone
} = Reducer.actions;

export default Reducer.reducer;
