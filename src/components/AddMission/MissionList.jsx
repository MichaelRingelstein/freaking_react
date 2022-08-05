import React from "react";
import Card from "../UI/Card";

const MissionList = (props) => {
  console.log(props.missionList);
  return (
    <>
    
      <ul>
        {props.missionList.map((mission) => (
          <Card className="">
          <li key={mission[0].id}>
            <div>
              Type : {mission[0].missionType} 
              Qty : {mission[0].quantity} 
              VINs : {mission[0].vins} 
              Pick-up address : {mission[0].pickUp} 
              Drop-off address : {mission[0].dropOff} 
              Fleet : {mission[0].fleet} 
              Comment : {mission[0].comment} 
            </div>
          </li>
          </Card>
        ))}
      </ul>
    
    </>
  );
};
export default MissionList;
