"use client"

import navReducer from "@/features/nav/nav"
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
