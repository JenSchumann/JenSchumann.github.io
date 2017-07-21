// console.log("let's play cards");
$(() => {
// console.log('how about playing golf?');

// ============================================================================>

// 2 Player Online Card Game Application: Golf
//code not organized yet into sections!!!

let round = 0;
// not part of mvp... but if time add input for user to type in name for both Player One & Two
let playerOne = '';
let playerTwo = '';
let playerOneScore = 0;
let playerTwoScore = 0;
let suits = ["H","S","C","D"];
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let cards = [];
let count = 0;
let playerOneCards = [];
let playerTwoCards = [];

$('<body>').append('#playerOneBoard');
$('<body>').append('#playerTwoBoard');


//still playing with the logic of how to assign a beginning status of each value card shuffled to player1 & 2 boards at beginning of each round as a clickable $cardBack:
let $cardBack = $('<div/>').on('click', (e) => {
$cardback.attr('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/back.bmp">');
$('#cardBack').attr($cardBack);
$('#playerOneBoard').append($cardBack);
$('#playerTwoBoard').append($cardBack);
});
///do i really need to have const for $playerOneCards??  cause probably just dealing cards to each player & appending them to playerboards would suffice.
const $playerOneCards = $('<div/>').addClass('playerOneCards');
$('#playerOneBoard').append($playerOneCards);

const $playerTwoCards = $('<div/>').addClass('playerTwoCards');
$('#playerTwoBoard').append($playerTwoCards);

//not sure how to connect this to the cards array... for now building other parts of the game logic  (so far my idea is to give each picture an id of their shorthand card id ==> 4 of hearts would = h3 and then append them to class cardValueSide which then is appended to cards array??? append or attr.... to be or not to be....)
const $cardFrontImages = () => {

      const $cardValueSide = $('<div/>').addClass('cardValueSide');
      //when image is assigned to a div via jquery... does the entire file path need to be given?  question to figure out answer to (or will shorter file path work?)

$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h01.bmp">').val(1);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h02.bmp">').val(2);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h03.bmp">').val(3);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h04.bmp">').val(4);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h05.bmp">').val(5);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h06.bmp">').val(6);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h07.bmp">').val(7);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h08.bmp">').val(8);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h09.bmp">').val(9);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h10.bmp">').val(10);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h11.bmp">').val(11);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h12.bmp">').val(12);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/h13.bmp">').val(0);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c01.bmp">').val(1);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c02.bmp">').val(2);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c03.bmp">').val(3);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c04.bmp">').val(4);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c05.bmp">').val(5);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c06.bmp">').val(6);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c07.bmp">').val(7);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c08.bmp">').val(8);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c09.bmp">').val(9);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c10.bmp">').val(10);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c11.bmp">').val(11);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c12.bmp">').val(12);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/c13.bmp">').val(0);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d01.bmp">').val(1);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d02.bmp">').val(2);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d03.bmp">').val(3);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d04.bmp">').val(4);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d05.bmp">').val(5);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d06.bmp">').val(6);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d07.bmp">').val(7);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d08.bmp">').val(8);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d09.bmp">').val(9);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d10.bmp">').val(10);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d11.bmp">').val(11);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d12.bmp">').val(12);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/d13.bmp">').val(0);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s01.bmp">').val(1);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s02.bmp">').val(2);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s03.bmp">').val(3);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s04.bmp">').val(4);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s05.bmp">').val(5);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s06.bmp">').val(6);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s07.bmp">').val(7);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s08.bmp">').val(8);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s09.bmp">').val(9);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s10.bmp">').val(10);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s11.bmp">').val(11);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s12.bmp">').val(12);
$('<div>').html('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/s13.bmp">').val(0);
};

//all game play logic embedded in one overall function, except for start, stop, restart?

const playGolf = () => {
//shuffle code need to be here?
              const checkIfContinuePlay = () => {
                  if(round < 10) {
                    turntoPlay();
                    }
                  //can work on else if statement later..
              };

              const turntoPlay = () => {
                  checkIfContinuePlay();
                      for(let i = 1; i < 10; i++) {
                            if(i % 2 !== 0) {
                                playerOneTurn();


                            } else if (i % 2 === 0) {
                                playerTwoTurn();
                            }
                      }
              };

              // const playerOneTurn = () => {
              //     checkIfContinuePlay();
              //         for(let i = 1; i < 3; i++) {
              //           if (this.chooseTurnCard())
              //
              //           $( function() {
              //               $( "#draggable" ).draggable();
              //               $( "#droppable" ).droppable({
              //                 drop: function( event, ui ) {
              //                   $( this )
              //                     .addClass( "ui-state-highlight" )
              //                     .find( "p" )
              //                       .html( "Dropped!" );
              //                 }
              //               });
              //             } );
              //
              //
              //
              //
              //         }
              // }
}



//if playerOne clicks on face up card in discard pile && then clicks on cardBack card in their array (on their board)
  // https://jqueryui.com/droppable/

  // ^^^^^^ if can figure out drag and drop, set drop element to appear in discard pile
//replace cardBack card (it hides or pops or detaches) with the clicked on discard pile card that is face up

//else if playerOne clicks on face down drawCardsRemaining pile, it is popped off the top of that array

