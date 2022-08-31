import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../api/client";
import AcceptMissionForm from "../components/AnswerForm/AcceptMissionForm";
import RefuseMissionForm from "../components/AnswerForm/RefuseMissionForm";
import ShiftInformation from "../components/AnswerForm/ShiftInformation";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import NavBar from "../components/UI/Navbar";
import ProgressBar from "../components/UI/ProgressBar";

//avoir cette donnée en storage global
// const mission = {
//   id: 1,
//   shift_id: 1,
//   missionType: { id: 4, name: "Impoundment" },
//   quantity: "4",
//   vins: "554, 443",
//   pickUp: "Rue de la paix",
//   dropOff: "Rue de la guerre",
//   fleet: "dispatch",
//   comment: "déplacer ces scooters",
//   status: 1,
// };

const MissionAnswer = () => {
  
  const [isMissionAccepted, setIsMissionAccepted] = useState(null);
  const [mission, setMission] = useState();

  const params = useParams();

  const handleMissionRefused = () => {
    setIsMissionAccepted(false);
  };
  const handleMissionAccepted = () => {
    setIsMissionAccepted(true);
  };

  const fetchMission = async () => {
    const { data, error } = await supabase
      .from("missions")
      .select()
      .eq("id", params.missionId);
    console.log("mission returned : ", data);
    setMission(data[0]);
  };
  useEffect(() => {
    fetchMission();
  }, []);

  const choiceComponent = (
    <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 justify-center self-center flex-col">
      <Card className="bg-white ">
        <div className="flex flex-col self-center justify-center gap-4 p-6">
          Do you accept the mission ?
          <div className="flex flex-row justify-around">
            <Button style="success" onClick={handleMissionAccepted}>
              {" "}
              YES{" "}
            </Button>
            <Button style="danger" onClick={handleMissionRefused}>
              {" "}
              NO{" "}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

 const answerMissionHandler = (submission) => {
  console.log(submission)
  //setAnswer((prev) => {return {...prev, ...submission}})
 }


  const renderSwitch = () => {
    switch (isMissionAccepted) {
      case true:
        return <AcceptMissionForm mission={mission} onSubmit={answerMissionHandler}></AcceptMissionForm>;
      case false:
        return <RefuseMissionForm mission={mission} onSubmit={answerMissionHandler}></RefuseMissionForm>;
      default:
        return choiceComponent;
    }
  };
  return (
    <>
      <NavBar></NavBar>
      {/* <ProgressBar></ProgressBar> */}
      <div className="flex flex-col justify-center gap-4 py-8 sm:px-8 xl:px-0">
        {mission && <>
        <ShiftInformation mission={mission}></ShiftInformation>
        {renderSwitch()}
        </>
        }
      </div>
    </>
  );
};
export default MissionAnswer;
