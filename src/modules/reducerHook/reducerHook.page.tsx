import { useReducer } from "react";

type ActionType = "increment" | "decrement" | "reset";
const ReducerHookPage = () => {
  const initialState: number = 0;

  const reducer = (state: number, action: ActionType) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [value, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex gap-1 flex-col">
      <span>{value}</span>

      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default ReducerHookPage;
