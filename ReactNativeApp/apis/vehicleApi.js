import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://9394-5-24-205-182.ngrok-free.app/api/",
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

export const { useGetAllVehicleQuery } = vehicleApi;
export default vehicleApi;
