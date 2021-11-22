import { createSlice } from "@reduxjs/toolkit";

export const bodySlice = createSlice({
  name: "body",
  initialState: {
    body: "quotation",
  },
  reducers: {
    SET_BODY: (state, action) => {
      state.body = action.payload;
    },
  },
});

export const { SET_BODY } = bodySlice.actions;
export const selectBody = (state) => state.body.body;

export default bodySlice.reducer;
