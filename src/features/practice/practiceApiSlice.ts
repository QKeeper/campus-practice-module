import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPractice } from "../../models/IPractice";

export const practicesApi = createApi({
	reducerPath: "practicesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.pp.ssdk.dev" }),
	endpoints: (builder) => ({
		getPractices: builder.query<IPractice[], void>({
			query: () => `/practices`,
		}),
	}),
});

export const { useGetPracticesQuery } = practicesApi;
