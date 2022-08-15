import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateShift from "./Pages/CreateShift";
import ResponsePage from "./Pages/ResponsePage";
import ShiftDetail from "./Pages/ShiftDetail";
import ShiftList from "./Pages/ShiftList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShiftList />} />
        <Route path="shift/:shiftId" element={<ShiftDetail />}></Route>
        <Route path="create-mission" element={<CreateShift />}></Route>
        <Route path="answer-mission/:missionId" element={<ResponsePage />} />
      </Routes>
    </div>
  );
}

export default App;
