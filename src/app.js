// eslint-env jquery
$(document).ready(function() {

  let surfer = $('.surfer');
  let turtle = $('.turtle');  // maybe should delete this????
  let turtlePositionArray = [];
  let timePenaltyArray = [];

//**********COLLISION DETECTION*******************
  window.setInterval(detectCollision, 330);

  function detectCollision() {
    let surferWidth, surferHeight, surferX, surferY,
        turtleWidth, turtleHeight, turtleX, turtleY;
    let turtle = $('.background-image div:last-child');
    // let collisionOffset = 30;

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
      // turtle.css('background', 'red');
         turtle.css('display', 'none');
      // collisionOffset -= 1;
      timePenaltyArray.push('hit'); //push to an array and access sum of array for Total Count
      }
  }

  //***********MAKE AND LAUNCH TURTLES****************
setInterval(makeAndMoveTurtles, 3000); // if less that 3 sec intervals then
                                       // collision detection stops working

    function randomTurtles() {
      let y = Math.floor(Math.random() * (window.innerHeight - 120)); //adds random start location of turtles
                                                                        //within size of window - height of turtle plus some
      turtlePositionArray.push(y);
  }
    function makeAndMoveTurtles() {
    randomTurtles();
    for (let i = 0; i < turtlePositionArray.length; i++) {
      let newTurtles = $('.background-image').append('<div class="turtle"></div>');
      $('.background-image div:last-child').css("top", turtlePositionArray[i]);
      $('.background-image div:last-child').css("right", -200); //starts turtle off screen
      $('.background-image div:last-child').css("display", "block");
      $('.background-image div:last-child').css("animation-name", "turtlemove");

      turtlePositionArray = [];
    }
  }

//****************KEYDOWN FUNCTION************************
  $('body').keydown( function(event) {
      switch (event.which) {
        case 38:
        if (surfer.offset().top > 60) {
        surferUp();
      }
        break;
        case 40:
        if (surfer.offset().top < (window.innerHeight - 250)) {  //size of window minus size of surfer
        surferDown();
      }
        break;
        case 37:surferLeft();
        break;
        case 39: surferRight();
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

//****************TIMER THAT STOPS AT :25*****************
  let timer = setInterval(startTimer, 1000);
  let seconds = 0;
  function startTimer() {
    if (seconds < 20) {
    $('.seconds').html(seconds += 1);
  } else {
    stopTimer();
    // $('.background-image').css('animation-play-state', 'paused');
    endGame();
    seconds = $('.seconds').html();
    scale();
  }

  function stopTimer() {
    clearInterval(timer);
  }
}

//*************SCALE TO SEE HOW WELL YOU DID*****************

function scale() {
  let totalTime = parseInt(seconds) + (timePenaltyArray.length*5);
  console.log(totalTime);
  if (totalTime === 20) {
    alert("Cowabunga Dude! You dodged all the turtles!\nHit reset to play again!");
  } else if (totalTime > 20 && totalTime < 30) {
    alert("Gnarly wave ride but you could totally do better!\nHit reset to play again!")
  } else {
    alert("Sorry Bro! You may need to go back to surf school!\nHit reset to play again!")
  }
}
console.log("this is end game")
function endGame() {
    $('.background-image').css('animation-play-state', 'paused');
    //stop
}

function playAgain() {
  $('.reset-button').on("click", function() {
    location.reload(true);   //broken button
  });
}

});
