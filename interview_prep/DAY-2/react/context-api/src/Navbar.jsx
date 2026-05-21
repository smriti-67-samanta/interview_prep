import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      Current Theme: {theme}
    </nav>
  );
};

export default Navbar;