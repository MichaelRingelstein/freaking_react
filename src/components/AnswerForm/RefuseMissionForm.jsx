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

const refuseReasons = ["No scooter at indicated address", "No time to do it"];

const RefuseMissionForm = (props) => {
  const submitAnswerHandler = () => {};
  const [answer, setAnswer] = useState({
    id: props.mission.id,
    shift_id: props.mission.shift_id,
    refuse_reason: "",
    comment: "",
  });
  const [comment, setComment] = useState("");

  const refuseReasonChangeHandler = (reason) => {
    setAnswer((prev) => ({ ...prev, refuse_reason: reason }));
  };

  return (
    <>
      <div className="w-5/6 max-w-6xl sm:w-3/4 lg:w-1/2 justify-center self-center flex-col">
        <form onSubmit={submitAnswerHandler}>
          <Card className="overflow-visible bg-white ">
            <div className="grid auto-rows-auto max-w-md gap-4 px-4 py-5 sm:p-6">
              <Dropdown
                label="Refuse reason"
                onChange={refuseReasonChangeHandler}
                list={refuseReasons}
                requiredField={true}
              ></Dropdown>

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
              <Button type="submit" style="primary">Submit</Button>
            </div>
          </Card>
        </form>
      </div>
    </>
  );
};
export default RefuseMissionForm;
