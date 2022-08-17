import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateShift from "./Pages/CreateShift";
import MissionAnswer from "./Pages/MissionAnswer";
import ShiftDetail from "./Pages/ShiftDetail";
import ShiftList from "./Pages/ShiftList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShiftList />} />
        <Route path="shift/:shiftId" element={<ShiftDetail />}></Route>
        <Route path="create-shift" element={<CreateShift />}></Route>
        <Route path="answer-mission/:missionId" element={<MissionAnswer />} />
      </Routes>
    </div>
  );
}

export default App;
