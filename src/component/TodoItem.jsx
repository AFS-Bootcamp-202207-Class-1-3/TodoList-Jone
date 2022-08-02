import "../static/css/TodoItem.css"
function TodoItem(props) {
  const { todoItem } = props;

  return (
    <div className="todo-item">
      <li>{todoItem}</li>
    </div>
  );
}

export default TodoItem;
