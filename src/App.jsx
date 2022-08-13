import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateMission from "./Pages/CreateMission";
import ShiftDetail from "./Pages/ShiftDetail";
import ShiftList from "./Pages/ShiftList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShiftList />} />
        <Route path="shift-detail/:shiftId" element={<ShiftDetail />}></Route>
        <Route path="create-mission" element={<CreateMission />}></Route>
      </Routes>
    </div>
  );
}

export default App;
