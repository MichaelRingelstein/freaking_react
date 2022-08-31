import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import ShiftMissionList from "../components/ShiftDetail/ShiftMissionList";
import instanceAxios from "../api";
import NavBar from "../components/UI/Navbar";
import CircularButton from "../components/UI/CircularButton";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
import { supabase } from "../api/client";
import Card from "../components/UI/Card";
import { translateShiftStatus } from "../hooks/translateStatus";
import ExtraMissionModal from "../components/ShiftDetail/ExtraMissionModal";

const shiftsDummyData = {
  id: 1,
  start_date: "2022-05-10 21:00:00",
  assigned_to: "Karamjeet",
  status: 1,
};

const missionsDummyData = {
  mission_list: [
    {
      id: 1,
      shift_id: 1,
      mission_type: 1,
      quantity: "4",
      scooters: "554, 443, 234, 1898",
      pisckup_address: "Rue de la paix",
      dropoff_address: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
      status: 1,
    },
    {
      id: 2,
      shift_id: 1,
      mission_type: 1,
      quantity: "4",
      scooters: "554, 443, 234, 1898",
      pisckup_address: "Rue de la paix",
      dropoff_address: "Rue de la guerre",
      fleet: "dispatch",
      comment: "déplacer ces scooters",
      status: 2,
    },
    {
      id: 3,
      shift_id: 1,
      mission_type: 1,
      quantity: "4",
      scooters: "554, 443, 234, 1898",
      pisckup_address: "Rue de la paix",
      dropoff_address: "Rue de la guerre",
      fleet: "dispatch",
      comment: " ces scooters",
      status: 1,
    },
  ],
};

//TODO récupérer données du shift + les afficher + binder la cloture de shift avec le status du shift
const ShiftDetail = (props) => {
  const params = useParams();
  console.log(params.shiftId);
  console.log("start rendering");
  //const [missions, setMissions] = useState([]);
  const [missions, setMissions] = useState();
  const [shiftData, setShiftData] = useState();
  const [isAddingMission, setIsAddingMission] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // useEffect(() => {
  //   instanceAxios.get("missions.json").then((response) => {
  //     setMissions(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   instanceAxios.get("shifts.json").then((response) => {
  //     response.data.map((shift, index) => {
  //       if (shift.id == params.shiftId) {
  //         console.log(shift);
  //         setShiftData(shift);
  //       }
  //     });
  //   });
  // }, []);

  const addMissionHandler = () => {
    setIsButtonPressed(true);
  };

  const confirmHandler = () => {
    setIsAddingMission(true);
    return "blabla";
  };

  const cancelHandler = () => {
    setIsAddingMission(false);
    setIsButtonPressed(false)
  };
  console.log(missions);
  console.log(shiftData);

  const fetchMissions = async () => {
    const { data, error } = await supabase
      .from("missions")
      .select()
      .eq("shift_id", params.shiftId);
    console.log("missions returned : ", data);
    setMissions(data);
  };
  const fetchShift = async () => {
    const { data, error } = await supabase
      .from("shifts")
      .select()
      .eq("id", params.shiftId);
    console.log("shift returned : ", data);
    setShiftData(data);
  };
  useEffect(() => {
    fetchMissions();
    fetchShift();
  }, []);

  return (
    <>
      <NavBar></NavBar>

      <div className="flex justify-center flex-col items-center">
        <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2">
          <div className="py-8">
            <Card className="bg-blue-500">
              <div className="py-5 px-4 flex flex-col gap-2 text-white">
                {shiftData && (
                  <>
                    <h1 className="text-2xl font-bold leading-6  ">
                      {shiftData[0].assigned_to}
                    </h1>
                    <p className="text-white">
                      {shiftData[0].start_date}
                    </p>
                    <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full w-fit text-xs md:text:sm font-medium ${
                          translateShiftStatus(shiftData[0].status).style
                        }`}
                      >
                        {translateShiftStatus(shiftData[0].status).label}
                      </span>
                  </>
                )}
              </div>
            </Card>
          </div>

          <ShiftMissionList
            missions={missions}
            shiftId={params.shiftId}
          ></ShiftMissionList>
          <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 flex mx-auto py-8 ">
            <div className="flex w-full justify-between">
              <NavLink to="add-mission">
                <Button onClick={addMissionHandler} style="primary">
                  Add extra
                </Button>
              </NavLink>
              <Button onClick={addMissionHandler} style="danger">
                Close shift
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isButtonPressed ? (<ExtraMissionModal shift_id={params.shiftId} onCancel={cancelHandler} />) : <></>}
    </>
  );
};
export default ShiftDetail;
