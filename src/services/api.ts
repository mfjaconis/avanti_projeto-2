import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../App";


const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.github.com/users",
	}),
	endpoints: (builder) => ({
		getUser: builder.query<User, string>({
			query: (username) => username, 
		}),
	}),
});

export const { useGetUserQuery } = api;

export default api;