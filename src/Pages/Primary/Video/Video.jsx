import styled from "styled-components";
import ReactPlayer from "react-player";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";

const Video = () => {
    return (
        <VideoStyled className="Video">
            <Inset>
                <h1>Video</h1>
                <ReactPlayer url="https://www.youtube.com/watch?v=PDEk0mHOEHU" />
            </Inset>
        </VideoStyled>
    );
};

export default Video;

const VideoStyled = styled.div``;
