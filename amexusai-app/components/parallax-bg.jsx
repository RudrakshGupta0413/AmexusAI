"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ height: "150vh" }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <Image
          src="/BgImage.png"
          alt="Background"
          fill
          priority
          quality={75}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
