import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./App.css";
import ShiftMissionList from "./components/MissionAnswer/ShiftMissionList";
import Button from "./components/UI/Button";

function App() {
  const items = [
    { id: 1, name: "test" },
    { id: 2, name: "test" },
  ];

  return (
    <>
      <div className="flex justify-center">
        <ul role="list" className="space-y-3 w-3/4 lg:w-1/2">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow overflow-hidden rounded-md px-6 py-4"
            >
              {/* Your content */}
            </li>
          ))}
        </ul>
      </div>
      <Button>
        <NavLink to="create-mission">Créer une mission</NavLink>
      </Button>
    </>
  );
}

export default App;
