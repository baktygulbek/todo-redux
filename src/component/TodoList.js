import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const todos = useSelector((state) => state.tasks.todo);
  console.log(todos);

  return (
    <div>
      <ul>
        {todos.map((el) => (
          <TodoItem key={el.id} items={{ id:el.id, title: el.name, date: el.date }} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
