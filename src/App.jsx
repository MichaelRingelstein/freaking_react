import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { supabase } from "./api/client";
import "./App.css";
import CreateShift from "./pages/CreateShift";
import MissionAnswer from "./pages/MissionAnswer";
import NewMissionAnswer from "./pages/NewMissionAnswer";
import ShiftDetail from "./pages/ShiftDetail";
import ShiftList from "./pages/ShiftList";

function App() {
  const path = useLocation().pathname;
  console.log(path);
  const dispatch = useDispatch()


  const fetchMissionTypes = async () => {
    const { data, error } = await supabase
      .from("mission_types_conf")
      .select("id, label");
    // setMissionTypes(data);
    dispatch({
      type: "missionTypes/setMissionTypes",
      payload: data
    })
    console.log("supabase data : ", data);
  };

  useEffect(() => {
    fetchMissionTypes();
  }, []);

  return (

    <div>
      <Routes>
        <Route path="/" element={<ShiftList />} />
        <Route path="shift/:shiftId/" element={<ShiftDetail />}>
          <Route path="add-mission" element={<NewMissionAnswer />}></Route>
        </Route>
        <Route path="create-shift" element={<CreateShift />} />
        <Route path="answer-mission/:missionId" element={<MissionAnswer />} />
      </Routes>
    </div>

  );
}

export default App;
