import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Dropdown from "../UI/Dropdown"

const missionTypes = [
  { id: 1, name: 'Rebalancing' },
  { id: 2, name: 'Clusters' },
  { id: 3, name: 'Towing' },
  { id: 4, name: 'Impoundment dispatch' },
  { id: 5, name: 'Out of zone towing' },
  { id: 6, name: 'Internal Dispatch' }
]

const AddMission = (props) => {
  const [newMission, setNewMission] = useState({
    id: "",
    missionType: missionTypes[0],
    quantity: "",
    vins: "",
    pickUp: "",
    dropOff: "",
    fleet: "",
    comment: "",
  });


  const addMissionHandler = (event) => {
    event.preventDefault();
    setNewMission({ ...newMission, id: Math.random() });
    props.onAdd(newMission);
    setNewMission({
      id: "",
      missionType: missionTypes[0],
      quantity: "",
      vins: "",
      pickUp: "",
      dropOff: "",
      fleet: "",
      comment: "",
    });
  };

  const missionSelectedChangeHandler = (mission) => {
    console.log(mission)
    setNewMission({ ...newMission, missionType:mission})
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

  return (
    <>
        <h1 className="text-xl font-bold text-center">Create a mission</h1>
      <Card className="w-full">
        <form
          className="grid auto-rows-auto gap-8"
          onSubmit={addMissionHandler}
        >
          <Dropdown onChange={missionSelectedChangeHandler} list={missionTypes} selected={newMission.missionType}/>
           <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label>Quantité</label>
              <Input
                type="text"
                name="quantity"
                onChange={quantityChangeHandler}
                value={newMission.quantity}
                className="w-full"
                requiredField={true}
              ></Input>
            </div>
            <div className="col-span-2">
              <label>VINs</label>
              <Input
                type="text"
                name="vehicle_ids"
                onChange={vehicleIdsChangeHandler}
                value={newMission.vins}
                className="w-full"
                requiredField={true}
              ></Input>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Enlèvement</label>
              <Input
                type="text"
                name="pick_up"
                onChange={pickUpAdressChangeHandler}
                value={newMission.pickUp}
                className="w-full"
                requiredField={true}
              ></Input>
            </div>
            <div>
              <label>Dépôt</label>
              <Input
                type="text"
                name="drop_off"
                onChange={dropOffAdressChangeHandler}
                value={newMission.dropOff}
                className="w-full"
                requiredField={true}
              ></Input>
            </div>
          </div>
          <div className="grid">
            <label>Flotte</label>
            <Input
              type="text"
              name="fleet"
              onChange={fleetChangeHandler}
              value={newMission.fleet}
              className="w-full"
              requiredField={true}
            ></Input>
          </div>
          <div className="grid">
            <label>Commentaire</label>
            <Input
              type="text"
              name="comment"
              onChange={commentChangeHandler}
              value={newMission.comment}
              requiredField={true}
            ></Input>
          </div> 

          {/* <Input
            isValid={isValid}
            type="text"
            name="userName"
            value={enterredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age" className="text-gray-700">
            Age:{" "}
          </label>
          <Input
            isValid={isValid}
            type="number"
            name="age"
            value={enterredAge}
            onChange={ageChangeHandler}
          /> */}
          <Button type="submit">Add Mission</Button>
        </form>
      </Card>
    </>
  );
};
export default AddMission;
