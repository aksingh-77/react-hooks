import { PlayerContext, UserContext } from "../contexts";

// This is the basic and old way of context consumer creation

const ComponentC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>User context value {user.name}</div>;
        }}
      </UserContext.Consumer>

      <PlayerContext.Consumer>
        {(plays) => {
          return <span>Player context value {plays.plays}</span>;
        }}
      </PlayerContext.Consumer>
    </div>
  );
};

export default ComponentC;
