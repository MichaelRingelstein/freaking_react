import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/AddUser/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHanlder = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(usersList.length);
  };

  return (
    <div className="grid auto-rows-auto gap-4 place-content-center justify-items-center">
      <div>
        <AddUser onAdd={addUserHanlder} />
      </div>
      {(usersList.length > 0) &&
        <div>
        <UsersList usersList={usersList}></UsersList>
      </div>
      }
    </div>
  );
}

export default App;
