import React from "react";

// use this components using the following parameters
// labelContent="Quantité"
// type="text"
// name="quantity"
// onChange={quantityChangeHandler}
// value={newMission.quantity}
// requiredField={true}

const Input = (props) => {
  var required = {};
  if (props.requiredField) {
    required = { required: "required" };
  }
  return (
    <>
      <div className="relative mt-2">
        <input
          type={props.type}
          name={props.name}
          className={`py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md `}
          value={props.value}
          onChange={props.onChange}
          {...required}
        >
          {props.children}
        </input>
        <label
          htmlFor="name"
          className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >
          {props.labelContent}
        </label>
      </div>
    </>
  );
};
export default Input;
