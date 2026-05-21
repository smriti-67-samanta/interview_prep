import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import Content from './Content';
import ThemeButton from './ThemeButton';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;