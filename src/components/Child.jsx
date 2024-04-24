import React, { useState } from "react";

const Child = ({
  name,
  isParentHighlighted,
  handleMouseEnter,
  handleMouseLeave,
  setIsChildHighlighted,
  isSuperParentHighlighted,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div
      className="box"
      style={{
        borderColor:
          isHighlighted || isParentHighlighted || isSuperParentHighlighted
            ? "brown"
            : "black",
      }}
      onMouseEnter={() => {
        setIsHighlighted(true);
        setIsChildHighlighted(true);
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHighlighted(false);
        setIsChildHighlighted(false);
        handleMouseLeave();
      }}
    >
      {name}
    </div>
  );
};

export default Child;
