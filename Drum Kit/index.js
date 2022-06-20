// Detecting Button Press

var drumCharacter;
var lengthOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < lengthOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    addAnimation(this.innerHTML);
    makeSound(buttonInnerHTML);

  });

}

// Detecting Key Press

document.addEventListener("keydown",function(event){
  addAnimation(event.key);
  makeSound(event.key);
});

// making Sound Function

function makeSound (key){
  switch (key) {
    case "W":
    case "A":
    case "S":
    case "D":
    case "J":
    case "K":
    case "L":
      alert("Turn Off Caps-lock!");
      break;
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:console.log(buttonInnerHTML);

  }
}

function addAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
