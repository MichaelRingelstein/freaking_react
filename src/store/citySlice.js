import { createSlice } from "@reduxjs/toolkit";

//reducer
export const city = createSlice({
  name: "city",
  initialState: {},
  reducers: {
    setMissionTypes: (state, action) => {
        state.value = action.payload
  },
}})
