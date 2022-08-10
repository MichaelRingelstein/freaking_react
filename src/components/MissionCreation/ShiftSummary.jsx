import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ShiftSummary = (props) => {
  const shiftDateChangeHandler = (event) => {
    props.shiftInformationHandler({
      shift_date: event.target.value,
      shift_dispatcher: props.shiftInformation.shift_dispatcher,
    });
  };

  const dispatcherChangeHandler = (event) => {
    props.shiftInformationHandler({
      shift_date: props.shiftInformation.shift_date,
      shift_dispatcher: event.target.value,
    });
  };

  const shiftInformationFormHandle = (event) => {
    event.preventDefault();
    props.sendMissionHandler();
  };

  const deleteMision = (event) => {
    props.deleteHandler(event.target.id);
  };

  return (
    <div className="grid auto-rows-min w-full">
      <div className="pb-3 sm:pb-2">
        <h1 className="text-xl font-bold leading-6 text-black ">
          Shift summary
        </h1>
      </div>
      <Card className="">
        <form onSubmit={shiftInformationFormHandle}>
          <div className="grid grid-cols-6 gap-4 px-4 py-5 sm:p-6">
            <div className="col-span-6 lg:col-span-3">
              <Input
                labelContent="Créneau"
                type="datetime-local"
                name="shift_date"
                id="shift_date"
                value={props.shiftInformation.shift_date}
                requiredField={true}
                onChange={shiftDateChangeHandler}
              ></Input>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <Input
                labelContent="Dispatcher name"
                type="text"
                name="dispatcherName"
                value={props.shiftInformation.shift_dispatcher}
                onChange={dispatcherChangeHandler}
                requiredField={true}
              ></Input>
            </div>
          </div>
          {props.missionList.length > 0 && (
            <>
              <div className="py-5 px-4">
                <ul className="-my-5 divide-y divide-gray-200">
                  {props.missionList.map((mission, index) => (
                    <li key={index} className="py-5">
                      <div className="grid grid-cols-6">
                        <div className="min-w-0 col-span-5">
                        <div>
                              <p className="font-bold tracking-wide text-lg">Mission n°{index + 1}
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
                                <b>VINs :</b> {mission.vins}
                              </p>
                            </div>
                            <div>
                              <p>
                                {" "}
                                <b>Pick-up address :</b> {mission.pickUp}
                              </p>
                            </div>
                            <div>
                              <p>
                                {" "}
                                <b>Drop-off address :</b> {mission.dropOff}
                              </p>
                            </div>
                            <div>
                              <p>
                                {" "}
                                <b>Fleet :</b> {mission.fleet}
                              </p>
                            </div>
                            <div>
                              <p>
                                {" "}
                                <b>Comment :</b> {mission.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit justify-center col-span-1">
                          <a
                            id={index}
                            href="#"
                            onClick={deleteMision}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-300"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-3 bg-gray-50 text-right px-2 sm:px-6">
                <Button type="submit">Send</Button>
              </div>
            </>
          )}
        </form>
      </Card>
    </div>
  );
};
export default ShiftSummary;
