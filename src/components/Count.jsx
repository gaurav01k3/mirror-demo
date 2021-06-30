import React from "react";
import CountUp from "react-countup";
import "../CSS/Count.css";

const Count = () => {
  return (
    <>
      <div className="count__container">
        <div className="count__wrapper">
          <div data-aos="zoom-in" className="count__item">
            <h1>
              <CountUp end={2000} suffix="K" duration={6} />
            </h1>
            <div className="count__itemText">Downloads</div>
          </div>
          <div data-aos="zoom-in" className="count__item">
            <h1>
              <CountUp end={2000} suffix="K" duration={6} />
            </h1>
            <div className="count__itemText">Happy students</div>
          </div>
          <div data-aos="zoom-in" className="count__item">
            <h1>
              <CountUp end={2000} suffix="K" duration={6} />
            </h1>
            <div className="count__itemText">Doubt Solved</div>
          </div>
          <div data-aos="zoom-in" className="count__item">
            <h1>
              <CountUp end={2000} suffix="K" duration={6} />
            </h1>
            <div className="count__itemText">Classes completed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
