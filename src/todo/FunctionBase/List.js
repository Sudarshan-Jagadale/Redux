import { useSelector } from "react-redux";
import { todos } from "../todoSlice";
import TODO from "./TODO";
export default function List(props) {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {/*todoList && todoList.map((item) => <TODO key={item.id} todo={item} />)*/}
      {JSON.stringify(todos)}
    </div>
  );
}
