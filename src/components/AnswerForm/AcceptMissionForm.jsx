import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "react-html5-camera-photo/build/css/index.css";
import { supabase } from "../../api/client";

const impoundmentList = ["Pouchet", "Louvre", "Saint Ouen", "Boulogne"];


const AcceptMissionForm = (props) => {

  const postAnswer = async () => {
    const { data, error } = await supabase.from("mission_answers").upsert(
      answer
    );
    console.log("callback from supabase: ", data);
    console.log("error from supabase: ", error);
  };

  const submitAnswerHandler = (event) => {
    console.log(answer);
    event.preventDefault();
    postAnswer()
  };

  const [answer, setAnswer] = useState({
    mission_id: props.mission.id,
    status: 1,
    scooters_moved: props.mission.scooters,
    pickup_medias: [],
    dropoff_medias: [],
    refuse_reason: "",
    comment: "",
  });

  const getMyPosition = () => {
    let lat = null;
    let long = null;
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("Latitude is :", lat);
        console.log("Longitude is :", long);
        resolve([lat, long]);
      });
    });
  };

  const getPosition = async () => {
    let coordinates = await getMyPosition();
    return coordinates;
  };

  const onPickUpPhotoAdded = (e) => {
    const [file] = e.target.files;
    console.log("Adding a pick up photo");
    getPosition().then((coordinates) => {
      console.log(coordinates);
      setAnswer((prev) => {
        return {
          ...prev,
          pickup_medias: [
            ...prev.pickup_medias,
            {
              img: URL.createObjectURL(file),
              lat: coordinates[0],
              long: coordinates[1],
            },
          ],
        };
      });
    });
  };

  const onDropOffPhotoAdded = (e) => {
    const [file] = e.target.files;
    console.log("Adding a drop off photo");
    getPosition().then((coordinates) => {
      console.log(coordinates);
      setAnswer((prev) => {
        return {
          ...prev,
          dropoff_medias: [
            ...prev.dropoff_medias,
            {
              img: URL.createObjectURL(file),
              lat: coordinates[0],
              long: coordinates[1],
            },
          ],
        };
      });
    });
  };

  const vehicleIdsChangeHandler = (event) => {
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      scooters_moved: event.target.value,
    }));
  };

  const commentChangeHandler = (event) => {
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      comment: event.target.value,
    }));
  };

  const impoundmentChangeHandler = (impoundment) => {
    setAnswer((prevAnswer) => ({ ...prevAnswer, impoundment: impoundment }));
  };

  const pickUpPhotoButton = (
    <label
      htmlFor="pickup-file"
      className="flex text-center flex-col justify-center items-center w-fit h-fit px-3 py-3 text-white rounded-lg cursor-pointer hover:bg-bray-800 bg-amber-500  border-amber-600 hover:border-amber-500 hover:bg-amber-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <input
        id="pickup-file"
        className="hidden"
        type="file"
        onChange={onPickUpPhotoAdded}
        required
      />
    </label>
  );

  const dropOffPhotoButton = (
    <label
      htmlFor="dropoff-file"
      className="flex text-center flex-col justify-center items-center w-fit h-fit px-3 py-3 text-white rounded-lg cursor-pointer hover:bg-bray-800 bg-blue-500  border-blue-600 hover:border-blue-500 hover:bg-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <input
        id="dropoff-file"
        className="hidden"
        type="file"
        onChange={onDropOffPhotoAdded}
        required
      />
    </label>
  );

  return (
    <>
      <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 justify-center self-center flex-col">
        <form onSubmit={submitAnswerHandler}>
          <Card className="overflow-visible bg-white">
            <div className="grid auto-rows-auto max-w-md gap-4 px-4 py-5 sm:p-6">
              {/* {props.mission.mission_type === 4 ? (
                <>
                  <Dropdown
                    label="Impoundment place"
                    onChange={impoundmentChangeHandler}
                    list={impoundmentList}
                    requiredField={true}
                  ></Dropdown>
                </>
              ) : (
                <></>
              )} */}
              <Input
                labelContent="Scooters moved"
                type="text"
                name="vehicle_ids"
                onChange={vehicleIdsChangeHandler}
                value={answer.scooters_moved}
                requiredField={true}
              ></Input>
              <div className="rounded-xl p-2 bg-amber-100 flex flex-col">
                <div className="text-sm font-medium text-amber-800 pb-2 self-center">
                  {" "}
                  Pick-up photos *
                </div>

                <div className="flex gap-2 items-end justify-center">
                  <div>{pickUpPhotoButton}</div>
                </div>

                {answer.pickup_medias && (
                  <ul className="flex flex-wrap mt-2">
                    {answer.pickup_medias.map((photo, index) => (
                      <li key={index} className="m-1">
                        <img
                          className="w-24 rounded-md"
                          src={photo.img}
                          alt="blabla"
                        ></img>
                        {/* <p>
                          {"latitude: " +
                            photo.lat +
                            " longitude: " +
                            photo.long}
                        </p> */}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="rounded-xl p-2 bg-blue-100 flex flex-col">
                <div className="text-sm font-medium text-blue-800 pb-2 self-center">
                  {" "}
                  Drop-off photos *
                </div>

                <div className="flex gap-2 items-end justify-center">
                  <div>{dropOffPhotoButton}</div>
                </div>

                {answer.dropoff_medias && (
                  <ul className="flex flex-wrap mt-2">
                    {answer.dropoff_medias.map((photo, index) => (
                      <li key={index} className="m-1">
                        <img
                          className="w-24 rounded-md"
                          src={photo.img}
                          alt="blabla"
                        ></img>
                        {/* <p>
                          {"latitude: " +
                            photo.lat +
                            " longitude: " +
                            photo.long}
                        </p> */}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Input
                labelContent="Commentaire"
                type="text"
                name="comment"
                onChange={commentChangeHandler}
                value={answer.comment}
                requiredField={true}
              ></Input>
            </div>
            <div className="py-3 bg-gray-50 text-right px-2 sm:px-6">
              <Button type="submit" style="primary">
                Submit
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </>
  );
};
export default AcceptMissionForm;
