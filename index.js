
function roll() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Katya Wins!";
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  }

  else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Anton Wins!";
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  }

  else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  }

}

roll();
