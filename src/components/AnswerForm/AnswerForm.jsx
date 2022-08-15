import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import Button from "../UI/Button";
import instanceAxios from "../../api";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const impoundmentList = [
  { id: 1, name: "Pouchet" },
  { id: 2, name: "Louvre" },
  { id: 3, name: "Saint Ouen" },
  { id: 4, name: "Boulogne" },
];

const AnswerForm = (props) => {
  const submitAnswerHandler = () => {};
  const [answer, setAnswer] = useState({
    id: props.mission.id,
    shift_id: props.mission.shift_id,
    missionType: props.mission.missionType,
    impoundment: { id: 1, name: "Pouchet" },
    quantity: props.mission.quantity,
    vins: props.mission.vins,
    pickUp: props.mission.pickUp,
    dropOff: props.mission.dropOff,
    fleet: props.mission.fleet,
    comment: props.mission.comment,
    status: props.mission.status,
    dropOffs: "",
    pickUps: "",
  });
  const [photo, setPhoto] = useState("");
  const [openCamera, setOpenCamera] = useState(false);

  const vehicleIdsChangeHandler = (event) => {
    setAnswer((prevAnswer) => ({ ...prevAnswer, vins: event.target.value }));
  };
  const impoundmentChangeHandler = (impoundment) => {
    setAnswer((prevAnswer) => ({ ...prevAnswer, impoundment: impoundment }));
  };
  const dropOffsChangeHandler = (event) => {
    console.log(event.target.value);
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      dropOffs: event.target.value,
    }));
  };
  const pickUpsChangeHandler = (event) => {
    console.log(event.target.value);
    setAnswer((prevAnswer) => ({ ...prevAnswer, pickUps: event.target.value }));
  };
  const handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    console.log("takePhoto");
    setPhoto(dataUri)
    setOpenCamera(!openCamera)
  };
  const handleOpenCamera = () => {
    setOpenCamera(!openCamera)
  }

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
        <form onSubmit={submitAnswerHandler}>
          <Card className="overflow-visible">
            <div className="bg-teal">
              <div className="group relative grid grid-cols-6">
                <div className="min-w-0 col-span-5 aria-hidden">
                  <div className="pl-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text:sm font-medium ${
                        translateStatus(props.mission.status).style
                      }`}
                    >
                      {translateStatus(props.mission.status).label}
                    </span>

                    <p className="text-sm font-normal group-hover:text-gray-500 ">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        Type:{" "}
                      </span>{" "}
                      {props.mission.missionType.name}
                    </p>

                    <p className="text-sm font-normal group-hover:text-gray-500">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        quantity:{" "}
                      </span>
                      {props.mission.quantity}
                    </p>

                    <p className="text-sm font-normal group-hover:text-gray-500">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        Pick-up address:{" "}
                      </span>{" "}
                      {props.mission.pickUp}
                    </p>
                    <p className="text-sm font-normal group-hover:text-gray-500">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        drop-off address:{" "}
                      </span>{" "}
                      {props.mission.dropOff}
                    </p>
                    <p className="text-sm font-normal group-hover:text-gray-500">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        Scooter fleets:{" "}
                      </span>{" "}
                      {props.mission.fleet}
                    </p>
                    <p className="text-sm font-normal group-hover:text-gray-500">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        Comment:{" "}
                      </span>{" "}
                      {props.mission.comment}
                    </p>
                    <p className="text-sm font-normal group-hover:text-gray-500">
                      <span className="text-xs font-bold tracking-tight uppercase">
                        Scooters:{" "}
                      </span>{" "}
                      {props.mission.vins}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-row-2  max-w-md gap-4 px-4 py-5 sm:p-6">
              {answer.missionType.id === 4 ? (
                <>
                  <Dropdown
                    label="Impoundment place"
                    onChange={impoundmentChangeHandler}
                    list={impoundmentList}
                    selected={answer.impoundment}
                    requiredField={true}
                  ></Dropdown>
                </>
              ) : (
                <></>
              )}

              <Input
                labelContent="Scooter numbers"
                type="text"
                name="vehicle_ids"
                onChange={vehicleIdsChangeHandler}
                value={answer.vins}
                requiredField={true}
              ></Input>
              <Input
                labelContent="Drop-off adress"
                type="text"
                name="drop_off"
                onChange={dropOffsChangeHandler}
                value={answer.dropOffs}
                requiredField={true}
              ></Input>
              <Input
                labelContent="Pick-up adress"
                type="text"
                name="pick_up"
                onChange={pickUpsChangeHandler}
                value={answer.pickUps}
                requiredField={true}
              ></Input>
              <input type="file"></input>
              <Button onClick={handleOpenCamera}>Take a photo</Button>
              {openCamera && 
              <Camera
                onTakePhoto={(dataUri) => {
                  handleTakePhoto(dataUri);
                }}
              />}
              <img className="w-20 rounded-md" src={photo}></img>
            </div>
            <div className="py-3 bg-gray-50 text-right px-2 sm:px-6">
              <Button type="submit">Submit</Button>
            </div>
          </Card>
        </form>
      </div>
    </>
  );
};
export default AnswerForm;
