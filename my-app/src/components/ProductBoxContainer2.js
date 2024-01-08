import { Link } from 'react-router-dom';
import './ProductBoxContainer2.css'

function ProductBoxContainer2({ title, image, details }) {
  var title1 = '';
  if (title === 'Realistic Paintings') {
    title1 = 'realistic';
  }
  else if (title === 'Colored Portrait') {
    title1 = 'colored';
  }
  else if (title === 'Mural') {
    title1 = 'mural';
  } else if (title === 'Clay Miniature') {
    title1 = 'miniature';
  } else if (title === 'Canvas Paintings') {
    title1 = 'canvas';
  }else{
    title1 = title;
  }

  return (
    <div className="product-box-container2">
      <div className='r12' style={{
        backgroundImage: `url(${image})`, backgroundPosition: 'center', // Adjust the positioning as needed
        backgroundSize: 'cover',
      }}>
        {/* gopal */}
        {/* <img /> */}
        {/* <img src={image} className='product-box-container-img'/> */}
      </div>
      <div className='r22'>
        <div className='product-box-container-title2'>
          {title}
        </div>
        <div className='product-box-container-details2'>
          {details}
        </div>
        <button className='buttonexplore'><Link to={title1} className='explore-link'>Explore Now</Link></button>
      </div>
    </div>
  );
}
export default ProductBoxContainer2;