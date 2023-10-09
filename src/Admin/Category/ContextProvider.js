import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [isEditing, setisEditing] = useState(false);
  return (
    <Context.Provider value={{ isEditing, setisEditing }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;