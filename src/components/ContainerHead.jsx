import React from "react";

const ContainerHead = ({ head, para }) => {
  return (
    <>
      <div className="carousel__containerHead">
        <div className="carousel__head">
          <div className="carousel__text">
            <h1>{head}</h1>
            {/* <p>{para}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerHead;
