import { useState } from 'react'
import AgoraUIKit from "agora-react-uikit";

const Video=()=> {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
        appId: '27454368e21d4658821368b0cf018b86',
        channel: 'TriNit',
        token: '007eJxTYJj4mIMzX8Noftzdbkmns/n26s2v5tV0mxx6kZQ6pfpL9gcFhuRk86QksyQDQzPTRJPUVAsLU9NEI0OjpMREU4tUU4PksvzXqQ2BjAxbndMYGKEQxGdjCCnK9MssYWAAAJb8ILM=' // use null or skip if using app in testing mode
    };
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    return videoCall ? (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
    ) : (<button onClick={() => setVideoCall(true)}>Start Call</button>);
}
export default Video;