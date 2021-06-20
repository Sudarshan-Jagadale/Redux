import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./FunctionBase/List";
import "./todo.css";
import { saveTodo, todoList } from "./todoSlice";

export default function Index(props) {
  const dispatch = useDispatch();
  const todo = useSelector(todoList);
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const save = () => {
    console.log("save");
    dispatch(saveTodo(name, desc));
  };
  return (
    <div className="main">
      <div>
        <div className="label"> Name </div>
        <input
          className="input"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <div> Description</div>
        <textarea
          className="input"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <button className="button" onClick={save}>
        Save
      </button>
      <List />
      {JSON.stringify(todo)}
    </div>
  );
}
