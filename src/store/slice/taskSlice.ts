import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ITask } from "@/types/task.types";
import { TASKS } from "@/components/tasks/tasks.data";

// Define a type for the slice state
interface ITaskState {
  items: ITask[];
}

// Define the initial state using that type
const initialState: ITaskState = {
  items: TASKS,
};

export const taskSlice = createSlice({
  name: "task",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.task.items;

export default taskSlice.reducer;
