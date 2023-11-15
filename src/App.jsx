import './App.css';
import Textform from './compontents/Textform/Textform';
import { Navbar } from './compontents/navbar/Navbar';
import Footer from './compontents/footer/Footer';
import { useState , useEffect } from 'react';

function App() {
  
  const [darkMode,setDarkMode] = useState(true);

  useEffect(() => {
    // Function to handle theme changes
    function handleThemeChange(event) {
      if(event.matches===true){
        setDarkMode(true);
      }
      else{
        setDarkMode(false);
      }
    }

    // Create a MediaQueryList object to track theme changes
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Add a listener to detect changes in the system theme
    themeMediaQuery.addListener(handleThemeChange);

    // Initial check for the system theme
    handleThemeChange(themeMediaQuery);

  }, []);

  const changeMode=()=>{
    setDarkMode(!darkMode);
  }

  return (
    <>
      <Navbar mode={darkMode} changeMode={changeMode} />
      <Textform mode={darkMode} />
      <Footer mode={darkMode} />
    </>
  )
}

export default App
