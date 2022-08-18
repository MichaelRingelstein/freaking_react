import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "../UI/Card";

const ShiftMissionList = (props) => {
  console.log(props.missions);
  //let navigate = useNavigate();

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   navigate("/answer-mission/" + event.target.value, { replace: true });
  // };

  const translateStatus = (statusId) => {
    let label = "";
    let style = "";
    switch (statusId) {
      case 1:
        label = "TODO";
        style = "bg-blue-100 text-blue-800";
        break;
      case 2:
        label = "DONE";
        style = "bg-green-100 text-green-800";
        break;
      default:
        label = "N/C";
        style = "bg-gray-100 text-gray-800";
        break;
    }
    return { label, style };
  };

  return (
    <>
      <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 inline-flex justify-center flex-col">
        <div className="pb-3 sm:pb-2">
          <h1 className="text-2xl font-bold leading-6 text-black ">
            Shift detail
          </h1>
          {props.generalInformation && (
            <>
              <p>Date: {props.generalInformation.shift_date}</p>
              <p>Dispatcheur: {props.generalInformation.shift_dispatcher}</p>
            </>
          )}
        </div>
        <Card className="">
          {props.missions.length > 0 && (
            <div className="">
              <ul className="divide-y divide-gray-200">
                {props.missions.map((mission, index) => (
                  //<NavLink to={`answer-mission/${mission.id}`}>
                  <li key={mission.id} className="py-5 px-4 hover:bg-gray-100">
                    <NavLink to={`/answer-mission/${mission.id}`}>
                      <p className="text-lg font-bold pb-2 uppercase">
                        Mission {index + 1}
                      </p>
                      <div className="relative grid grid-cols-6">
                        {/* <button
                        className="absolute w-full h-full"
                        onClick={handleClick}
                        value={mission.id}
                      /> */}
                        <div className="min-w-fit col-span-1 aria-hidden">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text:sm font-medium ${
                              translateStatus(mission.status).style
                            }`}
                          >
                            {translateStatus(mission.status).label}
                          </span>
                        </div>
                        <div className="min-w-0 col-span-4 ml-2 aria-hidden">
                          <p className="text-sm font-normal ">
                            <span className="text-xs font-bold tracking-tight uppercase">
                              Type:{" "}
                            </span>{" "}
                            {mission.missionType.name}
                          </p>

                          <p className="text-sm font-normal">
                            <span className="text-xs font-bold tracking-tight uppercase">
                              quantity:{" "}
                            </span>
                            {mission.quantity}
                          </p>

                          <p className="text-sm font-normal">
                            <span className="text-xs font-bold tracking-tight uppercase">
                              Pick-up address:{" "}
                            </span>{" "}
                            {mission.pickUp}
                          </p>
                          <p className="text-sm font-normal">
                            <span className="text-xs font-bold tracking-tight uppercase">
                              drop-off address:{" "}
                            </span>{" "}
                            {mission.dropOff}
                          </p>
                        </div>
                        <div className="flex h-full justify-center col-span-1 place-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </NavLink>
                  </li>
                  //</NavLink>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};
export default ShiftMissionList;
