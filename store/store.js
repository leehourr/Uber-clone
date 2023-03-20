import navSlice from "./navSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});
