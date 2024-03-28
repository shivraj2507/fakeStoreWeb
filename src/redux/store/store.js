import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../slice/slice";
export const store = configureStore({
  reducer: {
    project: projectSlice, 
  },
});
