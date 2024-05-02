import React, { FC, useEffect } from 'react'
import AgoroRTC from 'agora-rtc-sdk-ng'


interface VideosProps {
  
}

const Videos: FC<VideosProps> = ({  }) => {
    const [client, setClient] = useState()

    useEffect(() => {
        const createClient = async () => {
            const rtcClient = AgoroRTC.createClient({mode:'rtc', codec:'vp8'}); // Use VP8 codec for compatibility
            client(rtcClient);
        };
        createClient()
    }
    )
  return (
    <div>
     Videos
    </div>
  )
}

export default Videos;