//and added face up where the playerOne clicks on a cardBack card in their array (on their board)
//               // maybe this should be written with method syntax instead?
//               const firstTurnPlay = () => {
//
//               // for loop that if is an odd numbered round that playerOne goes first, and if it is an even numbered round playerTwo goes first?
//                     for(let i = 1; i < 10; i++) {
//                       if(i % 2 !== 0) {
//                         playerOne.turnToPlay();
//                       } else if (i % 2 === 0) {
//                         playerTwo.turnToPlay()
//                       }
//                       }
//               }
//
//               const playRoundOne = () => {
//                       cards.shuffle();
//                       firstTurnPlay();
//
//
//
//               }
//
//               const continuedRoundPlay = () => {
//                 //for rounds 2-9
//               }


//
// }

// need turnToPlay = () => w/logic of one turn

// difference between playRoundOne & roundsContine??  only less messaging prompting a learn by doing approach to game play?
// if/else.... if(rounds <= 9, continuePlay())
// const roundsContinue =







//does this need to be stored in variable??? global or not....pondering this:
//shuffle button
//
// const shuffle = () => {
$("#shuffle").on('click', (e) => {
    count = 0
    cards = [];
    $('#cards').attr('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/back.bmp">');
    for(s in suits) {
      let suit = suits[s];
        for(n in numbers) {
            let num = numbers[n]
            let card = {
              suit: suit,
              number: num,
              order: Math.floor(Math.random() * 5200) + 1
            };
            cards.push(card);
        }
    }
    cards = cards.sort(function(a,b) {
            return (a.order < b.order ? -1 : 1)

            for(let i = 0; i < 52; i++) {
                if(playerOne.turnToPlay()) {
                    return cards[0,2,4,6,8,10,12,14,16];
                    cards.splice(0, )
                    //append cards to player one board so we can see them

                } else if (playerTwo.turnToPlay()) {
                    return cards[1,3,5,7,9,11,13,15,17];
                    //append cards to player two board so we can see them
                } else if (drawCard()) {
                    let drawCardsRemaining = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
                    return drawCardsRemaining[drawCardsRemaining.length - 1];
                    //not sure if .length -1 will work for both 'drawCard()' && 'chooseTurnCard' (& not pull the same card.. need to figure out how item pulled from array doesn't reappear during the play of the round)
                } else if (chooseTurnCard()) {
                    return drawCardsRemaining[drawCardsRemaining.length - 1];
                }
            }
    });
});
//===========================TRYING IF LOOP BELOW -content++ below (using conditional)
        // for(let i = 0; i < 9; i++) {
        //           count++;
        //           dispCard(i);
        //         }
                //should be in lines 178-181 instead of slice attempt if that doesn't work
//=========================================>>>going to try slice instead of this for loop:



//perhaps dispCard is not included as part of the shuffle().... or have function to hide them until play function sequence is executed...
const dispCard = (cardNum) => {
        let i = cardNum;
        let count = cardNum + 1;
        let card = cards[i];
$("#cards").append(count + " - " + card.number + card.suit + "<br/>");
}

//draw button
$("#draw").click(function() {
    if(count < 52) {
        dispCard(count);
        count++;
    }
    return false;

});



// winning match sets of 3 from cards array which need to be detached from array and also hidden once they appear... once I figure out how to do that...
// basic code structure... not going for functionality yet:

// const matchSetTrioConquest = () => {
//       //need to say if playerOneCards || playerTwoCards.cards[] etc instead of way it is written in this if/else statement?
//         if(cards[0].val() === cards[1].val() === cards[2].val()) {
//           cards[0][1][2].detach().css('opacity', 0);
//           continueTurn();
//           // call a message function that announces to player a congrats for canceling out the value of 3 of their cards?
//             } else if (cards[3].val() === cards[4].val() === cards[5].val()) {
//                 cards[3][4][5].detach().css('opacity', 0);
//                 continueTurn();
//               } else if (cards[6].val() === cards[7].val() === cards[8].val()) {
//                   cards[6][7][8].detach().css('opacity', 0);
//                   continueTurn();
//                 } else if (cards[0].val() === cards[3].val() === cards[6].val()) {
//                     cards[0][3][6].detach().css('opacity', 0);
//                     continueTurn();
//                   } else if (cards[1].val() === cards[4].val() === cards[7].val()) {
//                       cards[1][4][7].detach().css('opacity', 0);
//                       continueTurn();
//                     } else if (cards[2].val() === cards[5].val() === cards[8].val()) {
//                         cards[2][5][8].detach().css('opacity', 0);
//                         continueTurn();
//                       } else {
//                         continueTurn();
//                       }
// };






// need to build continueTurn() function

// need to build function that once player has no cardBacks on their board this triggers their last turn to choose a card from discard or dealer deck and then remaining cards in their player board are totaled for a score for the end of the round, next player has their last turn, their score is updated and the nextRound function (yet to be) is called

//=====================================================================================================>>>>
//event listeners

$('#startGame').on('click', (e) => {
  console.log('start game button is working');
  playGolf();
})

$('#cardBack').on('click', (e) => {
  //needs to reveal the value of the hidden card 'underneath' the cardBack image & reveal the cardpng attached (by id?) to that random valued card from the array
  console.log('show back of card button working')
})

$('#dealCards').on('click', (e) => {
  console.log('deal cards button is working');
})

$('#shuffle').on('click', (e) => {
  console.log('shuffle button is working');

})

$('#draw').on('click', (e) => {
  console.log('draw button is working');
})


//
// console.log(cards.dealCountOne);
// console.log(drawCardsRemaining);
// dispCard(i);





});
