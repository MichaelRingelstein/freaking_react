import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Dropdown from "../UI/Dropdown";
import "../../App.css";
import { instanceAxios } from "../../api/index";
import axios from "axios";



const AddMission = (props) => {
  const [newMission, setNewMission] = useState({
    missionType: 1,
    quantity: "",
    vins: "",
    pickUp: "",
    dropOff: "",
    fleet: "",
    comment: "",
    status: 1
  });

  const addMissionHandler = (event) => {
    event.preventDefault();
    props.onAdd(newMission);
    console.log(newMission)
    setNewMission({
      missionType: "",
      quantity: "",
      vins: "",
      pickUp: "",
      dropOff: "",
      fleet: "",
      comment: "",
      status: 1
    });
  };

  const missionSelectedChangeHandler = (mission) => {
    setNewMission({ ...newMission, missionType: mission });
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

  console.log(newMission)
  console.log(props.missionTypes)


  return (
    <div className="w-full">
      <div className="pb-3 sm:pb-2">
        <h1 className="text-xl font-bold leading-6 text-black ">
          Create a mission
        </h1>
      </div>
      <form onSubmit={addMissionHandler}>
        <Card className="">
          <div className="grid grid-cols-6 gap-4 px-4 py-5 sm:p-6">
            <div className="col-span-6 sm:col-span-4">
              <div>
                {Array.isArray(props.missionTypes) ? (
                  <Dropdown
                    label="Mission type"
                    onChange={missionSelectedChangeHandler}
                    list={props.missionTypes}
                    requiredField={true}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                labelContent="Quantité"
                type="text"
                name="quantity"
                onChange={quantityChangeHandler}
                value={newMission.quantity}
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                labelContent="VINs"
                type="text"
                name="vehicle_ids"
                onChange={vehicleIdsChangeHandler}
                value={newMission.vins}
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <Input
                labelContent="Enlèvement"
                type="text"
                name="pick_up"
                onChange={pickUpAdressChangeHandler}
                value={newMission.pickUp}
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <Input
                labelContent="Dépôt"
                type="text"
                name="drop_off"
                onChange={dropOffAdressChangeHandler}
                value={newMission.dropOff}
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Input
                labelContent="Flotte"
                type="text"
                name="fleet"
                onChange={fleetChangeHandler}
                value={newMission.fleet}
                requiredField={true}
              ></Input>
            </div>
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
          <div className="py-3 bg-gray-50 text-right px-2 sm:px-6">
            <Button type="submit">Add Mission</Button>
          </div>
        </Card>
      </form>
    </div>
  );
};
export default AddMission;
