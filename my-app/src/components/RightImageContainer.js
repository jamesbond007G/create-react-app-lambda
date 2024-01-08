import './RightImageContainer.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from 'react-bootstrap/Button';

function RightImageContainer({heading, paragraph, images}) {
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
        <div className="right1">
            <div>
            <Carousel autoPlay infiniteLoop showThumbs={false} interval={2000} showArrows={false} showIndicators={false} showStatus={false} className="custom-carousel" swipeable={false} transitionTime={0} >
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="sample_file" src={URL} key={index} className='CarouselImage' />
                    </div>
                ))}
            </Carousel>
            </div>
            <div className='ok1111'>
                <h1 className='ok11112'>{heading}</h1>
                {/* <p>{paragraph}</p> */}
            {/* <Button className='exlporenowbutton' onClick={scrollToExplore}>Explore Now</Button> */}

            </div>
        </div>
    )
}
export default RightImageContainer;


// import './HomePage.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Navbarfinal from './Navbarfinal'
// import IntroductionPara from '../components/IntroductionPara'
// import img1 from '../images/t2.png'
// import Button from 'react-bootstrap/Button';
// import img2 from '../images/wave3.png'
// import { useState, useEffect } from 'react';
// import LoadingComponent from '../components/LoadingComponent';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img10 from '../candle/p1.jpeg'
// import RightImageContainer from '../components/RightImageContainer'
// const loadingItems = [
//   '../images/t1.png',
//   '../images/t1.png',
//   '../images/t1.png',
//   // Add more items as needed
// ];
// const images = [
//  img1,img1,img10
// ];
// // import loadingItems
// const candles = [
//   'candle/p1.jpeg',
//   'candle/p2.jpeg',
//   'candle/p3.jpeg',
//   'candle/p4.jpeg',
//   'candle/p5.jpeg',
//   'candle/p6.jpeg',
//   'candle/p7.jpeg',
//   'candle/p8.jpeg',
//   'candle/p9.jpeg',
//   // 'candle/p10.jpeg',
//   // Add more image URLs as needed
// ];

// // Function to load images
// // function loadImages(imageUrls) {
// //   // Iterate through the array of image URLs
// //   imageUrls.forEach((imageUrl) => {
// //     // Create a new Image element
// //     const img = new Image();

// //     // Set the source (URL) for the image
// //     img.src = imageUrl;

// //     // Optional: Handle image load event (you can add other event listeners as needed)
// //     img.onload = () => {
// //       console.log(`Image loaded: `);
// //     };

// //     // Optional: Handle image error event
// //     img.onerror = (error) => {
// //       console.error(`Error loading image:`, error);
// //     };

// //     // Append the image element to the body or any other container element
// //     // document.body.appendChild(img);
// //   });
// // }

// // Call the loadImages function with the array of image URLs
// // loadImages(imageUrls);

// function Home(){
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff');

//   useEffect(() => {
//     const handleScroll = () => {
//       // Change the background color based on the scroll position
//       const scrollPosition = window.scrollY;

//       if (scrollPosition < window.innerHeight) {
//         setBackgroundColor('#FFFFFF'); // Color for the first section
//       } else if (scrollPosition < 2 * window.innerHeight) {
//         setBackgroundColor('#F8C8C6'); // Color for the second section
//       } else if (scrollPosition < 3 * window.innerHeight) {
//         setBackgroundColor('#CBD5F0'); // Color for the third section
//       } else if (scrollPosition < 4 * window.innerHeight) {
//         setBackgroundColor('#B6666F'); // Color for the fourth section
//       } else {
//         setBackgroundColor('#E8DFE0'); // Color for the fifth section and beyond
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//     const scrollToExplore = () => {
//         // Scroll to a section on the page (adjust the value as needed)
//         window.scrollTo({
//           top: window.innerHeight, // Scroll down by the height of the viewport
//           behavior: 'smooth', // Add smooth scrolling
//         });
//       };
// return(
//     <div style={{ backgroundColor }}>
//     <Navbarfinal></Navbarfinal>
//     <div className='HomeContainerImagePara'>
//     <div className='FaltuContainer'>
//     <IntroductionPara></IntroductionPara>

//     {/* <button onClick={scrollToExplore}>Explore Now</button> */}
//     <Button className='exlporenowbutton' onClick={scrollToExplore}>Explore Now</Button>
//     </div>
//     <img src={img1} className='HomeImg'/>
//     </div>
//     {/* <canvas id="paintCanvas" width="500" height="300"></canvas> */}
//     <img src={img2} className='HomeImg1'/>
//     {/* <img src={img1} className='HomeImg'/> */}
//     {/* <LoadingComponent loadingItems={loadingItems} /> */}
//     {/* <Carousel autoPlay infiniteLoop showThumbs={false} interval={1000} useKeyboardArrows={true} className="custom-carousel">
//         {images.map((URL, index) => (
//           <div className="slide">
//             <img alt="sample_file" src={URL} key={index} className='CarouselImage' />
//           </div>
//         ))}
//     </Carousel> */}
//     <RightImageContainer heading={'gopal'} paragraph={'gopal'} images={candles}></RightImageContainer>
//     <img src={img1} className='HomeImg'/>

//     {/* <img src={img1} className='HomeImg'/>
//     <img src={img1} className='HomeImg'/>
//     <img src={img1} className='HomeImg'/>
//     <img src={img1} className='HomeImg'/>
//     <img src={img1} className='HomeImg'/>
//     <img src={img1} className='HomeImg'/> */}
//     {/* <img src={img1} className='HomeImg'/> */}

//     {/* <img src={img2} className='HomeImg1'/> */}
//     {/* <img src={img2} className='HomeImg1'/> */}
//     {/* <img src={img2} className='HomeImg1'/> */}
//     {/* <img src={img2} className='HomeImg1'/> */}


//     </div>
// )
// }
// export default Home;