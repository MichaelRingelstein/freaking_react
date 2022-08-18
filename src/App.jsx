import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateShift from "./pages/CreateShift";
import MissionAnswer from "./pages/MissionAnswer";
import ShiftDetail from "./pages/ShiftDetail";
import ShiftList from "./pages/ShiftList";

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
