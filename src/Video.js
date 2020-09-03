import React from 'react';
import "./Video.css";

function Video() {


    return (
      <div className="video">
        <video
          className="video__player"
          loop
          src="https://www.youtube.com/watch?v=EzKImzjwGyM"
        ></video>

        {/*Videofooter*/}
        {/*VideoSidebar*/}
      </div>
    );
}

export default Video
