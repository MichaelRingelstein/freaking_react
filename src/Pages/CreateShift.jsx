import axios from "axios";
import React, { useState, useEffect } from "react";
import AddMission from "../components/MissionCreation/AddMission";
import ShiftSummary from "../components/MissionCreation/ShiftSummary";
import NavBar from "../components/UI/Navbar";
import instanceAxiosBDD from "../api/indexBDD";
import { supabase } from "../api/client";

const CreateShift = () => {
  const [missionList, setMissionList] = useState([
    {
      shift_id: "",
      mission_type: 1,
      quantity: "4",
      scooters: "554, 443, 234, 1898",
      pickup_address: "rue 1",
      dropoff_address: "rue 2",
      comment: "ras",
      fleet: "prod",
    },
    {
      shift_id: "",
      mission_type: 2,
      quantity: "4",
      scooters: "554, 443, 234, 1898",
      pickup_address: "rue 3",
      dropoff_address: "rue 4",
      comment: "ras",
      fleet: "prod",
    },
    {
      shift_id: "",
      mission_type: 3,
      quantity: "4",
      scooters: "554, 443, 234, 1898",
      pickup_address: "rue 5",
      dropoff_address: "rue 6",
      comment: "ras",
      fleet: "prod",
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
    //console.log(missionList);
  };

  const shiftInformationHandler = (...shiftInformation) => {
    //console.log(...shiftInformation);
    setShiftInformation(...shiftInformation);
  };

  const sendMissionHandler = () => {
    //let fullShiftInformation = { ...shiftInformation, missionList };
    //console.log(fullShiftInformation);
    //instanceAxiosBDD.post("/shifts.json", fullShiftInformation)
    postShift();
    setMissionList("");
    setShiftInformation({
      shift_date: "",
      shift_dispatcher: "",
    });
  };

  // useEffect(() => {
  //   instanceAxiosBDD.get("/MissionTypes.json").then((response) => {
  //     setMissionTypes(response.data);
  //   });
  // }, []);
  const postShift = async () => {
    const { data, error } = await supabase.from("shifts").upsert({
      start_date: shiftInformation.shift_date,
      assigned_to: shiftInformation.shift_dispatcher,
    });
    console.log("callback from supabase: ", data);
    missionList.map((mission) => {
      postMission(mission, data[0].id);
    });
  };
  const postMission = async (mission, id_shift) => {
    console.log("mission to add: ", mission)
    const { data, error } = await supabase.from("missions").upsert({
      shift_id: id_shift,
      mission_type: mission.mission_type,
      quantity: mission.quantity,
      scooters: mission.scooters,
      pickup_address: mission.pickup_address,
      dropoff_address: mission.dropoff_address,
      fleet: mission.fleet,
      comment: mission.comment
    });
    console.log("mission added: ", data);
    console.log("erreur: ", error);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 gap-4 content-center mx-auto py-8 sm:px-8 xl:px-0 md:grid-cols-2 md:gap-8 w-5/6 sm:w-3/4 xl:w-1/2">
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
