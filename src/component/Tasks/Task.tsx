
import TaskCard from "../taskCard/TaskCard";
import { useAppSelector } from "@/Redux/app/hook";
import { selectTask } from "@/Redux/featured/Todo/todoSlice";
import { AddTask } from "./addTaskModal";
import { Ttask } from "../types/Types";

export default function Task() {
  const tasks = useAppSelector(selectTask);
  return (
    <div className="mx-32">
      <div className="text-end py-4 ">
        <AddTask/>
      </div>
      <div className="space-y-3">
      {tasks.map((task: Ttask, ) => (
        <TaskCard key={task.id} task={task} />
      ))}
      </div>
    </div>
  );
}
