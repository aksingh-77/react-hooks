import ComponentA from "./components/componentA";
import { ChannelContext, UserContext } from "./contexts/userContext";

const ContextHookPage = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: "Abhishek" }}>
        <ChannelContext.Provider value={{ name: "Youtube" }}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ContextHookPage;
