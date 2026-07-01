import { motion } from "framer-motion";

const variants = {
  left: {
    x: -340,
    scale: 0.62,
    rotateY: 12,
    opacity: 0.75,
    filter: "brightness(75%) blur(1px)",
    zIndex: 1,
  },

  center: {
    x: 0,
    scale: 1.3,
    rotateY: 0,
    opacity: 1,
    filter: "brightness(100%) blur(0px)",
    zIndex: 5,
  },

  right: {
    x: 340,
    scale: 0.62,
    rotateY: -12,
    opacity: 0.75,
    filter: "brightness(75%) blur(1px)",
    zIndex: 1,
  },
};

export default function VideoCard({ video, position }) {
  return (
    <motion.div
      layout
      className={`video-card ${position}`}
      variants={variants}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 18,
        mass: 0.8,
         
      }}
      whileHover={
        position === "center"
          ? {
              scale: 1.03,
              y: -8,
            }
          : {}
      }
    >
      <motion.video
        className="video"
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
      />

      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{
          opacity: position === "center" ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        
      </motion.div>
    </motion.div>
  );
}