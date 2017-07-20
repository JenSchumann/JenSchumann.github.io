// console.log("let's play cards");
$(() => {
// console.log('how about playing golf?');

// ============================================================================>

// 2 Player Online Card Game Application: Golf

let round = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let suits = ["H","S","C","D"];
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let cards = [];
let count = 0;

$('<body>').append('#playerOneBoard');
$('<body>').append('#playerTwoBoard');

//shuffle button
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
        });

        for(let i = 0;i < 9;i++) {
                count++;
                dispCard(i);
            }
        });

    const dispCard = (cardNum) => {
            let i = cardNum
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

const $cardBack = $('<div/>').on('click', (e) => {
$cardback.attr('<img src="/Users/jennifergeeslin/dev/JenSchumann.github.io/Projects/Project_One/Golf_Card_Game/img/back.bmp">');
$('#cardBack').append($cardBack);
});
//event listeners

$('#startGame').on('click', (e) => {
  console.log('start game button is working');
})

$('#cardBack').on('click', (e) => {
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






});
