import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import VideoCard from "./VideoCard";
import Controls from "./Controls";
import "./carousel.css";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video1.mp4";
import video3 from "../assets/video1.mp4";

const initialVideos = [
  {
    id: 1,
    src: video1,
    title: "Video One",
  },
  {
    id: 2,
    src: video2,
    title: "Video Two",
  },
  {
    id: 3,
    src: video3,
    title: "Video Three",
  },
];

export default function VideoCarousel() {
  const [videos, setVideos] = useState(initialVideos);

  const nextSlide = () => {
    setVideos((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const prevSlide = () => {
    setVideos((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  return (
    <section className="carousel-section">

      <h1 className="carousel-title">
        Premium Video Showcase
      </h1>

      <div className="carousel">

        <AnimatePresence initial={false}>

          {videos.map((video, index) => {

            let position = "center";

            if (index === 0) position = "left";
            if (index === 1) position = "center";
            if (index === 2) position = "right";

            return (
              <VideoCard
                key={video.id}
                video={video}
                position={position}
              />
            );
          })}

        </AnimatePresence>

      </div>

      <Controls
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />

    </section>
  );
}