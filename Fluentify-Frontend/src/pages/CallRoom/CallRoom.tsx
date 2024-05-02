import React, { FC, useEffect, useState } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng";
import {config} from "./config";
import { Video, LocalAudioTrack, LocalVideoTrack, RemoteParticipant } from 'agora-rtc-react';

interface CallRoomProps {
  
}

const CallRoom: FC<CallRoomProps> = ({  }) => {
    const  { appId, token, channelName } = config;
const [agoraEngine, setAgoraEngine] = useState(null);
useEffect(() => {
    const createClient = async () => {
        const rtcClient = new RTC.Client({ codec: 'vp8' }); // Use VP8 codec for compatibility
        setClient(rtcClient);

        await rtcClient.init(appId, token);
        await rtcClient.join(channelName);

        rtcClient.on('user-published', async (user, mediaType) => {
            await rtcClient.subscribe(user, mediaType);
            if (mediaType === 'video') {
                remoteUsers.current.push(user);
            }
        });

        rtcClient.on('user-left', (user) => {
            const index = remoteUsers.current.findIndex((u) => u === user);
            remoteUsers.current.splice(index, 1);
        });

        const audioTrack = await LocalAudioTrack.create();
        const videoTrack = await LocalVideoTrack.create();
        await rtcClient.publish([audioTrack, videoTrack]);
        setLocalTracks([audioTrack, videoTrack]);
    };

    createClient();
}, [appId, channelName, token]);

  return (
    <div>
     CallRoom
    </div>
  )
}

export default CallRoom;