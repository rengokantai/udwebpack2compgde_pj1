// import sum from './sum';
// import './image_viewer';
// console.log(sum(2,4));

const button = document.createElement('button');
button.innerText = 'clickme';
button.onclick=()=>{
	System.import('./image_viewer')
}
document.body.appendChild(button);