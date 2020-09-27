import React from "react";
import ListElement from "./ListElement";

const List = ({ elements }) => {
  return (
    <ul>
      {elements.map((el) => (
        <ListElement element={el} />
      ))}
    </ul>
  );
};

export default List;
