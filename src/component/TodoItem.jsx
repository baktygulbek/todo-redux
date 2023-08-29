import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import Card from "./ui/Card";

const TodoItem = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const { title, date, id } = props.items;

  const deleteHandler = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <Card>
      <li>
        <h4>{title}</h4>
        <h3>{date}</h3>
        <button onClick={deleteHandler}>delete</button>
      </li>
    </Card>
  );
};

export default TodoItem;
