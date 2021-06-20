import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState:[{name : "asdas", desc: "aacas"}],
  reducers: {
    saveTodo: function (state, action) {
      //console.log(state);

      console.log(state.todos);
      state.push(action.payload);
      console.log(action);
    },
    removeTodo: function (state, action) {
      console.log(state);
    }
  }
});

export const { saveTodo, removeTodo } = todoSlice.actions;
export const todoList = (state) => state.todos;
export default todoSlice.reducer;
