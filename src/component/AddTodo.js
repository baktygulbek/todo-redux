import React, { useState } from "react";
import { addTask } from "../store/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "./ui/Card";
import classes from "./AddTodo.module.css";
import { closeTodo, openedModal } from "../store/moduleSlice";
import ErrorModal from './ErrorModal'
import Button from "./ui/Button";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const {isOpened,isConfirmed,isDecinend}=useSelector(state=>state.module)

  //  const titleChangeHandler = (e) => {
  //    setTitle(e.target.value);
  //  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(title.trim().length === 0 || date.trim().length===0){
      dispatch(openedModal({
        title:'no do not',
        message:'error'
      }))
      return
    }
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
    const closedHandler = () =>{
      dispatch(closeTodo())
    }
  return (
    <React.Fragment>
      {isOpened && <ErrorModal title={isConfirmed} message={isDecinend} onClick={closedHandler}/> }
      <Card className={classes.input}>
      <form  onSubmit={onSubmitHandler}>
        <input
          value={title}
          type="text"
          onChange={(event) => setTitle(event.target.value)}/>
          
        <input value={date} type="date" onChange={dateChangeHandler} />
        <Button type ='submit' >add</Button>
      </form>
    </Card>
    </React.Fragment>
  );
};

export default AddTodo;
