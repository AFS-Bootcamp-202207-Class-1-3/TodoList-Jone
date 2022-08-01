import { useState } from "react";

import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {
  const [todoItemList, setTodoItemList] = useState([]);
  const addTodoItem = (inputValue) => {
    setTodoItemList([...todoItemList, inputValue]);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <TodoGroup todoItemList={todoItemList} />
      <TodoGenerator addTodoItem={addTodoItem} />
    </div>
  );
}

export default TodoList;
