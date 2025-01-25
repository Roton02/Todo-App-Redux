import App from "@/App";
import Task from "@/component/Tasks/Task";
import User from "@/component/User/User";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <User />,
      },
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);

export default router;
