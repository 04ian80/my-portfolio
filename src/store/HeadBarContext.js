import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const HeadBarContext = (props) => {
  const [menubar, setMenubar] = useState(false);

  const value = {
    menubar,
    open: (toggleMenu) => setMenubar(toggleMenu),
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
