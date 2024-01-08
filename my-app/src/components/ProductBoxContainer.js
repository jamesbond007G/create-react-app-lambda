import { Link } from 'react-router-dom';
import './ProductBoxContainer.css'

function ProductBoxContainer({title,image,details}) {
  var title1 = '';
  if (title === 'Realistic Portrait') {
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
  }else if(title === 'Candle'){
    title1 = 'candle';
  }
  else{
    title1 = title;
  }
  return (
    <div className="product-box-container">
    <div className='r1' style={{backgroundImage:`url(${image})`,backgroundPosition: 'center', // Adjust the positioning as needed
        backgroundSize: 'cover',}}>

    </div>
    <div className='r2'>
    <div className='product-box-container-title'>
        {title}
    </div>
    <div className='product-box-container-details'>
        {details}
    </div>
    <button className='buttonexplore'><Link to={title1} className='explore-link'>Explore Now</Link></button>

    </div>
    </div>
  );
}
export default ProductBoxContainer;