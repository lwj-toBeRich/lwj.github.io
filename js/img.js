
const images = ["1.jpeg", "2.jpeg", "3.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`; 
document.body.style.backgroundSize = "cover";