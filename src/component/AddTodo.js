import React, { useState } from "react";
import { addTask } from "../store/taskSlice";
import { useDispatch } from "react-redux";
import Card from "./ui/Card";
import classes from "./AddTodo.module.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  //  const titleChangeHandler = (e) => {
  //    setTitle(e.target.value);
  //  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        title: title,
        date: date,
        id: Math.random().toString(),
      })
    );
    setTitle("");
    setDate("");
  };

  return (
    <Card>
      <form className={classes.input}>
        <input
          value={title}
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input value={date} type="date" onChange={dateChangeHandler} />
        <button onClick={onSubmitHandler}>add</button>
      </form>
    </Card>
  );
};

export default AddTodo;
