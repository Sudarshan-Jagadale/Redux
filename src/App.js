import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Counter from "./counter/index";
import ToDo from "./todo/index";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <span className={"nav"}>
            <Link to="/"> Home </Link>
          </span>
          <span className={"nav"}>
            <Link to="/counter"> Counter </Link>
          </span>
          <span className={"nav"}>
            <Link to="/todo"> Todo </Link>
          </span>
        </nav>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/todo">
            <ToDo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
