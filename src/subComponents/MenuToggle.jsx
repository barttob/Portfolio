import * as React from "react";
import { motion } from "framer-motion";

import '../styles/Menu.css';


const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="4"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} className="menu__toggler">
    <svg width="40" height="40" viewBox="0 0 40 40">
      <Path
        variants={{
          closed: { d: "M 6 10 L 32 10" },
          open: { d: "M 6 34 L 32 10" },
        }}
      />
      <Path
        d="M 6 22 L 32 22"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 6 34 L 32 34" },
          open: { d: "M 6 10 L 32 34" },
        }}
      />
    </svg>
  </button>
);
