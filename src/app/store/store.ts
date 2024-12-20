import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { navigationSlice } from "./features/navigation-slice";


export const store = configureStore({
    reducer : {
        navigation : navigationSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const AppSelector :TypedUseSelectorHook<RootState> = useSelector