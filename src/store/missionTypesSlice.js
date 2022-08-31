import { createSlice } from "@reduxjs/toolkit";

//reducer
export const missionTypes = createSlice({
  name: "missionTypes",
  initialState: {},
  reducers: {
    setMissionTypes: (state, action) => {
        state.value = action.payload
  },
}})
