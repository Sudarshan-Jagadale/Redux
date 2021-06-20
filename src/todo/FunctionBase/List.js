import { useSelector } from "react-redux";
import { todoList } from "../todoSlice";
import TODO from "./TODO";
export default function List(props) {
  const todos = useSelector(todoList);
  console.log(todos);
  return (
    <div>
      {todos && todos.map((item) => <TODO key={item.id} todo={item} />)}
      {JSON.stringify(todos)}
    </div>
  );
}
