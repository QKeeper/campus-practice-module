import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const createAppSlice = buildCreateSlice({
	creators: { asyncThunk: asyncThunkCreator },
});
