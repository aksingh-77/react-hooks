import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";
import ComponentC from "../components/ComponentC";
import { CountContext, reducer, initialValue } from "../store/countContext";
import { useReducer } from "react";

const ReducerWithContextPage = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="flex flex-col gap-2 ml-2">
      <span>Count {count}</span>
      <CountContext.Provider value={{ count, dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
};

export default ReducerWithContextPage;
