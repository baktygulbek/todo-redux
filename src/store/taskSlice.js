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
      });
    },
    deleteTask: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice;
