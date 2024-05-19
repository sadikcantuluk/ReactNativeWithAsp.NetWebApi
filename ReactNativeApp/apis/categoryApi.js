import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://33e8-176-238-215-43.ngrok-free.app/api/",
  }),
  endpoints: (builder) => ({
    GetAllCategory: builder.query({
      query: () => ({
        url: "Category",
        method: "GET",
      }),
    }),

    GetCategory: builder.query({
      query: (id) => ({
        url: `Category/${id}`,
        method: "GET",
      }),
    }),

    AddCategory: builder.mutation({
      query: (resultCategoryDto) => ({
        url: "Category",
        method: "POST",
        body: resultCategoryDto,
      }),
    }),

    RemoveCategory: builder.mutation({
      query: (categoryId) => ({
        url: `Category/${categoryId}`,
        method: "DELETE",
      }),
    }),

    UpdateCategory: builder.mutation({
      query: (model) => ({
        url: `Category/${model.categoryId}`,
        method: "PUT",
        body: model.resultCategoryDto,
      }),
    }),

    GetVehiclesByCategoryId: builder.query({
      query: (categoryId) => ({
        url: `Category/GetVehiclesByCategoryId/${categoryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetCategoryQuery,
  useRemoveCategoryMutation,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useGetVehiclesByCategoryIdQuery,
} = categoryApi;

export default categoryApi;
