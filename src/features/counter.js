import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  counter:99
}

export const counterSlice = createSlice({
  name:"counter",
  initialState: {value: initValue},
  reducers: {
    add:(state,action) => {
      state.value.counter += 1 
    }
   
  }
})

export const {add} = counterSlice.actions;

export default counterSlice.reducer;