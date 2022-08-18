import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import Button from "../UI/Button";
import instanceAxios from "../../api";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import CameraModal from "./CameraModal";
import ReactDOM from "react-dom";

const impoundmentList = [
   "Pouchet",
   "Louvre",
   "Saint Ouen",
   "Boulogne"
];

const AnswerForm = (props) => {
  const submitAnswerHandler = () => {};
  const [answer, setAnswer] = useState({
    id: props.mission.id,
    shift_id: props.mission.shift_id,
    missionType: props.mission.missionType,
    impoundment: { id: 1, name: "Pouchet" },
    quantity: props.mission.quantity,
    vins: props.mission.vins,
    pickUp: props.mission.pickUp,
    dropOff: props.mission.dropOff,
    fleet: props.mission.fleet,
    comment: props.mission.comment,
    status: props.mission.status,
    dropOffs: "",
    pickUps: "",
  });
  const [pickUpPhotos, setPickUpPhotos] = useState([]);
  const [dropOffPhotos, setDropOffPhotos] = useState([]);
  const [openCamera, setOpenCamera] = useState(false);
  const [comment, setComment] = useState("");

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
      setPickUpPhotos((prev) => [
        ...prev,
        {
          img: URL.createObjectURL(file),
          lat: coordinates[0],
          long: coordinates[1],
        },
      ]);
    });
  };

  const onDropOffPhotoAdded = (e) => {
    const [file] = e.target.files;
    console.log("Adding a drop off photo");
    getPosition().then((coordinates) => {
      console.log(coordinates);
      setDropOffPhotos((prev) => [
        ...prev,
        {
          img: URL.createObjectURL(file),
          lat: coordinates[0],
          long: coordinates[1],
        },
      ]);
    });
  };

  const vehicleIdsChangeHandler = (event) => {
    setAnswer((prevAnswer) => ({ ...prevAnswer, vins: event.target.value }));
  };
  const impoundmentChangeHandler = (impoundment) => {
    setAnswer((prevAnswer) => ({ ...prevAnswer, impoundment: impoundment }));
  };
  const dropOffsChangeHandler = (event) => {
    console.log("changing drop-off address");
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      dropOffs: event.target.value,
    }));
  };
  const pickUpsChangeHandler = (event) => {
    console.log("changing pick-up address");
    setAnswer((prevAnswer) => ({ ...prevAnswer, pickUps: event.target.value }));
  };

  const handleTakePhoto = (dataUri) => {
    // Do stuff with the photos...
    console.log("takePhoto");
    var coordinates = getPosition;

    // setPickUpPhotos((prev) => [
    //   ...prev,
    //   { img: dataUri, lat: lat, long: long },
    // ]);
    setOpenCamera(!openCamera);
  };
  const handleOpenCamera = () => {
    setOpenCamera(!openCamera);
  };

  const translateStatus = (statusId) => {
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

  console.log(pickUpPhotos);
  console.log(dropOffPhotos);

  const reader = new FileReader();

  const pickUpPhotoButton = (
    <label
      htmlFor="pickup-file"
      className="flex text-center flex-col justify-center items-center w-fit h-fit px-4 py-2 text-white rounded-lg cursor-pointer hover:bg-bray-800 bg-blue-700  border-blue-600 hover:border-blue-500 hover:bg-blue-600"
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
      className="flex text-center flex-col justify-center items-center w-fit h-fit px-4 py-2 text-white rounded-lg cursor-pointer hover:bg-bray-800 bg-blue-700  border-blue-600 hover:border-blue-500 hover:bg-blue-600"
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
        <Card>
          <div className="p-6">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text:sm font-medium ${
                translateStatus(props.mission.status).style
              }`}
            >
              {translateStatus(props.mission.status).label}
            </span>

            <div className="grid grid-cols-2 py-2">
              <div className="col-span-2 md:col-span-1">
                <p className="text-sm font-normal ">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    Type:{" "}
                  </span>{" "}
                  {props.mission.missionType.name}
                </p>

                <p className="text-sm font-normal">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    quantity:{" "}
                  </span>
                  {props.mission.quantity}
                </p>
                <p className="text-sm font-normal">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    Scooters:{" "}
                  </span>{" "}
                  {props.mission.vins}
                </p>
                <p className="text-sm font-normal">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    fleets:{" "}
                  </span>{" "}
                  {props.mission.fleet}
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 aria-hidden">
                <p className="text-sm font-normal">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    Pick-up address:{" "}
                  </span>{" "}
                  {props.mission.pickUp}
                </p>
                <p className="text-sm font-normal">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    drop-off address:{" "}
                  </span>{" "}
                  {props.mission.dropOff}
                </p>

                <p className="text-sm font-normal">
                  <span className="text-xs font-bold tracking-tight uppercase">
                    Comment:{" "}
                  </span>{" "}
                  {props.mission.comment}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 justify-center self-center flex-col">
        <form onSubmit={submitAnswerHandler}>
          <Card className="overflow-visible">
            <div className="grid auto-rows-auto max-w-md gap-4 px-4 py-5 sm:p-6">
              {answer.missionType.id === 4 ? (
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
              )}
              <Input
                labelContent="Scooters moved"
                type="text"
                name="vehicle_ids"
                onChange={vehicleIdsChangeHandler}
                value={answer.vins}
                requiredField={true}
              ></Input>
              <div className="flex gap-2 items-end">
                <div className="grow">
                  <Input
                    labelContent="Pick-up adress"
                    type="text"
                    name="pick_up"
                    onChange={pickUpsChangeHandler}
                    value={answer.pickUps}
                    requiredField={true}
                  ></Input>
                </div>
                <div>{pickUpPhotoButton}</div>
              </div>

              {pickUpPhotos.length > 0 && (
                <ul className="flex flex-wrap gap-4">
                  {pickUpPhotos.map((photo, index) => (
                    <li key={index}>
                      <img
                        className="w-24 rounded-md"
                        src={photo.img}
                        alt="blabla"
                      ></img>
                      <p>
                        {"latitude: " + photo.lat + " longitude: " + photo.long}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-2 items-end">
                <div className="grow">
                  <Input
                    labelContent="Drop-off adress"
                    type="text"
                    name="drop_off"
                    onChange={dropOffsChangeHandler}
                    value={answer.dropOffs}
                    requiredField={true}
                  ></Input>
                </div>
                <div>{dropOffPhotoButton}</div>
              </div>

              {dropOffPhotos.length > 0 && (
                <ul className="flex flex-wrap gap-4">
                  {dropOffPhotos.map((photo, index) => (
                    <li key={index}>
                      <img
                        className="w-24 rounded-md"
                        src={photo.img}
                        alt="blabla"
                      ></img>
                      <p>
                        {"latitude: " + photo.lat + " longitude: " + photo.long}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <Input
                labelContent="Commentaire"
                type="text"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                requiredField={true}
              ></Input>
            </div>
            <div className="py-3 bg-gray-50 text-right px-2 sm:px-6">
              <Button type="submit">Submit</Button>
            </div>
          </Card>
        </form>
      </div>
    </>
  );
};
export default AnswerForm;
