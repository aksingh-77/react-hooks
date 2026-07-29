import { Button } from "@/components/ui/button";
import { CountContext } from "../store/countContext";
import { useContext } from "react";

const ComponentZ = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div className="flex gap-1">
        <span>
          Component X inside Component Y inside component C -{" "}
          {countContext.count}
        </span>
        <Button onClick={() => countContext.dispatch("increment")}>
          Increment
        </Button>

        <Button onClick={() => countContext.dispatch("decrement")}>
          Decrement
        </Button>

        <Button onClick={() => countContext.dispatch("reset")}>Reset</Button>
      </div>
    </div>
  );
};

export default ComponentZ;
