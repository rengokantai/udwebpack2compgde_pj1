import '../styles/image_viewer.css';
import small from '../assets/small.jpg';
import big from '../assets/big.jpg';
export default ()=>{

const image = document.createElement('img');
//image.src = 'http://lorempixel.com/400/400';
image.src = small;
document.body.appendChild(image);
};