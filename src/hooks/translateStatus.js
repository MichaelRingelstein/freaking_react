export const translateShiftStatus = (statusId) => {
    let label = "";
    let style = "";
    switch (statusId) {
      case 1:
        label = "OPEN";
        style = "bg-green-100 text-green-800";
        break;
      case 2:
        label = "CLOSED";
        style = "bg-purple-100 text-purple-800";
        break;
      default:
        label = "N/C";
        style = "bg-gray-100 text-gray-800";
        break;
    }
    return { label, style };
  };

  export const translateMissionStatus = (statusId) => {
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