"use client"

import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "../../lib/store"

export type NavState = {
  showNav: boolean
}

const initialState: NavState = {
  showNav: false,
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openNav: (state, action: PayloadAction<boolean>) => {
      state.showNav = action.payload
    },
    closeNav: (state, action: PayloadAction<boolean>) => {
      state.showNav = action.payload
    },
  },
})

export const { openNav, closeNav } = navSlice.actions
export const selectNavState = (state: RootState) => state.nav.showNav
export default navSlice.reducer
