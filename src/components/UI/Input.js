import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={`mt-1 block w-full rounded-md shadow-sm ${
          !props.isValid ? "border-red-500" : ""
        } focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 px-2 `}
        value={props.value}
        onChange={props.onChange}
      >
        {props.children}
      </input>
    </>
  );
};
export default Input;
