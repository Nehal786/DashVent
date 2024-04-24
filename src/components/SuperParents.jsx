import React, { useState } from "react";
import Parent from "./Parent";

const SuperParent = ({ name, children }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isChildHighlighted, setIsChildHighlighted] = useState(false);
  const [isParentColoured, setIsParentColoured] = useState(false);

  return (
    <div
      className="box"
      style={{
        borderColor:
          isHighlighted && !isChildHighlighted && !isParentColoured
            ? "brown"
            : "black",
      }}
      onMouseEnter={() => {
        setIsHighlighted(true);
      }}
      onMouseLeave={() => {
        setIsHighlighted(false);
      }}
    >
      {name}

      <div className="children">
        {children.map((child, index) => (
          <Parent
            key={index}
            name={child.name}
            children={child.children}
            isSuperParentHighlighted={isHighlighted}
            handleMouseEnter={() => setIsHighlighted(true)}
            handleMouseLeave={() => setIsHighlighted(false)}
            isChildHighlighted={isChildHighlighted}
            setIsChildHighlighted={setIsChildHighlighted}
            isParentColoured={isParentColoured}
            setIsParentColoured={setIsParentColoured}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperParent;
