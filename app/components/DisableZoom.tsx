"use client";
import { useEffect } from "react";

export default function DisableZoom() {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault(); // Prevent Ctrl + wheel zoom
    };

    const handleGesture = (e: Event) => {
      e.preventDefault(); // Prevent pinch zoom
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("gesturestart", handleGesture as EventListener);
    window.addEventListener("gesturechange", handleGesture as EventListener);
    window.addEventListener("gestureend", handleGesture as EventListener);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("gesturestart", handleGesture as EventListener);
      window.removeEventListener("gesturechange", handleGesture as EventListener);
      window.removeEventListener("gestureend", handleGesture as EventListener);
    };
  }, []);

  return null;
}
