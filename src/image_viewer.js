import '../styles/image_viewer.css';
import small from '../assets/small.jpg';
import big from '../assets/big.jpg';
const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';
document.body.appendChild(image);