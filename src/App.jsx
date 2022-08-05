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
      <div className="grid grid-cols-1 gap-4 place-content-center max-w-screen-lg mx-auto p-8 xl:px-0 md:grid-cols-2 md:gap-8">
        <div className="auto-rows-auto gap-4 place-self-start w-full">
            <MissionHeader></MissionHeader>
            {missionList.length > 0 && (
              <div className="w-full">
                <MissionList missionList={missionList}></MissionList>
              </div>
            )}
        </div>
        <div className="">
          <AddMission onAdd={addMissionHanlder} />
        </div>
      </div>
    </>
  );
}

export default App;
