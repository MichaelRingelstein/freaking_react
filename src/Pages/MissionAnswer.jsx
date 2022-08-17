import React from "react";
import AnswerForm from "../components/AnswerForm/AnswerForm";
import NavBar from "../components/UI/Navbar";
import ProgressBar from "../components/UI/ProgressBar";

const mission = {
  id: 1,
  shift_id: 1,
  missionType: { id: 4, name: "Impoundment" },
  quantity: "4",
  vins: "554, 443",
  pickUp: "Rue de la paix",
  dropOff: "Rue de la guerre",
  fleet: "dispatch",
  comment: "déplacer ces scooters",
  status: 1,
};

const MissionAnswer = () => {
  return (
    <>
      <NavBar></NavBar>
      {/* <ProgressBar></ProgressBar> */}
      <div className="flex justify-center gap-4 py-8 sm:px-8 xl:px-0">
        <AnswerForm mission={mission}></AnswerForm>
      </div>
    </>
  );
};
export default MissionAnswer;
