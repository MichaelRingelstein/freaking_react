import React, { useState } from "react";
import ReactDom from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const AddUser = (props) => {
  const [enterredUserName, setEnterredUserName] = useState("");
  const [enterredAge, setEnterredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const notify = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enterredUserName.trim().length === 0 ||
      enterredAge.trim().length === 0
    ) {
      notify("Please enter a valid name and age (no empty values)");
      setIsValid(false);
      return;
    }
    if (+enterredAge < 1) {
      notify("Negative ages not allowed")
      setIsValid(false);
      return;
    }
    props.onAdd(enterredUserName, enterredAge);
    setIsValid(true);
    setEnterredAge("");
    setEnterredUserName("");
  };

  const userNameChangeHandler = (event) => {
    setIsValid(true);
    setEnterredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setIsValid(true);
    setEnterredAge(event.target.value);
  };

  return (
    <>
    {ReactDom.createPortal(
        <ToastContainer />,
        document.getElementById('toaster')
    )}
      <Card className="w-96">
        <form className="grid auto-rows-auto gap-4" onSubmit={addUserHandler}>
          <label htmlFor="userName" className="text-gray-700">
            User name:{" "}
          </label>
          <Input
            isValid={isValid}
            type="text"
            name="userName"
            value={enterredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age" className="text-gray-700">
            Age:{" "}
          </label>
          <Input
            isValid={isValid}
            type="number"
            name="age"
            value={enterredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
