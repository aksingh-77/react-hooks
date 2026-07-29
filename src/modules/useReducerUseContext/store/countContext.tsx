import { createContext } from "react";
import type {
  ActionType,
  CountContextType,
} from "../types/reducerWithContext.type";

export const initialValue: number = 0;

export const reducer = (state: number, action: ActionType): number => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
export const CountContext = createContext<CountContextType>({
  count: 0,
  dispatch: () => undefined,
});
