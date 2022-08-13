import React from "react";
import { useParams } from "react-router-dom";
import ShiftMissionList from "../components/MissionAnswer/ShiftMissionList";

const shiftData = {
  shift_date: "12/08/2021 23:00:00",
  shift_dispatcher: "Karamjeet",
  mission_list: [
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
      comment: " ces scooters",
    },
  ],
};

const ShiftDetail = () => {
  const params = useParams();
  console.log(params.shiftId);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 place-content-center mx-auto p-8 xl:px-0 max-w-lg">
        <ShiftMissionList shiftInformation={shiftData}></ShiftMissionList>
      </div>
    </>
  );
};
export default ShiftDetail;
