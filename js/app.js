
$(document).ready(function() {
  // all code to manipulate the DOM goes inside this function
  console.log("Js linked");
  //
  let $gameboard = $('#board');
  //prints box clicked to console.
  $gameboard.on("click", function (event) {
   console.log(event.target.id);
  });
  //confirms that clicks are recorded?
  console.log(" and listening for clicks");
});

//Create variables here that do not require DOM load.

let $boxes = $('.box'); //// Selects all boxes
let $red = $('.red'); //RED goes first
let $blue = $('.blue'); //BLUE goes second
let $row = $('.row'); //ROW contains the entire board and is parent event listener

//    ///create var numTurns, set = 2. (at end of add class function, numTurns+1)

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
