import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { practicesApi } from "../features/practice/practicesApiSlice";

const rootReducer = combineSlices({
	[practicesApi.reducerPath]: practicesApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(practicesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
