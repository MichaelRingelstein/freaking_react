import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  console.log(props.usersList);
  return (
    <Card className="w-96">
      <ul>
        {props.usersList.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
