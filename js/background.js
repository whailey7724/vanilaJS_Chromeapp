const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");  // html에 집어넣기! 그동안 html에 있는 것 갖고오기만 했는데

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// append는 맨 뒤에 prepend는 맨 위에