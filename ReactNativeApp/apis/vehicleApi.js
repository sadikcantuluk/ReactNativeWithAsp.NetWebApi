import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://33e8-176-238-215-43.ngrok-free.app/api/",
  }),
  endpoints: (builder) => ({
    GetAllVehicle: builder.query({
      query: () => ({
        url: "Vehicle/GetAllVehicle",
        method: "GET",
      }),
    }),

    GetVehicle: builder.query({
      query: (vehicleId) => ({
        url: `Vehicle/GetVehicle/${vehicleId}`,
        method: "GET",
      }),
    }),

    AddVehicle: builder.mutation({
      query: (resultVehicleDto) => ({
        url: "Vehicle/AddVehicle",
        method: "POST",
        body: resultVehicleDto,
      }),
    }),

    RemoveVehicle: builder.mutation({
      query: (vehicleId) => ({
        url: `Vehicle/RemoveVehicle/${vehicleId}`,
        method: "DELETE",
      }),
    }),

    UpdateVehicle: builder.mutation({
      query: (model) => ({
        url: `Vehicle/UpdateVehicle/${model.vehicleId}`,
        method: "PUT",
        body: model.resultVehicleDto,
      }),
    }),
  }),
});
