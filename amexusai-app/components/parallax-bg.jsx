"use client"

import { useEffect, useState } from "react"

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      style={{
        backgroundImage:
          'url("/BgImage.png")',
        transform: `translateY(${offset * 0.5}px)`,
        opacity: 1,
        height: '150vh',
      }}
    />
  )
}

