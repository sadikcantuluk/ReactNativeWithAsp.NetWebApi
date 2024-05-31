import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b031-5-24-205-182.ngrok-free.app/api/",
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
