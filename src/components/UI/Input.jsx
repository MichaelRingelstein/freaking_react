import React from "react";

const Input = (props) => {
  var required = {};
  if (props.requiredField) {
    required = { required: "required" };
  }
  console.log({ ...required });
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={`w-full border-b border-gray-200 focus:outline-none focus:border-blue-400 ${props.className}`}
        value={props.value}
        onChange={props.onChange}
        {...required}
      >
        {props.children}
      </input>
    </>
  );
};
export default Input;
