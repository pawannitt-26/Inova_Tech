import React, { FC, useState } from 'react'
import AgoraUIKit, { PropsInterface, layout, TracksConfigure } from "agora-react-uikit";

interface Video2Props {
    setVideoCall : any
}

const Video2: FC<Video2Props> = ({ setVideoCall  }) => {
    const [role, setRole] = useState("TEACHER");
  const rtcProps : PropsInterface = {
    appId: '27454368e21d4658821368b0cf018b86',
    channel: 'TriNit Final',
    token: null, // use null or skip if using app in testing mode
    role:(role==="TEACHER")?"host":"audience",
    layout: layout.grid,
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <div className='absolute top-0 left-0 bottom-0 z-10 right-0 flex justify-center items-center bg-[#000000a9]'>
        <div className='noScroll' style={{display: 'flex', width: '90vw', height: '90vh', background:"transparent", overflow:'hidden'}}>
            <AgoraUIKit
                rtcProps={rtcProps}
                callbacks={callbacks}
                styleProps={{
                        localBtnContainer: {backgroundColor: '#7272F1'}}
                }
                
                />
        </div>
    </div>
  )
}

export default Video2;