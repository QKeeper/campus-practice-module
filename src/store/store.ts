import { combineSlices, configureStore } from "@reduxjs/toolkit";

/* Тут будут слайсы */
const rootReducer = combineSlices();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
