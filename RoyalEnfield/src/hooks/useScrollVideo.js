// src/hooks/useScrollVideo.js

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/animations";

export const useScrollVideo = (
  videoRef,
  triggerRef,
  { onUpdate, scrub = true } = {}
) => {
  const rafId = useRef();

  useEffect(() => {
    const video = videoRef.current;
    const trigger = triggerRef.current;

    if (!video || !trigger) return;

    let scrollTrigger;

    const init = () => {
      // Prevent autoplay
      video.pause();
      video.currentTime = 0;

      const playhead = {
        frame: 0,
      };

      gsap.to(playhead, {
        frame: video.duration,
        ease: "none",

        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom bottom",
          scrub: scrub,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            if (onUpdate) onUpdate(self.progress);
          },
        },

        onUpdate: () => {
          cancelAnimationFrame(rafId.current);

          rafId.current = requestAnimationFrame(() => {
            if (video.readyState >= 2) {
              video.currentTime = playhead.frame;
            }
          });
        },
      });
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener("loadedmetadata", init, { once: true });
    }

    // Never allow the browser to play the video
    const stopPlayback = () => {
      video.pause();
    };

    video.addEventListener("play", stopPlayback);

    return () => {
      cancelAnimationFrame(rafId.current);

      video.removeEventListener("play", stopPlayback);
      video.removeEventListener("loadedmetadata", init);

      if (scrollTrigger) {
        scrollTrigger.kill();
      }

      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [videoRef, triggerRef, onUpdate, scrub]);
};

export default useScrollVideo;