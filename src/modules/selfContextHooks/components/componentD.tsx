import { PlayerContext, UserContext } from "../contexts";
import { useContext } from "react";

const ComponentD = () => {
  const user = useContext(UserContext);
  const player = useContext(PlayerContext);
  return (
    <div>
      <div>this is with new method userContext {user.name}</div>
      <div>This is the new method playerContext {player.plays}</div>
    </div>
  );
};

export default ComponentD;
