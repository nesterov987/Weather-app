import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers";
const store = configureStore({
  reducer: {
    storeWeather: weatherSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
