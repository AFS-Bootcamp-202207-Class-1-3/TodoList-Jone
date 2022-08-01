import "../static/css/TodoItem.css"
function TodoItem(props) {
  const { todoItem } = props;

  return (
    <div className="todo-item">
      <p>{todoItem}</p>
    </div>
  );
}

export default TodoItem;
