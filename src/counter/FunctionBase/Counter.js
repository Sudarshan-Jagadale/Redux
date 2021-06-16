import { useDispatch, useSelector } from "react-redux";
import { addAmount, descrement, increment, selectCount } from "../counterSlice";
import "../counter.css";
import { useState } from "react";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(5);

  return (
    <div>
      <div className={"row"}>
        <button className={"button"} onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={"counterText"}>{count}</span>
        <button className={"button"} onClick={() => dispatch(descrement())}>
          -
        </button>
      </div>
      <div>
        <input
          className={"amountText"}
          type="number"
          value={add}
          onChange={(e) => {
            setAdd(e.target.value);
          }}
        ></input>
        <button
          className={"button"}
          onClick={() => dispatch(addAmount(Number(add) || 0))}
        >
          Additional Amount
        </button>
      </div>
    </div>
  );
}
export default Counter;
