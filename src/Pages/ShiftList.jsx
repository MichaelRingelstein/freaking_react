import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import instanceAxiosBDD from "../api/indexBDD";
import Button from "../components/UI/Button";
import NavBar from "../components/UI/Navbar";

// const shifts = [
//   {
//     id: 1,
//     shift_date: "2022-05-10 21:00:00",
//     shift_dispatcher: "Karamjeet",
//   },
//   {
//     id: 2,
//     shift_date: "2022-05-11 05:00:00",
//     shift_dispatcher: "Michaël",
//   },
// ];

const ShiftList = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchShifts = async () => {
      const loadedShifts = [];
      const response = await instanceAxiosBDD.get("/shifts.json");
      const responseData = response.data;
      console.log(response.data);
      for (const key in responseData) {
        loadedShifts.push(responseData[key]);
        console.log(responseData[key]);
      }
      setShifts(loadedShifts);
    };
    fetchShifts();
  }, []);
  console.log(shifts)

  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col py-8 sm:px-8 xl:px-0 ">
        <div className="inline-flex justify-center">
          <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 text-xl font-bold">
            Shifts list
          </div>
        </div>
        <div className="inline-flex justify-center">
          {shifts.length > 0 && (
            <ul className="gap-4 w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2">
              {shifts.map((element, index) => (
                <NavLink to={`shift/${element.id}`} className="">
                  <li
                    key={index}
                    className="bg-white shadow overflow-hidden rounded-md px-6 py-6 my-4 flex flex-row justify-between hover:bg-gray-100"
                  >
                    <div>
                      <p className="text-base font-medium">
                        {element.shift_dispatcher}
                      </p>
                      {/* <p>{element.missionList.length} mission(s)</p> */}
                    </div>
                    <div className="">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text:sm font-medium bg-blue-100 text-blue-800">
                        {element.shift_date}
                      </span>
                    </div>
                  </li>
                </NavLink>
              ))}
            </ul>
          )}
        </div>
        <div className="text-center">
          <NavLink to="create-shift">
            <Button>Créer une tournée</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default ShiftList;
