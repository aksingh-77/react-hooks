import { Button } from "@/components/ui/button";
import { useState } from "react";

const StateMgmtHooks = () => {
  const [count, setCount] = useState<number>();
  return (
    <div className="flex gap-3">
      <Button onClick={() => setCount((count ?? 0) + 1)}>{count}</Button>
    </div>
  );
};

export default StateMgmtHooks;
