import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddMission = (props) => {
  const [newMission, setNewMission] = useState({
    id: "",
    missionType: "",
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
    //console.log(newMission)
    props.onAdd(newMission);
    setNewMission({id: "",
    missionType: "",
    quantity: "",
    vins: "",
    pickUp: "",
    dropOff: "",
    fleet: "",
    comment: "",})
  };

  const missionSelectedChangeHandler = (event) => {
    setNewMission({ ...newMission, missionType: event.target.value });
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
      <Card className="w-96">
        <form
          className="grid auto-rows-auto gap-4"
          onSubmit={addMissionHandler}
        >
          <div className="grid gid-col-2">
            {/* <label className="text-gray-700">Type de mission</label> */}
            <select
              id="mission_type"
              name="carmission_types"
              onChange={missionSelectedChangeHandler}
              value={newMission.missionType}
              className="h-8"
              required
            >
              <option value="" disabled>
                Select type--
              </option>
              <option value="rebalancing">Rebalancing</option>
              <option value="clusters">Clusters</option>
              <option value="towing">Towing</option>
              <option value="impoundment">Impoundment dispatch</option>
              <option value="out_of_zone">Out of zone towing</option>
              <option value="internal_dispatch">Internal Dispatch</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label>Quantité</label>
              <input
                type="text"
                name="quantity"
                onChange={quantityChangeHandler}
                value={newMission.quantity}
                className="w-full"
                required
              ></input>
            </div>
            <div className="col-span-2">
              <label>VINs</label>
              <input
                type="text"
                name="vehicle_ids"
                onChange={vehicleIdsChangeHandler}
                value={newMission.vins}
                className="w-full"
                required
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Enlèvement</label>
              <input
                type="text"
                name="pick_up"
                onChange={pickUpAdressChangeHandler}
                value={newMission.pickUp}
                required
              ></input>
            </div>
            <div>
              <label>Dépôt</label>
              <input
                type="text"
                name="drop_off"
                onChange={dropOffAdressChangeHandler}
                value={newMission.dropOff}
                required
              ></input>
            </div>
          </div>
          <div className="grid">
            <label>Flotte</label>
            <input
              type="text"
              name="fleet"
              onChange={fleetChangeHandler}
              value={newMission.fleet}
              required
            ></input>
          </div>
          <div className="grid">
          <label>Commentaire</label>
          <input
            type="text"
            name="comment"
            onChange={commentChangeHandler}
            value={newMission.comment}
          ></input>
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
