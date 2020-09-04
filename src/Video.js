import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
     return (
       <div className="video">
         <video
           onClick={handleVideoPress}
           className="video__player"
           loop
           ref={videoRef}
           src="https://youtu.be/g8yGxDMyGiE?list=LLj4LcjZrZAVSWkH3G_d7KsA"
         ></video>

         <VideoFooter />

         <VideoSidebar />
         
       </div>
     );
}

export default Video
