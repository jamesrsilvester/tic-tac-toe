
$(document).ready(function() {
  // all code to manipulate the DOM goes inside this function
  console.log("Script is linked");
  //assigns overall listener as gameboard
  let $gameboard = $('#board');

  // RESET BUTTON
  $('#button').on("click", function () {location.reload()});

  //prints box clicked to console.
  $gameboard.on("click", function (event) {
   console.log(`${event.target.id} was clicked`);
   let idBoxClicked = event.target.id;

   //Changes class of clicked element
   let changeClass = function () {
     if (numTurns%2 === 0) {
       $(`#${idBoxClicked}`).removeClass( "box" ).addClass( "red" );
     }
     else {
       $(`#${idBoxClicked}`).removeClass( "box" ).addClass( "blue" );
     }
   }

   //Checks for class red or blue
   let hasClass = $(`#${idBoxClicked}`).hasClass("red") || $(`#${idBoxClicked}`).hasClass( "blue");

   //Prints event clicked and checks if move was a duplicate
   if (hasClass === false) {
       if (numTurns%2 === 0) {
         console.log(`Player 1 clicked ${event.target.id}`);
         }
         else {console.log(`Player 2 clicked ${event.target.id}`);
         }
       changeClass();
       addTurn();
        }
        else {
          alert("You already went there..");
        }


  });
  //confirms that clicks are recorded?
  console.log(" ... and listening for clicks");
});

//Create variables here that do not require DOM load.
let $boxes = $('.box'); //// Selects all boxes
let $red = $('.red'); //RED goes first
let $blue = $('.blue'); //BLUE goes second
let $row = $('.row'); //ROW contains the entire board and is parent event listener
let numTurns = 2; // Starts at Even, starts with 2 rather than 0 for %.



//AddTurn
let addTurn = function () {numTurns ++;
console.log(`This is turn number ${numTurns-2}`);}; //-2 because counter started at 2.



//WIN - X = 1 and O = 0, if ($red.length adds up to


//RESET button: Look at events homework
