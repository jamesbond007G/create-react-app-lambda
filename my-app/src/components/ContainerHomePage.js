import './ContainerHomePage.css'
var description = [{title:'Candle',Images:''}]
function ContainerHomePage({title}){
    return(
        <div className='ContainerHomePage'>
            {/* <h1>{title}</h1> */}
            <DisplayImage ></DisplayImage>
            <div>
            <p>{description[title]}</p>
            <button ></button>
            </div>

        </div>
    )
}
export default ContainerHomePage;