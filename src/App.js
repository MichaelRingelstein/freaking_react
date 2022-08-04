import { useState } from "react";
import "./App.css";
import AddMission from "./components/AddMission/AddMission";
import MissionList from "./components/AddMission/MissionList";
import MissionHeader from "./components/AddMission/MissionHeader";

function App() {
  const [missionList, setMissionList] = useState([]);

  const addMissionHanlder = (...newMission) => {
    //console.log("Hello" + {...newMission})
    setMissionList((prevMissionList) => {
      return [...prevMissionList, newMission];
    });
    console.log(missionList);
  };

  return (
    <>
    <h1>Create dispatch missions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center px-16">
        <div className="w-min">
          <AddMission onAdd={addMissionHanlder} />
        </div>
        <div className="auto-rows-auto gap-4 place-self-start w-min">
            <MissionHeader></MissionHeader>
            {missionList.length > 0 && (
              <div>
                <MissionList missionList={missionList}></MissionList>
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default App;
