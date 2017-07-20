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

// card images
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
