import React from "react";

const Button = (props) => {
  var style = "";

  switch (props.style) {
    case "primary":
      style =
        " text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      break;
    case "danger":
      style =
        " text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500";
      break;
    case "warning":
      style =
        " text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500";
      break;
    case "success":
      style =
        " text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";
      break;
    default:
      style =
        " text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
      break;
  }

  return (
    <button
      className={`inline-flex items-center justify-center	 px-5 py-2 border border-transparent text-base font-medium rounded-xl shadow-sm  ${style} ${
        props.className ? props.className : ""
      }`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
