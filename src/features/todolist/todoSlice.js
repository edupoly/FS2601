import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: ["get breakfast", "goto home", "play cricket"],
};
export const todoSlice = createSlice({
  name: "todolistslice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
