import React, { useState } from "react";
import List from "../components/List";

const ListContainer = ({ elements }) => {
  const [listItems, setListItems] = useState(elements);
  const [draggedItemIndex, setDraggedItemIndex] = useState();

  const onDragStart = (element) => {
    setDraggedItemIndex(listItems.findIndex((el) => el === element));
  };

  const onDragEnter = (element) => {
    const dragOverIndex = listItems.findIndex((el) => el === element);
    if (dragOverIndex === draggedItemIndex) {
      return;
    }
    const newList = [...listItems];
    const movedElement = newList.splice(draggedItemIndex, 1);
    newList.splice(dragOverIndex, 0, movedElement);
    setDraggedItemIndex(dragOverIndex);
    setListItems(newList);
  };

  return (
    <List
      elements={listItems}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
    />
  );
};

export default ListContainer;
