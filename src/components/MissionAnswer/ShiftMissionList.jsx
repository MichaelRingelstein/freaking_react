import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ShiftMissionList = (props) => {
  return (
    <>
      <div className="grid auto-rows-min w-full">
        <div className="pb-3 sm:pb-2">
          <h1 className="text-xl font-bold leading-6 text-black ">
            Shift summary
          </h1>
        </div>
        <Card className="">
          <div className="grid grid-cols-6 gap-4 px-4 py-5 sm:p-6 bg-slate-100">
            <div className="col-span-6 lg:col-span-3">
              {props.shiftInformation.shift_dispatcher}
            </div>
            <div className="col-span-6 lg:col-span-3">
              {props.shiftInformation.shift_date}
            </div>
          </div>

          {props.missionList.length > 0 && (
            <a href="#">
              <div className="py-5 px-4">
                <ul className="-my-5 divide-y divide-gray-200">
                  {props.missionList.map((mission, index) => (
                    <li key={index} className="py-5">
                      <div className="grid grid-cols-6">
                        <div className="min-w-0 col-span-5">
                          <div>
                            <p className="font-bold tracking-wide text-lg">
                              Mission n°{index + 1}
                            </p>
                          </div>
                          <p className="truncate">
                            {" "}
                            <b>Type :</b> {mission.missionType.name}
                          </p>
                          <div className="flex-col flex-wrap">
                            <div>
                              <p>
                                <b>Qty :</b> {mission.quantity}
                              </p>
                            </div>
                            <div>
                              <p>
                                {" "}
                                <b>Pick-up address :</b> {mission.pickUp}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-full justify-center col-span-1 place-items-center ">
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
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          )}
        </Card>
      </div>
    </>
  );
};
export default ShiftMissionList;
