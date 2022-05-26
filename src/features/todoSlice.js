import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos_ar:[
    {name:"go to run",time:"08:00",id:1},
    {name:"go to eat breakfeast",time:"09:00",id:2},
    {name:"go to get kid from garden",time:"11:10",id:3}
  ]
}


export const todoSlice = createSlice({
  name:"todos",
  initialState: initState,
  reducers:{
    addTodo:(state,action) => {
      state.todos_ar.push(action.payload.item);
    }
  }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;