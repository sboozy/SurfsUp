// eslint-env jquery
$(document).ready(function() {
  let surfer = $('.surfer');
  let turtle = $('.turtle');
  let turtlePositionArray = [];

  let timer = $('')


setInterval(makeAndMoveTurtles, 4000);


    function randomTurtles() {
      let y = Math.floor(Math.random() * (1 + 200)); //adds random start location of turtles
      turtlePositionArray.push(y);
  }
    function makeAndMoveTurtles() {
    randomTurtles();
    for (let i = 0; i < turtlePositionArray.length; i++) {
      let newTurtles = $('.background-image').append('<div class="turtle"></div>');
      $('.background-image div:last-child').css("top", turtlePositionArray[i]);
      $('.background-image div:last-child').css("right", -75); //starts turtle off screen
      $('.background-image div:last-child').css("display", "block");
      $('.background-image div:last-child').css("animation-name", "turtlemove");
      turtlePositionArray = [];
    }
  }

// makeAndMoveTurtles();
// console.log('made 1');


  window.setInterval(detectCollision, 200);

  function detectCollision() {
    let surferWidth, surferHeight, surferX, surferY,
        turtleWidth, turtleHeight, turtleX, turtleY;
    let turtle = $('.background-image div:last-child');
    surferWidth = surfer.outerWidth();  //Width, Height, X & Y check of surfer's position
    surferHeight = surfer.outerHeight();
    surferX = surfer.offset().left;
    surferY = surfer.offset().top;
    turtleWidth = turtle.outerWidth(); //Width, Height, X & Y check of turtle's position
    turtleHeight = turtle.outerHeight();
    turtleX = turtle.offset().left;
    turtleY = turtle.offset().top;

    if ((surferX + surferWidth) > (turtleX) && surferX < (turtleX + turtleWidth) &&
        (surferY + surferHeight) > (turtleY) && surferY <(turtleY + turtleHeight)) {
         // turtle.css("display", "none");
         turtle.css("background", "red");
        }
  }

  $('body').keydown( function(event) {
      switch (event.which) {
        case 38:surferUp();
        console.log("up pressed");
        break;
        case 40: surferDown();
        detectCollision();
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
  })

  function surferUp() {
    surfer.css('top', '-=15');
  }

  function surferDown() {
    surfer.css('top', '+=15');
  }

  function surferLeft() {
    surfer.css('left', '-=15');
  }

  function surferRight() {
    surfer.css('left', '+=15');
  }
});
