import './HomePage.css'
import Navbar from 'react-bootstrap/Navbar'
import Navbarfinal from './Navbarfinal'
import IntroductionPara from '../components/IntroductionPara'
import img1 from '../images/t2.png'
import Button from 'react-bootstrap/Button';
import img2 from '../images/wave3.png'
import { useState, useEffect } from 'react';
// import LoadingComponent from '../components/LoadingComponent';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img10 from '../candle/p1.jpeg'
import ProductBoxContainer from '../components/ProductBoxContainer'
import ProductBoxContainer2 from '../components/ProductBoxContainer2'
import RightImageContainer from '../components/RightImageContainer'
const loadingItems = [
  '../images/t1.png',
  '../images/t1.png',
  '../images/t1.png',
  // Add more items as needed
];
const images = [
  img1, img1, img10
];
// import loadingItems
const Candles = [
  'candle/p1.jpeg',
  'candle/p2.jpeg',
  'candle/p3.jpeg',
  'candle/p4.jpeg',
  'candle/p5.jpeg',
  'candle/p6.jpeg',
  'candle/p7.jpeg',
  'candle/p8.jpeg',
  'candle/p9.jpeg',


  // Add more image URLs as needed
];
const Realistic = [
  'realistic/p1.jpeg',
  'realistic/p2.jpeg',
  'realistic/p3.jpeg',
  'realistic/p4.jpeg',
  'realistic/p5.jpeg',
  'realistic/p6.jpeg',
  'realistic/p7.jpeg',
  'realistic/p8.jpeg',
  'realistic/p9.jpeg',
  // Add more image URLs as needed
];
const Colored = [
  'colored/p1.jpeg',
  'colored/p2.jpeg',
  'colored/p3.jpeg',
  'colored/p4.jpeg',
  'colored/p5.jpeg',
  'colored/p6.jpeg',
  'colored/p7.jpeg',
  'colored/p8.jpeg',
  'colored/p9.jpeg',
  // Add more image URLs as needed
];
const Mural = [
  'mural/p1.jpeg',
  'mural/p2.jpeg',
  'mural/p3.jpeg',


  // Add more image URLs as needed
];
const moa = [
  'moa/p1.jpeg',
  'moa/p2.jpeg',
  'moa/p3.jpeg',
  'moa/p4.jpeg',
  'moa/p5.jpeg',
  'moa/p6.jpeg',

  // Add more image URLs as needed
];
const miniature = [
  'miniature/p1.jpeg',
  'miniature/p2.jpeg',
  'miniature/p3.jpeg',
  // 'miniature/p4.jpeg',
]

// Function to load images
// function loadImages(Candles) {
//   // Iterate through the array of image URLs
//   Candles.forEach((imageUrl) => {
//     // Create a new Image element
//     const img = new Image();

//     // Set the source (URL) for the image
//     img.src = imageUrl;

//     // Optional: Handle image load event (you can add other event listeners as needed)
//     img.onload = () => {
//       console.log(`Image loaded: `);
//     };

//     // Optional: Handle image error event
//     img.onerror = (error) => {
//       console.error(`Error loading image:`, error);
//     };

//     // Append the image element to the body or any other container element
//     // document.body.appendChild(img);
//   });
// }

// Call the loadImages function with the array of image URLs
// loadImages(Candles);

