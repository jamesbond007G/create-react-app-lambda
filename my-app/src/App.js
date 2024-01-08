// import logo from './logo.svg';
import './App.css';
// import t1.png 
import * as React from "react";
import t1 from './images/t1.png'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Candle from './pages/Candle';
import Realistic from './pages/Realistic';
import Colored from './pages/Colored';
import Mural from './pages/Mural';
import Contact from './pages/Contact';
import Miniature from './pages/Miniature';
import Exceptional from './pages/Exceptional';
import Canvas from './pages/Canvas';
import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "about",
    element: (<About></About>),
  },
  {
    path: "Services",
    element: (<Services></Services>),
  },
  {
    path: "candle",
    element: (<Candle></Candle>),
  },
  {
    path: "realistic",
    element: (<Realistic></Realistic>),
  },
  {
    path: "colored",
    element: (<Colored></Colored>),
  },
  {
    path: "mural",
    element: (<Mural></Mural>),
  },
  {
    path:"contact",
    element: (<Contact></Contact>),
  },
  {
    path:"miniature",
    element: (<Miniature></Miniature>),
  },
  {
    path:"exceptional",
    element: (<Exceptional></Exceptional>),
  },
  {
    path: "canvas",
    element: (<Canvas></Canvas>),
  }


]);
function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    const handleScroll = () => {
      // Define scroll positions for different sections
      const section1 = 0;
      const section2 = 500;
      const section3 = 1000;
      const section4 = 1500;
      const section5 = 2000;

      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Determine the current section based on the scroll position
      if (scrollPosition < section2) {
        setBackgroundColor('#ffcccc'); // Color for section 1
      } else if (scrollPosition < section3) {
        setBackgroundColor('#ccffcc'); // Color for section 2
      } else if (scrollPosition < section4) {
        setBackgroundColor('#ccccff'); // Color for section 3
      } else if (scrollPosition < section5) {
        setBackgroundColor('#ffccff'); // Color for section 4
      } else {
        setBackgroundColor('#ffffcc'); // Color for section 5
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* g */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
