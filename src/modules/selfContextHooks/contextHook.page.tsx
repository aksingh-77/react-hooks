import ComponentA from "./components/componentA";
import { PlayerContext, UserContext } from "./contexts";

export const ContextHookPage = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: "Testing provider here" }}>
        <PlayerContext.Provider value={{ plays: "dfhjfh" }}>
          <ComponentA />
        </PlayerContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
