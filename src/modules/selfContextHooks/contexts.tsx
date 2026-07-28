import { createContext } from "react";

export type UserContextType = { name: string };
export type PlayerContextType = { plays: string };

export const UserContext = createContext<UserContextType>({ name: "    " });
export const PlayerContext = createContext<PlayerContextType>({ plays: " " });
