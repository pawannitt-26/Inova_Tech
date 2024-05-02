import React, { FC, useEffect, useState } from 'react';
import {
  AgoraRTCProvider,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
  RemoteUser,
  LocalVideoTrack,
} from 'agora-rtc-react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import Videos from '../Videos/Videos';
import Video2 from '../Video2/Video2';
import ProductWorkflow from '../../components/product-workflow/productWorkflow';

interface CourseHomeProps {}

const CourseHome: FC<CourseHomeProps> = ({}) => {
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: 'vp8', mode: 'rtc' })
  );
  const [channelName, setChannelName] = useState('test');
  const [AppID, setAppID] = useState('27454368e21d4658821368b0cf018b86');
  const [token, setToken] = useState(null);
  const [inCall, setInCall] = useState(false);

  useEffect(() => {
    console.log(inCall);
  }, [inCall]);

  return (
    <div>
      
      {!inCall ? (
        <div className='w-[70vw] h-full flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-3'>
        <div className='mt-4 text-[28px] font-bold'>
        Start Session
      </div>
        <button
          className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md"
          onClick={() => {
            setInCall(true);
          }}
        >
          Join Call
        </button>
        </div>
        </div>
      ) : (
        <div className="w-[30vw] h-[30vh]">
          {/* <AgoraRTCProvider client={client}> */}
          {/* <Videos channelName={channelName} AppID={AppID} token={token} /> */}
          <Video2 setVideoCall={setInCall} />
          {/* <ProductWorkflow /> */}
          <br />
          <br />
          {/* <button onClick={() => setInCall(false)}>End Call</button> */}
          {/* </AgoraRTCProvider> */}
        </div>
      )}
    </div>
  );
};

export default CourseHome;
