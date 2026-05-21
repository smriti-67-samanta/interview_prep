import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    padding: '20px',
    minHeight: '200px'
  };

  return (
    <div style={styles}>
      Content
    </div>
  );
};

export default Content;