export const translateMissionType = (status_id, missionTypes) => {
    var temp = "N/C"
  console.log(status_id, missionTypes);
  if (missionTypes) {
    Object.keys(missionTypes).map((key) => {
        if (missionTypes[key].id == status_id) {
        console.log(missionTypes[key].label);
        console.log("found")
        temp =  missionTypes[key].label;
      };
    });
  }
  return temp
};
