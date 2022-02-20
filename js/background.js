const images = ["1.jfif", "2.jfif", "3.jfif", "4.jfif", "5.jfif", "6.jfif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
