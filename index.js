var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/image" + randomNumber + ".jpg";

if (randomNumber === 1) {
  document.querySelector("p").innerHTML = "Mustafi losing concentration";
} else if (randomNumber === 2) {
  document.querySelector("p").innerHTML = "Xhaka losing the ball";
} else if (randomNumber === 3) {
  document.querySelector("p").innerHTML = "Ozil being lazy";
} else if (randomNumber === 4) {
  document.querySelector("p").innerHTML = "Emery subbing Laca off in the 60th";
} else if (randomNumber === 5) {
  document.querySelector("p").innerHTML = "the ref being shit";
} else if (randomNumber === 6) {
  document.querySelector("p").innerHTML = "Iwobi not doing anything";
}


document.querySelectorAll("img")[0].setAttribute("src", randomImage);
