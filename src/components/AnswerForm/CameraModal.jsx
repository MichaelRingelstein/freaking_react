import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Camera from "react-html5-camera-photo";

const CameraModal = (props) => {
  const [pickupList, setPickupList] = useState("");
  const addPickUpHandler = () => {};

  return (
    <>
      <div className="absolute inset-0 z-10 bg-gray-700 bg-opacity-75 transition-opacity h-screen w-screen flex justify-center">
        <div className="max-w-3xl">

        <Camera
          onTakePhoto={(dataUri) => {
            props.handleTakePhoto(dataUri);
          }}
        />
        </div>
      </div>
    </>
  );
};
export default CameraModal;
