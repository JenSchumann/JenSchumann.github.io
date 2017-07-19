// console.log("let's play cards");
$(() => {
// console.log('how about playing golf?');

// ============================================================================>

// 2 Player Online Card Game Application: Golf

let round = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let cards = [0,1,2,3,4,5,6,7,8,9,10,10,10];
let count = 0;
const $cardContainer = $('.cardContainer');

//need to generate deck of cards where each has a number value appear

const createCards = (NumberofCards) => {
    for(let i = 0; i < NumberofCards; i++) {
//not sure if next line should belong here:

        $cardContainer.css('background-color', 'black');

      // const cardValue = $('#dealCards').on('click', (e) => {
        //next line of code retrieves the value of cards present in this game
        // })
      applyRandomNumber(cards);

      $cardContainer.append('<body>');
      $('.cards').append($cardContainer);
      $($cardContainer).append('#playerOneBoard');
      $($cardContainer).append('#playerTwoBoard');

    }
}
//deal number of cards




//apply random number?
const applyRandomNumber = (cards) => {
  const randNum = Math.floor(Math.random() * (12-0)) + 0
    cards[randNum];
    $('#playerOneBoard').append('<p>' + cards[randNum] + '</p>');
}




//playerOneBoard div to append cards to

//event targets

//shuffle button
// $("#shuffle").on('click', (e) => {
//     count = 0
//     cards = [0,1,2,3,4,5,6,7,8,9,10,10,10];
//     for(n in numbers) {
//             let num = numbers[n]
//             let card = {
//               number: num,
//               order: Math.floor(Math.random() * 5200) + 1
//             };
//             cards.push(card);
//         }
//     })
//     cards = cards.sort(function(a,b) {
//             return (a.order < b.order ? -1 : 1)
//         });
//
//         for(let i = 0;i < 9;i++) {
//                 count++;
//                 dispCard(i);
//             }
//         })
//
//     const dispCard = (cardNum) => {
//             let i = cardNum
//             let count = cardNum + 1;
//             let card = cards[i];
//     $("#cards").append(count + " - " + card.number + "<br/>");
// }
//
// //draw button
// $("#draw").click(function() {
//     if(count < 52) {
//         dispCard(count);
//         count++;
//     }
//     return false;
//
//
//
//
//
//
//event listeners

$('#startGame').on('click', (e) => {
  console.log('start game button is working');
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

createCards(9);
//


});
