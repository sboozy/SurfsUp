// eslint-env jquery
function gamePageFunction() {
  let surfer = $('.surfer');
  let turtle = $('.turtle');  // maybe should delete this????
  let turtlePositionArray = [];
  let timePenaltyArray = [];

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

function startGame() {

  //**********COLLISION DETECTION*******************
  window.setInterval(detectCollision, 330);

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
      turtle.css('display', 'none');
      timePenaltyArray.push('hit'); //push to an array and access sum of array for Total Count
      }
    }

    //***********MAKE AND LAUNCH TURTLES****************
  const turtleGenerator = setInterval(makeAndMoveTurtles, 3000); // if less that 3 sec intervals then
                                                                // collision detection stops working
    function randomTurtles() {
      let y = Math.floor(Math.random() * (window.innerHeight - 200)); //adds random start location of turtles
                                                                      //within height of window
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
    function stopTurtles() {
      clearInterval(turtleGenerator);    //function to stop making turtles later
  }
  //****************TIMER THAT STOPS AT :20*****************
      let timer = setInterval(startTimer, 1000);
      let seconds = 0;

      function startTimer() {
        console.log(seconds);
        if (seconds < 20) {
        $('.seconds').html(seconds += 1);
      } else {
        stopTimer();
        scale();
        endGame();
      }

      function stopTimer() {
        clearInterval(timer);
      }

//********STOPS BG MOVEMENT AND STOPS MAKING NEW TURTLES************
    function endGame() {
    $('.background-image').css('animation-play-state', 'paused');
    stopTurtles();
  }
//*************SCALE TO SEE HOW WELL YOU DID*****************
    function scale() {
      let totalTime = parseInt($('.seconds').html()) + (timePenaltyArray.length*5);
      if (totalTime === 20) {
        alert("Cowabunga Dude! You dodged all the turtles!\nHit reset to play again!");
      } else if (totalTime > 20 && totalTime < 30) {
        alert("Gnarly wave ride but you could totally do better!\nHit reset to play again!")
      } else {
        alert("Sorry Bro! You may need to go back to surf school!\nHit reset to play again!")
      }
    }
  }
}
startGame();
};

// function landingFormFunction () {

//   $('.submit-button').on('click', function(e) {
//     e.preventDefault();
//   })

//   function populateStorage() {
//     localStorage.setItem("firstName", "$('#first-name')");
//   }

//   function getStorage() {
//     let firstName = localStorage.getItem('firstName');
//   }


//   lastName = localStorage.getItem($('#last-name'));
//   email = localStorage.getItem($('.label-mail'));
// }



