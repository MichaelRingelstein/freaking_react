import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import ShiftMissionList from "../components/ShiftDetail/ShiftMissionList";
import instanceAxios from "../api";
import NavBar from "../components/UI/Navbar";
import CircularButton from "../components/UI/CircularButton";


// const shiftData = {
//   shift_date: "12/08/2021 23:00:00",
//   shift_dispatcher: "Karamjeet",
//   mission_list: [
//     {
//       missionType: { id: 1, name: "Rebalancing" },
//       quantity: "4",
//       vins: "554, 443, 234, 1898",
//       pickUp: "Rue de la paix",
//       dropOff: "Rue de la guerre",
//       fleet: "dispatch",
//       comment: "déplacer ces scooters",
//     },
//     {
//       missionType: { id: 2, name: "blabla" },
//       quantity: "4",
//       vins: "554, 443, 234, 1898",
//       pickUp: "Rue de la paix",
//       dropOff: "Rue de la guerre",
//       fleet: "dispatch",
//       comment: "déplacer ces scooters",
//     },
//     {
//       missionType: { id: 3, name: "zefr" },
//       quantity: "4",
//       vins: "554, 443, 234, 1898",
//       pickUp: "Rue de la paix",
//       dropOff: "Rue de la guerre",
//       fleet: "dispatch",
//       comment: " ces scooters",
//     },
//   ],
// };

const ShiftDetail = (props) => {
  const params = useParams();
  console.log(params.shiftId);
  console.log("start rendering");
  const [missions, setMissions] = useState([]);
  const [generalInformation, setGeneralInformation] = useState(null);
  const [isAddingMission, setIsAddingMission] = useState(false);

  useEffect(() => {
    instanceAxios.get("missions.json").then((response) => {
      setMissions(response.data);
    });
  }, []);

  useEffect(() => {
    instanceAxios.get("shifts.json").then((response) => {
      response.data.map((shift, index) => {
        if (shift.id == params.shiftId) {
          console.log(shift);
          setGeneralInformation(shift);
        }
      });
    });
  }, []);

  console.log(missions);
  console.log(generalInformation);

  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center gap-4 py-8 sm:px-8 xl:px-0">
        <ShiftMissionList
          generalInformation={generalInformation}
          missions={missions}
          shiftId={params.shiftId}
        ></ShiftMissionList>
      </div>
      <div className="flex justify-center m-auto mb-8">
        <NavLink to="add-mission">
          <CircularButton  />
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default ShiftDetail;
