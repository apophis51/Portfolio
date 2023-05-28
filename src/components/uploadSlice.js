import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  gptText: 'Loading...',
};

export const fetchGPT = createAsyncThunk("fetchinGPT", async (formData) => {
print("starting fetch")
const text =   axios.post("/upload", formData);
    return text;
});


export const GptSlice = createSlice({
  name: "gptText",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGPT.fulfilled, (state, action) => {

      state.gptText = action.payload;
    })
  },
});

// export const selectApplications = (state) => {
// return state.applications;
// };

export default GptSlice.reducer;
