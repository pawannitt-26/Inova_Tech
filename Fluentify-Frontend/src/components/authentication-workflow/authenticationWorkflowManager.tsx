import { useState } from "react";
import { AgoraManager } from "../agora-manager/agoraManager";
import config from "../../../config.ts";




function AuthenticationWorkflowManager(props: { children?: React.ReactNode }) {
  const [channelName, setChannelName] = useState<string>("");
  const [joined, setJoined] = useState(false);

  const fetchTokenFunction = async () => {
      try {
        setJoined(true)
      } catch (error) {
        console.error(error);
      }
   
  };

  return (
    <div>
      {!joined ? (
        <>
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Channel name" />
          <button onClick={()=>void fetchTokenFunction()}>Join</button>
          {props.children}
        </>
      ) : (
        <>
          <button onClick={() => setJoined(false)}>Leave</button>
          <AgoraManager config={config}>
            {props.children}
          </AgoraManager>
        </>
      )}
    </div>
  );
}

export default AuthenticationWorkflowManager;
