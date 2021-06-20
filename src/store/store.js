import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import todoReducer from "../todo/todoSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  }
});
