import { IFilter, Ttask } from "@/component/types/Types";
import { RootState } from "@/Redux/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface initialState {
  task: Ttask[];
  FilterByPriority: IFilter;
}

const initialState: initialState = {
  task: [],
  FilterByPriority: {
    filter: "Medium",
  },
};

export const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Ttask>) => {
      const id = uuidv4();
      const taskData = {
        id,
        ...action.payload,
        completed: false,
      };
      state.task.push(taskData);
    },
  },
});

export const selectTask = (state: RootState) => state.todo.task;
export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
