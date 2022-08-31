import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { translateMissionStatus } from "../../hooks/translateStatus";
import { translateMissionType } from "../../hooks/translateMissionType";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const ShiftMissionList = (props) => {
  console.log(props.missions);
  const missionTypes = useSelector((state) => state.missionTypes.value);



  return (
    <>
      <div className="justify-center flex-col">
        <Card className="bg-white ">
          {
            <div className="">
              <ul className="divide-y divide-gray-200">
                {props.missions &&
                  Object.keys(props.missions).map((key, index) => (
                    <li key={key} className="py-5 px-4 hover:bg-gray-100">
                      <NavLink to={`/answer-mission/${props.missions[key].id}`}>
                        <div className="flex flex-wrap justify-between sm:justify-start items-center gap-4 px-3 lg:px-5">
                          <span className="text-md font-semibold">
                            Mission {index + 1} {props.missions[key].extra ? "(extra) " : ""} - {" "}
                            {translateMissionType(props.missions[key].mission_type, missionTypes)}
                          </span>
                          {/* <span className="text-md font-semibold">
                            {mission.missionType.name}
                          </span> */}
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 h-fit rounded-full text-xs md:text:sm font-medium ${
                              translateMissionStatus(props.missions[key].status).style
                            }`}
                          >
                            {translateMissionStatus(props.missions[key].status).label}
                          </span>
                        </div>
                        <div className="relative grid grid-cols-6 px-3 lg:px-5">
                          <div className="min-w-0 col-span-5 aria-hidden">
                            <div className="flex flex-col gap-y-1">
                              <div>
                                <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                                  Qty:{" "}
                                </span>{" "}
                                {props.missions[key].quantity}
                              </div>

                              <div>
                                <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                                  Mopeds:{" "}
                                </span>{" "}
                                {props.missions[key].scooters}
                              </div>

                              <div>
                                <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                                  Pick-up:{" "}
                                </span>{" "}
                                {props.missions[key].pickup_address}
                              </div>

                              <div>
                                <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                                  Drop-off:{" "}
                                </span>{" "}
                                {props.missions[key].dropoff_address}
                              </div>
                            </div>
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
          }
        </Card>
      </div>
    </>
  );
};
export default ShiftMissionList;
