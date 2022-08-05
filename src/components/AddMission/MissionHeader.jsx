import React from "react";
import Card from "../UI/Card";


const MissionHeader = (props) => {
  return (
    <>
      <Card className="bg-red-300">
        <div className="grid gap-8 grid-cols-1">
          <div>
            <label>Créneau de tournée</label>
            <input
              type="datetime-local"
              name="shift_date"
              id="shift_date"
              className="w-full h-8"
              required
            ></input>
          </div>
          <div>
            <label className="text-gray-700">Dispatcher name:</label>
            <input type="text" name="dispatcherName" className="w-full h-8"></input>
          </div>
        </div>
      </Card>
    </>
  );
};
export default MissionHeader;
