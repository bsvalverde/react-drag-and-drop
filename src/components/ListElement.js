import React from "react";

const ListElement = ({ element, onDragStart, onDragEnter }) => {
  return (
    <li
      draggable
      onDragStart={() => onDragStart(element)}
      onDragEnter={() => onDragEnter(element)}
    >
      <div>{element}</div>
    </li>
  );
};

export default ListElement;
