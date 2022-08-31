import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { translateMissionType } from "../../hooks/translateMissionType";
import { translateMissionStatus } from "../../hooks/translateStatus";
import Card from "../UI/Card";

const ShiftInformation = (props) => {
  const [missionType, setMissionType] = useState("")
  const missionTypes = useSelector((state) => state.missionTypes.value)
  useEffect(() => {
    var temp = translateMissionType(props.mission.mission_type, missionTypes)
    setMissionType(temp)
  }, [props])
  
  
  return (
    <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 justify-center self-center flex-col">
      <Card className="bg-white">
        <div className="p-6">
          <div className="flex flex-wrap justify-between sm:justify-start items-center gap-4">
            <span className="text-md font-semibold">
              {missionType}
            </span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 h-fit rounded-full text-xs md:text:sm font-medium ${
                translateMissionStatus(props.mission.status).style
              }`}
            >
              {translateMissionStatus(props.mission.status).label}
            </span>
          </div>

          <div className="flex flex-col gap-y-1 py-2">
            <div>
              <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                Qty:{" "}
              </span>{" "}
              {props.mission.quantity}
            </div>

            <div>
              <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                scooters:{" "}
              </span>{" "}
              {props.mission.scooters}
            </div>

            <div>
              <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                Pick-up address:{" "}
              </span>{" "}
              {props.mission.pickup_address}
            </div>

            <div>
              <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                Drop-off address:{" "}
              </span>{" "}
              {props.mission.dropoff_address}
            </div>

            <div>
              <span className="text-sm font-normal pr-1 tracking-tight text-gray-500 uppercase">
                Comment:{" "}
              </span>{" "}
              {props.mission.comment}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ShiftInformation;
