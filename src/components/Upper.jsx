import React from "react";
import Button from "@material-ui/core/Button";
import "../CSS/Upper.css";
import upperImg from "../image/upperImg.svg";

const Upper = () => {
  return (
    <>
      <div className="upper">
        <div className="upper__container">
          <div className="upper__wrapper">
            <div className="upper__left">
              <div className="upper__leftH">Learn Better ,Learn Fast</div>
              <div className="upper__lefth">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                pariatur illum!
              </div>
              <div className="upper__leftP1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                placeat unde dicta. Hic eligendi, nisi laborum optio ea minima
                officia rerum, velit quibusdam praesentium explicabo sequi
                fugiat quos a consequuntur minus voluptatum, aut incidunt sunt
                laudantium. Aperiam vero unde assumenda.
              </div>
              <div className="upper__leftP2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                placeat numquam veniam repudiandae quas aut quam quos,
                laboriosam reprehenderit sed!
              </div>
              <div className="upper__link2">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="upper__right">
              <img src={upperImg} alt="" />
              <div className="upper__rightRow">
                <div className="upper__rightRowItem">
                  <h1>15K</h1>
                  <span>Interactive quizzes</span>
                </div>
                <div className="upper__rightRowItem">
                  <h1>265+</h1>
                  <span>Video Lectures</span>
                </div>
              </div>
              <div className="upper__rightButton">
                <Button variant="contained" color="secondary">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upper;
