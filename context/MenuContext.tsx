'use client';
import { createContext, PropsWithChildren, useState } from 'react';

export const MenuContext = createContext<{
  isOpen: boolean;
  toggleMenu: () => void;
}>({
  isOpen: false,
  toggleMenu: () => {},
});

export const MenuContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
