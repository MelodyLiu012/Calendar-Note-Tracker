import { useState, useCallback } from "react";

const CustomScrollbar = ({ children, /*className*/}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
    //   className={"scrollhost-container"}
      onMouseOver={() => {setHovering(true)}}
      onMouseOut={() => {setHovering(false)}}
    >
      <div
        // className={`scrollhost ${className}`}
      >
        {children}
        <div
        //   className={"scroll-bar"}
          style={{ opacity: hovering ? 1 : 0 }}
        >
        </div>
      </div>
    </div>
  );
}

export default CustomScrollbar;