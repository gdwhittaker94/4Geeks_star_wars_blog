import React from "react";

export const Video = () => {

    return (
        <video id="hyperspaceVideo" className="video">
            <source src="../../img/video.mp4" type="video/mp4" />
            Your browser does not support HTML video.
        </video>
    )
}