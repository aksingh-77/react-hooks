import { ChannelContext, UserContext } from "../contexts/userContext";

const ComponentC = () => {
  return (
    <div>
      <div>
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
      </ChannelContext.Consumer>
    </div>
  );
};

export default ComponentC;
