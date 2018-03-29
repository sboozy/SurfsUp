$(document).ready(function() {

  let surfer = $('.surfer');
  let turtle = $('.turtle');
  let surferWidth, surferHeight, surferX, surferY,
      turtleWidth, turtleHeight, turtleX, turtleY;

  function detectCollision() {
    surferWidth = surfer.outerWidth();  //Width, Height, X & Y check of surfer's position
    // console.log(surferWidth);
    surferHeight = surfer.outerHeight();
    // console.log(surferHeight);
    surferX = surfer.offset().left;
    // console.log(surferX);
    surferY = surfer.offset().top;
    // console.log(surferY);
    turtleWidth = turtle.outerWidth(); //Width, Height, X & Y check of turtle's position
    // console.log(turtleWidth);
    turtleHeight = turtle.outerHeight();
    // console.log(turtleHeight);
    turtleX = turtle.offset().left;
    // console.log(turtleX);
    turtleY = turtle.offset().top;

    if ((surferX + surferWidth) > (turtleX) && surferX < (turtleX + turtleWidth) &&
        (surferY + surferHeight) > (turtleY) && surferY <(turtleY + turtleHeight)) {
          console.log("You have collided!");
        }
  }

    $('body').keydown(function(event){ //how do I make this keep evaluating???
      switch(event.which) {
      case 38:surferUp();
      detectCollision();
      console.log("up pressed");
      break;
      case 40: surferDown();
      detectCollision();
      console.log("down pressed");
      break;
      case 37:surferLeft();
      console.log("left pressed");
      break;
      case 39: surferRight();
      console.log("right pressed");
      break;
      default: return;
  }
  event.preventDefault();// stops scroll bar from moving on arrow key press
  });

  function surferUp() {
    $('.surfer').css('top', '-=15');
  };

  function surferDown() {
    $('.surfer').css('top', '+=15');
  };

  function surferLeft() {
    $('.surfer').css('left', '-=15');
  };

  function surferRight() {
    $('.surfer').css('left', '+=15');
  };


});
