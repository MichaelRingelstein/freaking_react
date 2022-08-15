import React, { useState } from "react";
import AddMission from "../components/MissionCreation/AddMission";
import ShiftSummary from "../components/MissionCreation/ShiftSummary";
import NavBar from "../components/UI/Navbar";

const CreateShift = () => {
  const [missionList, setMissionList] = useState([
    {
      missionType: { id: 1, name: "Rebalancing" },
      quantity: "4",
      vins: "554, 443, 234, 1898",
      pickUp: "Rue de la paix",
      dropOff: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
    },
    {
      missionType: { id: 2, name: "blabla" },
      quantity: "4",
      vins: "554, 443, 234, 1898",
      pickUp: "Rue de la paix",
      dropOff: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
    },
    {
      missionType: { id: 3, name: "zefr" },
      quantity: "4",
      vins: "554, 443, 234, 1898",
      pickUp: "Rue de la paix",
      dropOff: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
    },
  ]);

  const [shiftInformation, setShiftInformation] = useState({
    shift_date: "",
    shift_dispatcher: "",
  });

  const deleteMissionHandler = (id) => {
    console.log("Deletion");
    let temp = [...missionList];
    temp.pop(id);
    setMissionList(temp);
  };

  const addMissionHanlder = (...newMission) => {
    setMissionList((prevMissionList) => {
      return [...prevMissionList, ...newMission];
    });
    console.log(missionList);
  };

  const shiftInformationHandler = (...shiftInformation) => {
    console.log(...shiftInformation);
    setShiftInformation(...shiftInformation);
  };

  const sendMissionHandler = () => {
    let missionAggregated = { ...shiftInformation, missionList };
    console.log(missionAggregated);
    setShiftInformation({
      shift_date: "",
      shift_dispatcher: "",
    });
    setMissionList("");
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 gap-4 content-center mx-auto py-8 px-4 xl:px-0 md:grid-cols-2 md:gap-8 w-3/4 xl:w-2/3">
        <AddMission onAdd={addMissionHanlder} />
        <ShiftSummary
          missionList={missionList}
          deleteHandler={deleteMissionHandler}
          shiftInformationHandler={shiftInformationHandler}
          shiftInformation={shiftInformation}
          sendMissionHandler={sendMissionHandler}
        />
      </div>
    </>
  );
};
export default CreateShift;
