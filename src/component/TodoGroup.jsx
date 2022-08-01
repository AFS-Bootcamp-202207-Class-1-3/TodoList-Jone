import TodoItem from "./TodoItem";
function TodoGroup(props) {
  const { todoItemList } = props;

  const items = todoItemList.map((todoItem, index) => (
    <TodoItem todoItem={todoItem} key={index} />
  ));
  return <div className="todo-group">{items}</div>;
}

export default TodoGroup;
