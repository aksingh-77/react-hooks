import { ChannelContext, UserContext } from "../contexts/userContext";
import { useContext } from "react";

const ComponentC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {/* This is the difficult version of consuming the context api data */}
      {/* <div>
        <UserContext.Consumer>
          {(user) => {
            return <span>The logged in user {user.name}</span>;
          }}
        </UserContext.Consumer>
      </div>

      <ChannelContext.Consumer>
        {(channel) => {
          return <span>The subscribed channel is {channel.name}</span>;
        }}
      </ChannelContext.Consumer> */}

      {/* Easier way is with the useContext hook
       */}
      <div>The logged in user is {user.name}</div>
      <div>The subscribed channel is {channel.name}</div>
    </div>
  );
};

export default ComponentC;
