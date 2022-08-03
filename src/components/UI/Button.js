import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-2 rounded-full w-40 justify-self-center"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
