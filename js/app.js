
$(document).ready(function() {
  // all code to manipulate the DOM goes inside this function
  console.log("Js linked");
  //assigns overall listener as gameboard
  let $gameboard = $('#board');
  //prints box clicked to console.
  $gameboard.on("click", function (event) {
   console.log(`${event.target.id} was clicked`);
   let idBoxClicked = event.target.id;
     if (numTurns%2===0) {
       console.log(`Player 1 clicked ${event.target.id}`);
       }
       else {console.log(`Player 2 clicked ${event.target.id}`);
       }
     changeClass();
     addTurn();
  });
  //confirms that clicks are recorded?
  console.log(" and listening for clicks");
});

//Create variables here that do not require DOM load.
let $boxes = $('.box'); //// Selects all boxes
let $red = $('.red'); //RED goes first
let $blue = $('.blue'); //BLUE goes second
let $row = $('.row'); //ROW contains the entire board and is parent event listener
let numTurns = 2; // Starts at Even, starts with 2 rather than 0 for %.

//Change Class -- INCOMPLETE//
let changeClass = function () {
  console.log(`change class did nothing`);
}

//AddTurn
let addTurn = function () {numTurns ++;
console.log(`This is turn number ${numTurns-2}`);}; //-2 because counter started at 2.

//

// //ONCE CLICKED

// }

     //// Save event.target of click.


      //// change target class based on odd or even
      //  if changeClass = numTurns.length % 2 === 0 &&& target.class !== ? target.addclass "red": target.addclass "red" )

      //// add +1 to numTurns.

      /////

//Win - X = 1 and O = 0, if ($red.length adds up to

////CONCERNS
// Locality of click.target. Save as global? Refresh on new click?
