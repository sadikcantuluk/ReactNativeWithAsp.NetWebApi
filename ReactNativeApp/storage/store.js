import { configureStore } from "@reduxjs/toolkit";
import categoryApi from "../apis/categoryApi";
import { vehicleApi } from "../apis/vehicleApi";
import vehicleReducer from "./redux/vehicleSlice";
import categoryReducer from "./redux/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    vahicle: vehicleReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      vehicleApi.middleware
    ),
});
