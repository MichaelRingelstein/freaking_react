import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Dropdown from "../UI/Dropdown";
import "../../App.css";
import { instanceAxios } from "../../api/index";
import axios from "axios";
import { useSelector } from "react-redux";

const impoundmentList = [
  { id: 1, label: "Pouchet" },
  { id: 2, label: "Louvre" },
  { id: 3, label: "Saint Ouen" },
  { id: 4, label: "Boulogne" },
];

const ExtraMissionForm = (props) => {
  const missionTypes = useSelector((state) => state.missionTypes.value);

  const [newMission, setNewMission] = useState({
    missionType: 1,
    quantity: "",
    vins: "",
    pickUp: "",
    dropOff: "",
    fleet: "",
    comment: "",
    status: 1,
  });

  const addMissionHandler = (event) => {
    event.preventDefault();
    props.onAdd(newMission);
    console.log(newMission);
    setNewMission({
      mission_type: "",
      comment: "",
      status: 1,
      extra: true
    });
  };

  const missionSelectedChangeHandler = (mission) => {
    console.log(mission);
    setNewMission({ ...newMission, mission_type: mission });
  };

  const impoundmentSelectedChangeHandler = (event) => {
    setNewMission({ ...newMission, impoundment: event });
  };

  const quantityChangeHandler = (event) => {
    setNewMission({ ...newMission, quantity: event.target.value });
  };
  const vehicleIdsChangeHandler = (event) => {
    setNewMission({ ...newMission, vins: event.target.value });
  };
  const pickUpAdressChangeHandler = (event) => {
    setNewMission({ ...newMission, pickUp: event.target.value });
  };
  const dropOffAdressChangeHandler = (event) => {
    setNewMission({ ...newMission, dropOff: event.target.value });
  };
  const fleetChangeHandler = (event) => {
    setNewMission({ ...newMission, fleet: event.target.value });
  };
  const commentChangeHandler = (event) => {
    setNewMission({ ...newMission, comment: event.target.value });
  };

  //transform missionTypes object in an array
  const types = [];
  if (missionTypes) {
    Object.keys(missionTypes).map((key) => types.push(missionTypes[key]));
  }
  console.log("types : ", types);

  console.log(newMission);

  return (
    <div className="w-full">
      <div className="pb-3 sm:pb-2">
        <h1 className="text-xl font-bold leading-6 text-black ">
          Create a mission
        </h1>
      </div>
      <form onSubmit={addMissionHandler}>
        <div className="grid grid-cols-6 gap-4 px-4 py-5 sm:p-6">
          <div className="col-span-6">
            <div>
              {types.length > 0 ? (
                <Dropdown
                  label="Mission type"
                  onChange={missionSelectedChangeHandler}
                  list={types}
                  requiredField={true}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          {newMission.missionType.id === 5 ? (
            <div className="col-span-6">
              <div>
                <Dropdown
                  label="Impoundment"
                  onChange={impoundmentSelectedChangeHandler}
                  list={impoundmentList}
                  requiredField={true}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="col-span-6 sm:col-span-6">
            <Input
              labelContent="Commentaire"
              type="text"
              name="comment"
              onChange={commentChangeHandler}
              value={newMission.comment}
              requiredField={true}
            ></Input>
          </div>
        </div>
        <div className="py-3 text-right px-2 sm:px-6">
          <Button type="submit" style="primary">
            Add Mission
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ExtraMissionForm;
