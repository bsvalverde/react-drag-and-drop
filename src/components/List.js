import React from "react";
import ListElement from "./ListElement";

const List = ({ elements, onDragStart, onDragEnter }) => {
  return (
    <ul>
      {elements.map((el) => (
        <ListElement
          key={el}
          element={el}
          onDragStart={onDragStart}
          onDragEnter={onDragEnter}
        />
      ))}
    </ul>
  );
};

export default List;
