import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
  vehicleId: "",
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getAllVehicle: (state, action) => {
      state.vehicles = action.payload;
    },
  },
});

export const { getAllVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
