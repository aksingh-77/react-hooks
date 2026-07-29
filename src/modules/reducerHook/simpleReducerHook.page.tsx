import { useReducer } from "react";
type actionType = "increment" | "decrement" | "reset";
const SimpleReducerHook = () => {
  const initialState = 0;
  const reducer = (state: number, action: actionType) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
    }
  };

  const [value, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count Value is {value}
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default SimpleReducerHook;
