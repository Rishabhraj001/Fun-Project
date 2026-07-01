import { motion } from "framer-motion";

export default function Controls({ nextSlide, prevSlide }) {
  return (
    <div className="controls">

      <motion.button
        className="control-btn"
        onClick={prevSlide}
        whileHover={{
          scale: 1.08,
          y: -2
        }}
        whileTap={{
          scale: 0.92
        }}
      >
        ←
      </motion.button>

      <motion.button
        className="control-btn"
        onClick={nextSlide}
        whileHover={{
          scale: 1.08,
          y: -2
        }}
        whileTap={{
          scale: 0.92
        }}
      >
        →
      </motion.button>

    </div>
  );
}