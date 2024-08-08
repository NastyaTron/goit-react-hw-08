import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "", number: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changeFilterNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilter, changeFilterNumber } = filtersSlice.actions;
export default filtersSlice.reducer;
