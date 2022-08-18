import axios from "axios";
import React, { useState, useEffect } from "react";
import AddMission from "../components/MissionCreation/AddMission";
import ShiftSummary from "../components/MissionCreation/ShiftSummary";
import NavBar from "../components/UI/Navbar";
import instanceAxiosBDD from "../api/indexBDD";

const CreateShift = () => {
  const [missionList, setMissionList] = useState([
    {
      missionTypeID: 1,
      quantity: "4",
      vins: "554, 443, 234, 1898",
      pickUp: "Rue de la paix",
      dropOff: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
      status: 1
    },
    {
      missionTypeID: 2,
      quantity: "4",
      vins: "554, 443, 234, 1898",
      pickUp: "Rue de la paix",
      dropOff: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
      status: 1
    },
    {
      missionTypeID: 3,
      quantity: "4",
      vins: "554, 443, 234, 1898",
      pickUp: "Rue de la paix",
      dropOff: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
      status: 1
    },
  ]);

  const [shiftInformation, setShiftInformation] = useState({
    shift_date: "",
    shift_dispatcher: "",
  });

  const [missionTypes, setMissionTypes] = useState("");

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
    let fullShiftInformation = { ...shiftInformation, missionList };
    console.log(fullShiftInformation);
    setShiftInformation({
      shift_date: "",
      shift_dispatcher: "",
    });
    setMissionList("");
    instanceAxiosBDD.post("/shifts.json", fullShiftInformation)

  };

  useEffect(() => {
    instanceAxiosBDD.get("/MissionTypes.json").then((response) => {
      setMissionTypes(response.data);
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 gap-4 content-center mx-auto py-8 sm:px-8 xl:px-0 md:grid-cols-2 md:gap-8 w-5/6 sm:w-3/4 xl:w-1/2">
        <AddMission onAdd={addMissionHanlder} missionTypes={missionTypes} />
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
