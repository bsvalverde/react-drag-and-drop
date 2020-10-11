import React, { useState } from 'react';
import ListContainer from './ListContainer';

const AppContainer = () => {
  const [list, setList] = useState(['a', 'b', 'c', 'd', 'e']);

  return <ListContainer elements={list} />;
};

export default AppContainer;
