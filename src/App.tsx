import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { EventList } from "@/components/event-list";
import { Login } from "./components/login";
import { CoursePicker } from "./CoursePicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4">
        {/* <Login /> */}
        <CoursePicker />
      </div>
    </>
  );
}

export default App;
