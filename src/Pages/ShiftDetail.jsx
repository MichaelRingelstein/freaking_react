import React from "react";
import ShiftMissionList from "../components/MissionAnswer/ShiftMissionList";

const ShiftDetail = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 place-content-center mx-auto p-8 xl:px-0 max-w-lg">
        <p>Shift Detail Page</p>
        <ShiftMissionList
          shiftInformation={shiftInformation}
          missionList={missionList}
        ></ShiftMissionList>
      </div>
    </>
  );
};
export default ShiftDetail;
