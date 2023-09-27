import React, { useContext } from "react";

export const Video = () => {

    return (
        <video id="hyperspaceVideo" width="420">
            <source src="/workspaces/stars_wars_GDW/src/img/hyper_space.mp4" type="video/mp4" />
            Your browser does not support HTML video.
        </video>
    )
}