$(document).ready(function() {

function initGame () {
  let surfer = $('.surfer');
  let turtle = $('.turtle');
  let turtleArray = [];


  function addRandomTurtles() {
    let y = Math.floor(Math.random() * (1 + 200)); //adds random start location of turtles
    turtleArray.push(y);
  }

  function moveTurtles() {
    addRandomTurtles();
    for (let i = 0; i < turtleArray.length; i++) {
      turtle.css("top", turtleArray[i]);
      turtle.css("right", -75) //starts turtle off screen
      turtle.css("display", "block");
      turtle.css("animation-name", "turtlemove");
    }
  }
  moveTurtles(); //use loop to determine how often to "launch turtles"
}
initGame();



  // let surferWidth, surferHeight, surferX, surferY,
  //     turtleWidth, turtleHeight, turtleX, turtleY;

  // function detectCollision() {
  //   surferWidth = surfer.outerWidth();  //Width, Height, X & Y check of surfer's position
  //   // console.log(surferWidth);
  //   surferHeight = surfer.outerHeight();
  //   // console.log(surferHeight);
  //   surferX = surfer.offset().left;
  //   // console.log(surferX);
  //   surferY = surfer.offset().top;
  //   // console.log(surferY);
  //   turtleWidth = turtle.outerWidth(); //Width, Height, X & Y check of turtle's position
  //   // console.log(turtleWidth);
  //   turtleHeight = turtle.outerHeight();
  //   // console.log(turtleHeight);
  //   turtleX = turtle.offset().left;
  //   // console.log(turtleX);
  //   turtleY = turtle.offset().top;

  //   if ((surferX + surferWidth) > (turtleX) && surferX < (turtleX + turtleWidth) &&
  //       (surferY + surferHeight) > (turtleY) && surferY <(turtleY + turtleHeight)) {
  //         console.log("You have collided!");
  //       }
  // }

  // // window.requestAnimationFrame(detectCollision);

  //   $('body').keydown(function(event){   //looks for collision everytime you move the surfer
  //     switch(event.which) {              //but we want to look for a collision even if we aren't
  //     case 38:surferUp();                //moving our surfer....
  //     console.log("up pressed");
  //     break;
  //     case 40: surferDown();
  //     console.log("down pressed");
  //     break;
  //     case 37:surferLeft();
  //     console.log("left pressed");
  //     break;
  //     case 39: surferRight();
  //     console.log("right pressed");
  //     break;
  //     default: return;
  // }
  // event.preventDefault();// stops scroll bar from moving on arrow key press
  // });

  // function surferUp() {
  //   $('.surfer').css('top', '-=15');
  // };

  // function surferDown() {
  //   $('.surfer').css('top', '+=15');
  // };

  // function surferLeft() {
  //   $('.surfer').css('left', '-=15');
  // };

  // function surferRight() {
  //   $('.surfer').css('left', '+=15');
  // };


});