function Home() {
  // const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Change the background color based on the scroll position
  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition < window.innerHeight) {
  //       setBackgroundColor('#FFFFFF') ; // Color for the first section
  //     } else if (scrollPosition < 2 * window.innerHeight) {
  //       setBackgroundColor('#F8C8C6'); // Color for the second section
  //     } else if (scrollPosition < 3 * window.innerHeight) {
  //       setBackgroundColor('#CBD5F0'); // Color for the third section
  //     } else if (scrollPosition < 4 * window.innerHeight) {
  //       setBackgroundColor('#B6666F'); // Color for the fourth section
  //     } else {
  //       setBackgroundColor('#E8DFE0'); // Color for the fifth section and beyond
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const scrollToExplore = () => {
    // Scroll to a section on the page (adjust the value as needed)
    window.scrollTo({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth', // Add smooth scrolling
    });
    window.addEventListener('scroll', handleScrollEnd);

  };
  const handleScrollEnd = () => {
    // Remove the event listener after the scroll animation ends
    window.removeEventListener('scroll', handleScrollEnd);

    // Additional logic after the scroll animation ends
  };
  return (
    <div className='APPSTART'>
      <Navbarfinal></Navbarfinal>
      <div className='flexboxpurple'>
      </div>
      <div className='flexboxgreen'>

      </div>
      <img src='logo.png' className='logo'/>
      <div className='try1'>
      <img src='paint.jpg' className='homevectorimage'/>
      <div className='handlerpage'>
      <div className='puncline'>Where portraits tell stories, greeting cards spread joy, murals evoke emotions, miniatures enchant, and candles glow with artistry. Explore a world where every creation is a masterpiece waiting to be discovered.</div>
     <div className='handlerpagemotos'>
      <div className='handlerpagemoto'>Create</div>
      <div className='handlerpagemoto'>Immerse</div>
      <div className='handlerpagemoto'>Inspire</div>
      </div>
      <></>
      <div className='handlerpagequalities'>
        <div className='handlerpagequality'>Modern</div>
        <div className='handlerpagequality'>Traditional</div>
      </div>
      <div className='handlerpagequalities'>
        <div className='handlerpagequality'>Customizable</div>
        <div className='handlerpagequality'>Energizing</div>
        <div className='handlerpagequality'>Inspirational</div>
      </div>
      </div>
    </div>
      <div className='grid'>
        <img src="logo2.png" className='Ok2'/>
        <ProductBoxContainer title={'Realistic Portrait'} image={Realistic[0]} details={' Der MA-TEA Klassiker. Matcha Limette.Hier verwöhnen wir dich mit dem fein säuerlichen Geschmack der Limette, der dich frisch macht, gepaart mit unserem auserwählten japanischem Matcha, der dich wach macht. Natürlich Bio. Natürlich Vegan.'}></ProductBoxContainer>

        <ProductBoxContainer2 title={'Canvas Paintings'} image={moa[0]} details={' Der MA-TEA Klassiker. Matcha Limette.Hier verwöhnen wir dich mit dem fein säuerlichen Geschmack der Limette, der dich frisch macht, gepaart mit unserem auserwählten japanischem Matcha, der dich wach macht. Natürlich Bio. Natürlich Vegan.'}></ProductBoxContainer2>
        <ProductBoxContainer title={'Mural'} image={Mural[0]} details={' Der MA-TEA Klassiker. Matcha Limette.Hier verwöhnen wir dich mit dem fein säuerlichen Geschmack der Limette, der dich frisch macht, gepaart mit unserem auserwählten japanischem Matcha, der dich wach macht. Natürlich Bio. Natürlich Vegan.'}></ProductBoxContainer>
        <ProductBoxContainer2 title={'Candle'} image={Candles[0]} details={' Der MA-TEA Klassiker. Matcha Limette.Hier verwöhnen wir dich mit dem fein säuerlichen Geschmack der Limette, der dich frisch macht, gepaart mit unserem auserwählten japanischem Matcha, der dich wach macht. Natürlich Bio. Natürlich Vegan.'}></ProductBoxContainer2>
        <ProductBoxContainer title={'Clay Miniature'} image={miniature[0]} details={' Der MA-TEA Klassiker. Matcha Limette.Hier verwöhnen wir dich mit dem fein säuerlichen Geschmack der Limette, der dich frisch macht, gepaart mit unserem auserwählten japanischem Matcha, der dich wach macht. Natürlich Bio. Natürlich Vegan.'}></ProductBoxContainer>
      <ProductBoxContainer2 title={'Colored Portrait'} image={Colored[0]} details={' Der MA-TEA Klassiker. Matcha Limette.Hier verwöhnen wir dich mit dem fein säuerlichen Geschmack der Limette, der dich frisch macht, gepaart mit unserem auserwählten japanischem Matcha, der dich wach macht. Natürlich Bio. Natürlich Vegan.'}></ProductBoxContainer2>

      </div>
    </div>
  )
}
export default Home;
// {/* <div className='startSomethingSpecial'></div> */}
// {/* ProductBoxContainer> */}
// {/* <div className='productflexboxboth'>
//   <div className='productflexboxleft'>
//   </div>
//   <div className='productflexboxright'>
//   </div>
  
// </div> */}