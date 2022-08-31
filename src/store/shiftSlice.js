import { createSlice } from "@reduxjs/toolkit";

//reducer
export const shift = createSlice({
  name: "shift",
  initialState: {},
  reducers: {
    setSelectedShift: (state, action) => {
        state = action.payload
  },
}})
