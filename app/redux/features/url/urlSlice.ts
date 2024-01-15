"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface UrlState {
  shortenedLinks: any;
}

const initialState: UrlState = {
  shortenedLinks: {},
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.shortenedLinks = action.payload;
    },
  },
});

export const { setData } = urlSlice.actions;

export default urlSlice.reducer;
