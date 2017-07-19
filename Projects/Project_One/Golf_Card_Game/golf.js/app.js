// console.log("let's play cards");
$(() => {
// console.log('how about playing golf?');

// ============================================================================>

// 2 Player Online Card Game Application: Golf

let round = 0;
let playerOneScore = 0;
let playerTwoScore = 0;

//need to generate deck of cards where each has a number value appear (Golf game logic: number value is major playing factor)

const createCards = (NumberofCards) => {
    for(let i = 0; i < NumberofCards; i++) {

      //card is a div... really just a square that I'll change out to the card images later... getting game logic running first:
      const card = $('#startGame').on('click', (e) => {
        //next line of code retrieves the value of cards present in this game:
        // construct code for number value click:
        $("#shuffle").click(function() {
            count = 0
            cards = [];
            for(n in numbers) {
                    let num = numbers[n]
                    let card = {
                      number: num,
                      order: Math.floor(Math.random() * 5200) + 1
                    };
                    cards.push(card);
                }
            })
            cards = cards.sort(function(a,b) {
                    return (a.order < b.order ? -1 : 1)
                });

                for(let i = 0;i < 4;i++) {
                        count++;
                        dispCard(i);
                    }
                });

            const dispCard = (cardNum) => {
                    let i = cardNum
                    let count = cardNum + 1;
                    let card = cards[i];
            $("#cards").append(count + " - " + card.number + "<br/>");
        }

        $("#draw").click(function() {
            if(count < 52) {
                dispCard(count);
                count++;
            }
            return false;
        })

      $('.cards').append(card);
      $('#playerOneBoard').append(card);
      $('#playerTwoBoard').append(card);

    }
}







//event listeners

$('#startGame').on('click', (e) => {
  console.log('start game button is working');
})

$('#shuffle').on('click', (e) => {
  console.log('shuffle button is working');
})

$('#draw').on('click', (e) => {
  console.log('draw button is working');
})

createCards();



});
