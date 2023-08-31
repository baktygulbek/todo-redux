import React from "react";
import { useDispatch } from "react-redux";
import { checkboxTask, deleteTask } from "../store/taskSlice";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { title, date, id, complated } = props.items;

  const deleteHandler = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const checkboxChange = () => {
    dispatch(
      checkboxTask({
        id: id,
        complated: !complated,
      })
    );
  };

  return (
    <div className={classes.task}>
      <li className={complated ? classes.line : ""}>
        <input type={"checkbox"} id={id} onClick={checkboxChange} />
        <h4>{title}</h4>
        <h3>{date}</h3>
        <button onClick={deleteHandler}>delete</button>
      </li>
    </div>
  );
};

export default TodoItem;
