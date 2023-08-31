import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    todo: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todo.push({
        id: Math.random(),
        name: action.payload.title,
        date: action.payload.date,
        complated: false,
      });
    },
    deleteTask: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload.id);
    },
    checkboxTask: (state, action) => {
      state.todo = state.todo.map((el) => {
        if (el.id === action.payload.id) {
          el.complated = !el.complated
        }
        return el
      });
    },
  },
});

export const { addTask, deleteTask, checkboxTask } = taskSlice.actions;
export default taskSlice;
