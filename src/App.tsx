import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <Navbar />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
