import CounterClass from "./counter/ClassBase/CounterClass";
import Counter from "./counter/FunctionBase/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Redux toolkit</h1>
      <h2> function base component </h2>
      <Counter />
      <h2> class base component </h2>
      <CounterClass />
    </div>
  );
}
