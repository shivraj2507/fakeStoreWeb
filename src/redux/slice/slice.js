import { createSlice } from "@reduxjs/toolkit";

const initialstate = { value: 0 };

const projectSlice = createSlice({
  name: "project",
  initialstate,
  reducers: {
    addData: (state, actions) => (state.value = actions.payload),
    increment: (state) => {
      state.value += 1;
    },
    decremnet: (state) => {
      state.value -= 1;
    },
  },
});

export const { addData, decremnet, increment } = projectSlice.actions;
export default projectSlice.reducer;
