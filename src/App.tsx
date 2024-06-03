import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Button } from "@/components/ui/button";
import { EventList } from "@/components/event-list";
import { Login } from "./components/login";
import { CoursePicker } from "./CoursePicker";
import { Navbar } from "@/components/navbar";
import { MainPage } from "@/components/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <MainPage />
      {/* <div className="w-3/4 m-auto">
        <Login />
        <CoursePicker />
      </div> */}
    </>
  );
}

export default App;
