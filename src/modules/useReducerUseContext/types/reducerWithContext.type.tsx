import type { Dispatch } from "react";

export type ActionType = "increment" | "decrement" | "reset";
export type CountContextType = {
  count: number;
  dispatch: Dispatch<ActionType>;
};
