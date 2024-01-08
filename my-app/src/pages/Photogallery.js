import './Candle.css'
import Navbarfinal from './Navbarfinal';
function Photogallery({ images }) {
    console.log(images)
    return (
        <>
            <Navbarfinal></Navbarfinal>

            <div className="photo-grid">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Photo ${index}`} />
                ))}
            </div>
        </>)
}
export default Photogallery;