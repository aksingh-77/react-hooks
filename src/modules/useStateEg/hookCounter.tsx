import { Button } from "@/components/ui/button";
import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => setCount(count + 1)} variant={"secondary"}>
        Count {count}
      </Button>
    </div>
  );
};

export default HookCounter;
