import { Button } from "@/components/ui/button";
import { CountContext } from "../store/countContext";
import { useContext } from "react";

const ComponentX = () => {
  const countContext = useContext(CountContext);
  return (
    <div className="flex gap-1">
      <span>Component X inside Component B {countContext.count}</span>
      <Button onClick={() => countContext.dispatch("increment")}>
        Increment
      </Button>

      <Button onClick={() => countContext.dispatch("decrement")}>
        Decrement
      </Button>

      <Button onClick={() => countContext.dispatch("reset")}>Reset</Button>
    </div>
  );
};

export default ComponentX;
