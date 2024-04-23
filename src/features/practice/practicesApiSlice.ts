import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPractice } from "../../models/IPractice";
import { IReview } from "../../models/IReview";

export const practicesApi = createApi({
	reducerPath: "practicesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.pp.ssdk.dev" }),
	endpoints: (builder) => ({
		getPractices: builder.query<IPractice[], void>({
			query: () => `/practices`,
		}),
		getReviews: builder.query<IReview[], void>({
			query: () => `/reviews`,
		}),
	}),
});

export const { useGetPracticesQuery, useGetReviewsQuery } = practicesApi;
