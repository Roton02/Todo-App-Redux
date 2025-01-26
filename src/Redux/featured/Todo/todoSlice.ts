import { IFilter, Ttask } from "@/component/types/Types";
import { RootState } from "@/Redux/app/store";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface initialState {
  task: Ttask[];
  FilterByPriority: IFilter;
}

const initialState: initialState = {
  task: [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      priority: "Low",
      duoDate: new Date("2022-01-01"),
    },
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      priority: "High",
      duoDate: new Date("2022-01-01"),
    },
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      priority: "Medium",
      duoDate: new Date("2022-01-01"),
    },
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      priority: "High",
      duoDate: new Date("2022-01-01"),
    },
    // Add more tasks here.
  ],
  FilterByPriority: {
    filter: "all",
  },
};

export const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Ttask>) => {
      const id = nanoid();
      const taskData = {
        id,
        ...action.payload,
        completed: false,
      };
      state.task.push(taskData);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    isComplete: (state, action: PayloadAction<string>) => {
      state.task.forEach((task) =>
        task.id === action.payload ? (task.completed = !task.completed) : task
      );
    },
    filterTask: (
      state,
      action: PayloadAction<"all" | "Low" | "Medium" | "High">
    ) => {
      state.FilterByPriority.filter = action.payload;
    },
  },
});

// export const selectFilter = (state : RootState)=> state.

export const selectTask = (state: RootState) => {
  const filter = state.todo.FilterByPriority.filter;
  if (filter === "Low") {
    return state.todo.task.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.task.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.task.filter((task) => task.priority === "High");
  } else {
    return state.todo.task;
  }
};

export const { addTask, deleteTask, isComplete, filterTask } =
  todoSlice.actions;
export default todoSlice.reducer;
