
import TaskCard from "../taskCard/TaskCard";
import { useAppDispatch, useAppSelector } from "@/Redux/app/hook";
import { filterTask, selectTask } from "@/Redux/featured/Todo/todoSlice";
import { AddTask } from "./addTaskModal";
import { Ttask } from "../types/Types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Task() {
  const dispacth = useAppDispatch()
  const tasks = useAppSelector(selectTask);
  return (
    <div className="mx-32">
      <div className="flex justify-between items-center p-3">
      <h2>Task</h2>
      <div className=" flex justify-end space-x-4  ">
      <Tabs defaultValue="all" className="">
  <TabsList>
    <TabsTrigger onClick={()=>dispacth(filterTask("all"))} value="all">All</TabsTrigger>
    <TabsTrigger onClick={()=>dispacth(filterTask("Low"))} value="low">Low</TabsTrigger>
    <TabsTrigger onClick={()=>dispacth(filterTask("Medium"))} value="medium">Medium</TabsTrigger>
    <TabsTrigger onClick={()=>dispacth(filterTask("High"))} value="high">High</TabsTrigger>
  </TabsList>
 
</Tabs>
        <AddTask/>
      </div>
      </div>
      <div className="space-y-3">
      {tasks.map((task: Ttask, ) => (
        <TaskCard key={task.id} task={task} />
      ))}
      </div>
    </div>
  );
}
