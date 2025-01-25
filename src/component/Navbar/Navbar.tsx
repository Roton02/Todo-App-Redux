import { Link } from "react-router";
import { ModeToggle } from "../theme-provider/AddModeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Link to="/">Logo</Link>
      <div className="flex space-x-4">
        <Link to="/">User </Link>
        <Link to="/task">Tasks </Link>
      </div>
      <div><ModeToggle/></div>
    </div>
  );
}
