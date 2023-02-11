import React from "react";
import { motion, useScroll } from "framer-motion";

import "../styles/Menu.css";

function Scroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
}

export default Scroll;
