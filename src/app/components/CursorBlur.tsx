"use client";

import { useEffect, useRef } from "react";

export default function CursorBlur() {
  const blurRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 }); // Posisi blur
  const target = useRef({ x: 0, y: 0 }); // Target posisi (kursor)

  useEffect(() => {
    const moveBlur = (e: MouseEvent) => {
      target.current = { x: e.clientX - 120, y: e.clientY - 120 };
    };

    window.addEventListener("mousemove", moveBlur);

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1; // Lerp effect
      pos.current.y += (target.current.y - pos.current.y) * 0.1;

      if (blurRef.current) {
        blurRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", moveBlur);
  }, []);

  return (
    <div
      ref={blurRef}
      className="fixed w-60 h-60 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-50 pointer-events-none"
    />
  );
}
