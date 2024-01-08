// import { Grid } from "react-visual-grid";
import { Navbar } from 'react-bootstrap';
import Navbarfinal from './Navbarfinal'

import './Candle.css'
import Photogallery from './Photogallery';
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
    'candle/p2.jpeg',



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
    'realistic/p1.jpeg',

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
    'colored/p1.jpeg',

    // Add more image URLs as needed
];
const Mural = [
    'mural/p1.jpeg',
    'mural/p2.jpeg',
    'mural/p3.jpeg',
    'mural/p1.jpeg',


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
    'miniature/p1.jpeg',

    // 'miniature/p4.jpeg',
]

function Candle() {
    return (
        <>
            <Photogallery images={Realistic}></Photogallery>
        </>
    )
}
export default Candle;