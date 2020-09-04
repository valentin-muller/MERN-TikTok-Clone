import React from 'react'
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

function VideoSidebar() {
    return (
        <div className="videoSidebar">

            <div className="videoSidebar__button">
                <FavoriteIcon fontSize="large" />
            </div>

            <div className="videoSidebar__button">

            </div>

            <div className="videoSidebar__button">

            </div>
            
        </div>
    )
}

export default VideoSidebar
