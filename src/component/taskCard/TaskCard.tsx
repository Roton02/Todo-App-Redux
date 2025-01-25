import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Ttask } from "../types/Types";
import { cn } from "@/lib/utils";

type TaskCardProps = {
  task: Ttask; 
};
export default function TaskCard({task }:TaskCardProps) {
  return (
    <Card className="flex justify-between ">
      <div>
        <CardHeader>
          <CardTitle>
            <div className={cn('size-3 rounded-full ', {
              'bg-red-500 text-white': task.priority === 'High',
              'bg-blue-500 text-white': task.priority === 'Low',
              'bg-green-500 text-white': task.priority === 'Medium',
            })}>

            </div>
          </CardTitle>
          <CardDescription>{task.title}</CardDescription>
          <CardDescription>{task.description}</CardDescription>
        </CardHeader>
      </div>
      <div className="text-end">
        <CardHeader>
          <CardTitle className="flex  space-x-3 items-center ">
            <div>
              <Button >delete</Button>
            </div>
            <Checkbox />
          </CardTitle>
        </CardHeader>
      </div>
    </Card>
  );
}
