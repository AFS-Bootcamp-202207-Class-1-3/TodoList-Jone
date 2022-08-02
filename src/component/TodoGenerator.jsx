import { useState } from "react";
import "../static/css/TodoGenerator.css";

function TodoGenerator(props) {
  const { addTodoItem } = props;
  const [inputValue, setInputValue] = useState("");

  const handleGetInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue !== "") {
      addTodoItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="todo-generator">
      <input value={inputValue} onChange={handleGetInputValue}></input>
      <button onClick={handleAddItem}>add</button>
    </div>
  );
}
export default TodoGenerator;
