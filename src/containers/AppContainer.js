import React, { useState } from 'react';
import List from '../components/List';

const AppContainer = () => {
  const [list, setList] = useState(['a', 'b', 'c', 'd', 'e']);

  return <List elements={list} />;
};

export default AppContainer;
