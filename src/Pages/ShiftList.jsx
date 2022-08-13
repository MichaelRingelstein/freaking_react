import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/UI/Button";

const shifts = [
  {
    id: 11232,
    shift_date: "test",
    shift_dispatcher: "test",
  },
  {
    id: 212324,
    shift_date: "test",
    shift_dispatcher: "test",
  },
];

const ShiftList = () => {
  return (
    <div className="flex flex-col py-6">
      <div className="inline-flex justify-center">
        <ul className="gap-4 w-3/4 lg:w-1/2">
          {shifts.map((element) => (
            <NavLink to={`shift-detail/${element.id}`}>
              <li
                key={element.id}
                className="bg-white shadow overflow-hidden rounded-md px-6 py-4 my-4 flex flex-row gap-4"
              >
                <div>{element.shift_date}</div>
                <div>{element.shift_dispatcher}</div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <NavLink to="create-mission">
          <Button>Créer une tournée</Button>
        </NavLink>
      </div>
    </div>
  );
};
export default ShiftList;
