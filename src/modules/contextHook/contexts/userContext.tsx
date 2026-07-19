import { createContext } from "react";

type UserContextType = { name: string };
type ChannelContextType = { name: string };
export const UserContext = createContext<UserContextType>({ name: "Abhishek" });
export const ChannelContext = createContext<ChannelContextType>({
  name: "Youtube",
});
