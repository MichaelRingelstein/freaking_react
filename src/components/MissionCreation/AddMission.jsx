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

const AddMission = (props) => {
  const missionTypes = useSelector((state) => state.missionTypes.value);

  const [newMission, setNewMission] = useState({
    shift_id: "",
    mission_type: 1,
    quantity: "",
    scooters: "",
    pickup_address: "",
    dropoff_address: "",
    comment: "",
    fleet: "",
    status: 1,
  });

  const addMissionHandler = (event) => {
    event.preventDefault();
    props.onAdd(newMission);
    console.log(newMission);
    setNewMission({
      mission_type: "",
      quantity: "",
      scooters: "",
      pickup_address: "",
      dropoff_address: "",
      fleet: "",
      comment: "",
      status: 1,
    });
  };

  const missionSelectedChangeHandler = (mission) => {
    console.log(mission);
    setNewMission({ ...newMission, mission_type: mission.id });
  };

  const impoundmentSelectedChangeHandler = (event) => {
    setNewMission({ ...newMission, impoundment: event });
  };

  const quantityChangeHandler = (event) => {
    setNewMission({ ...newMission, quantity: event.target.value });
  };
  const vehicleIdsChangeHandler = (event) => {
    setNewMission({ ...newMission, scooters: event.target.value });
  };
  const pickUpAdressChangeHandler = (event) => {
    setNewMission({ ...newMission, pickup_address: event.target.value });
  };
  const dropOffAdressChangeHandler = (event) => {
    setNewMission({ ...newMission, dropoff_address: event.target.value });
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
        <Card className="bg-white ">
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
            {newMission.mission_type === 5 ? (
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
                value={newMission.scooters}
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <Input
                labelContent="Enlèvement"
                type="text"
                name="pick_up"
                onChange={pickUpAdressChangeHandler}
                value={newMission.pickup_address}
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <Input
                labelContent="Dépôt"
                type="text"
                name="drop_off"
                onChange={dropOffAdressChangeHandler}
                value={newMission.dropoff_address}
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
            <Button type="submit" style="primary">
              Add Mission
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};
export default AddMission;
