import CounterClass from "./ClassBase/CounterClass";
import Counter from "./FunctionBase/Counter";
import "./counter.css";
import { useDispatch } from "react-redux";
import { resetCounter } from "./counterSlice";
function Index(props) {
  const dispatch = useDispatch();

  return (
    <div className="counter row">
      <h1>Redux toolkit</h1>

      <h2> function base component </h2>

      <button className="reset" onClick={() => dispatch(resetCounter())}>
        Reset Counter
      </button>
      <Counter />
      <h2> class base component </h2>
      <CounterClass />
    </div>
  );
}

export default Index;
