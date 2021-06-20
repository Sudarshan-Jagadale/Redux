import { Component } from "react";
import { connect } from "react-redux";
import "../counter.css";
import { addAmount, descrement, increment } from "../counterSlice";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: 5
    };
  }
  render() {
    const { count, dispatch } = this.props;
    const { add } = this.state;
    return (
      <div>
        <div className={"row"}>
          <button className="button" onClick={() => dispatch(increment())}>
            +
          </button>
          <span className={"counterText"} count={count}>
            {count}
          </span>
          <button className="button" onClick={() => dispatch(descrement())}>
            -
          </button>
        </div>
        <div className={"row"}>
          <div>
            <input
              className={"amountText"}
              type="number"
              value={add}
              onChange={(e) => {
                this.setState({ add: e.target.value });
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.value
});

export default connect(mapStateToProps)(CounterClass);
