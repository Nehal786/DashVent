import React, { useState } from "react";
import Child from "./Child";

const Parent = ({
  name,
  children,
  isSuperParentHighlighted,
  handleMouseEnter,
  handleMouseLeave,
  isChildHighlighted,
  setIsChildHighlighted,
  setIsParentColoured,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div
      className="box"
      style={{
        borderColor:
          (isHighlighted || isSuperParentHighlighted) && !isChildHighlighted
            ? "brown"
            : "black",
      }}
      onMouseEnter={() => {
        setIsHighlighted(true);
        setIsParentColoured(true);
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHighlighted(false);
        setIsParentColoured(false);
        handleMouseLeave();
      }}
    >
      {name}

      <div className="children">
        {children.map((child, index) => (
          <Child
            key={index}
            name={child.name}
            isParentHighlighted={isHighlighted}
            handleMouseEnter={() => setIsHighlighted(true)}
            handleMouseLeave={() => setIsHighlighted(false)}
            isChildHighlighted={isChildHighlighted}
            setIsChildHighlighted={setIsChildHighlighted}
            isSuperParentHighlighted={isSuperParentHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default Parent;
