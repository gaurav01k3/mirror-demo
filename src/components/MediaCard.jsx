import React from "react";
import ReactPlayer from "react-player";
import "../CSS/MediaCard.css";

const MediaCard = () => {
  return (
    <>
      <div id="vids" className="media__container">
        <div className="media__header">Video lectures</div>
        <div className="media__wrapper">
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls="true"
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
          <div className="media__item">
            <div className="media__title">Lorem ipsum dolor sit.</div>
            <ReactPlayer
              controls
              width="280px"
              height="200px"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
