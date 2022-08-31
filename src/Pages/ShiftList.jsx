import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../api/client";
import instanceAxiosBDD from "../api/indexBDD";
import Button from "../components/UI/Button";
import NavBar from "../components/UI/Navbar";
import { translateShiftStatus } from "../hooks/translateStatus";

// const shiftsDummyData = [
//   {
//     id: 1,
//     start_date: "2022-05-10 21:00:00",
//     assigned_to: "Karamjeet",
//     status: 1,
//   },
//   {
//     id: 2,
//     start_date: "2022-05-11 05:00:00",
//     assigned_to: "Michaël",
//     status: 2,
//   },
// ];

const ShiftList = () => {
  // for local data
  const [shifts, setShifts] = useState("");
  
  // for BDD data
  // const [shifts, setShifts] = useState([]);
  // useEffect(() => {
  //   const fetchShifts = async () => {
  //     const loadedShifts = [];
  //     const response = await instanceAxiosBDD.get("/shifts.json");
  //     const responseData = response.data;
  //     for (const key in responseData) {
  //       loadedShifts.push(responseData[key]);
  //       // console.log(responseData[key]);
  //     }
  //     setShifts(loadedShifts);
  //   };
  //   fetchShifts();
  // }, []);
  // console.log(shifts)

  const fetchShifts = async() => {
    const {data, error} = await supabase.from('shifts').select('id, start_date, assigned_to, status').eq('status', 1)
    console.log("supabase data : ", data)
    setShifts(data)
  }
  useEffect(() => {
    fetchShifts()
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col py-8 sm:px-8 xl:px-0">
        <div className="inline-flex justify-center">
          <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 text-xl font-bold">
            Shifts list
          </div>
        </div>
        <div className="inline-flex justify-center">
          {shifts.length > 0 && (
            <ul className="gap-4 w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2">
              {shifts.map((element) => (
                <NavLink to={`shift/${element.id}`} className="">
                  <li
                    key={element.id}
                    className="bg-white shadow overflow-hidden rounded-md px-6 py-6 my-4 flex flex-row justify-between hover:bg-gray-100"
                  >
                    <div>
                      <p className="text-base font-medium">
                        {element.assigned_to}
                      </p>
                      <p className="text-base md:text:sm font-light">
                        Date: {element.start_date}
                      </p>
                      {/* <p>{element.missionList.length} mission(s)</p> */}
                    </div>

                    <div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text:sm font-medium ${
                          translateShiftStatus(element.status).style
                        }`}
                      >
                        {translateShiftStatus(element.status).label}
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
            <Button style="primary">Créer une tournée</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default ShiftList;
