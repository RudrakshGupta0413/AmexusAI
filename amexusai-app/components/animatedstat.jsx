"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const gradientStyle = {
  background: "linear-gradient(90deg, #2E8B57 0%, #9ACD32 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "brightness(1.1) contrast(1.05)",
};

export const AnimatedStat = ({ prefix, targetValue, label, suffix = "%" }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[#171B26] rounded-2xl p-4 md:p-8 flex flex-col items-center"
    >
      {prefix && (
        <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4 font-mono">
          {prefix}
        </div>
      )}
      {!prefix && (
        <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4 invisible">
          Placeholder
        </div>
      )}
      <div
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 h-[60px] md:h-[80px] flex items-center justify-center"
        style={gradientStyle}
      >
        {isInView ? (
          <>
            <CountUp start={0} end={targetValue} duration={3} separator="," />
            <span>{suffix}</span>
          </>
        ) : (
          "0"
        )}
      </div>
      <div className="text-md md:text-sm text-[#BEBEBE] mt-1 md:mt-2 whitespace-pre-line font-mono text-center">
        {label}
      </div>
    </div>
  );
};
