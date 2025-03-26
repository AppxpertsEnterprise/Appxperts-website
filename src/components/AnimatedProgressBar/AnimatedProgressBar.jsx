"use client";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedProgressBar = ({ progress, title, text, service }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className={`${
        service === "service"
          ? "service-details__skill"
          : service === "about"
          ? "about-three__content__skill"
          : "skill-one__content__skill"
      }`}
      ref={ref}
    >
      <div className="progress-box">
        <div className="graph-outer">
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={inView ? progress : 0}
              styles={buildStyles({
                textSize: "30px",
                pathTransitionDuration: 0.5,
                pathColor: "#3d72fc",
                textColor: "#39484a",
                backgroundColor: "#c8c8c8",
              })}
            />
          </div>

          <div className="inner-text count-box">
            <span className="count-text">
              <CountUp start={0} end={inView ? progress : 0} duration={1} />
            </span>
            <span className="count-Parsent">{progress}%</span>
          </div>
        </div>
      </div>
      <h5
        className={`${
          service === "about"
            ? "about-three__content__skill__title"
            : "skill-one__content__skill__title"
        }`}
      >
        {title}
      </h5>
      <p
        className={`${
          service === "about"
            ? "about-three__content__skill__text"
            : "skill-one__content__skill__text"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default AnimatedProgressBar;
