import React from "react";
import AddMission from "../components/MissionCreation/AddMission";
import instanceAxiosBDD from "../api/indexBDD";
import { useEffect, useState } from "react";
import NavBar from "../components/UI/Navbar";

const NewMissionAnswer = () => {
  const [missionTypes, setMissionTypes] = useState("");

  useEffect(() => {
    instanceAxiosBDD.get("/MissionTypes.json").then((response) => {
      setMissionTypes(response.data);
    });
  }, []);

  const newMissionHandler = (...newMission) => {
    console.log(...newMission);
  };

  return (
    <>
      <div className="flex justify-center gap-4 py-2 ">
        <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 inline-flex justify-center flex-col">

        <AddMission onAdd={newMissionHandler} missionTypes={missionTypes} />
        </div>
      </div>
    </>
  );
};
export default NewMissionAnswer;
