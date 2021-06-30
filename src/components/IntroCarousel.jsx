import React from "react";
import "../CSS/Carousel.css";
import CarouselBox from "./CarouselBox";
import ContainerHead from "./ContainerHead";

const IntroCarousel = () => {
  return (
    <>
      <div>
        <div className="carousel">
          <ContainerHead head="Learn From The Experts" />
          <div className="carousel__bar">
            <CarouselBox
              image="https://trafalgarproperties.b-cdn.net/wp-content/uploads/2018/07/team-placeholder.jpg"
              heading="IIT , Btech"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam!"
            />
            <CarouselBox
              image="https://trafalgarproperties.b-cdn.net/wp-content/uploads/2018/07/team-placeholder.jpg"
              heading="IIT , Btech"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam!"
            />
            <CarouselBox
              image="https://trafalgarproperties.b-cdn.net/wp-content/uploads/2018/07/team-placeholder.jpg"
              heading="IIT , Btech"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam!"
            />
            <CarouselBox
              image="https://trafalgarproperties.b-cdn.net/wp-content/uploads/2018/07/team-placeholder.jpg"
              heading="IIT , Btech"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroCarousel;
