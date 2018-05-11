$(() => {

    // console.log('time to place your bets');

//what is the game logic?
// A player wins if they reach 5 points?
// A player's round doesn't end until their 3 lives are out (They start the round w/3 lives and lose a life each time their bet it wrong?)
// Could eventually post names & scores of top scorers?
//==========================================================================
// variables:
// let myDollars = 0;
let cardOutput = document.getElementById('cards');
let count = 0;
let score = 0;
let lives = 3;
let cards = [];
// var myDol = 0;

const suits = ['spades', 'hearts', 'clubs', 'diams'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const $message = $('#messageHL');
let scoreOutput = document.getElementById('score');


//==========================================================================

const gameStart = () => {
        const messageChange = $('#start').on('click', (e) => {
          //when press start the message changes
          // console.log('start button clicked');
          $("#messageHL").text("Game Started!");
          // after start button is pressed, it disappears
          $(e.currentTarget).css('display', 'none');
          $('#highLow').css('display','inline-flex');
          })
          buildCards();
          shuffleArray(cards);
          cardOutput.innerHTML +=showCard();
}


let hilo = (a) => {
            //calculate winner
            let win = false;
            let oldCard = cards[count].cardValue;
            count++;
            cardOutput.innerHTML += showCard();

//line below is a test and needs to be taken out.
            $(cardOutput).html += showCard();
                              let newCard = cards[count].cardValue;
                              if(a === 'high' && oldCard < newCard) {
                                win = true;
                              } else if (a === 'low' && oldCard > newCard) {
                                win = true;
                              }
                                    if(win) {
                                        score++;
                                        if(score == 5){
                                          let cards = [];
                                          winState();
                                        } else if (win && score < 5){
                                        $("#messageHL").text("You were correct! Score: " + score + " LIVES remaining:  "+lives);
                                      }
                                      } else {
                                          score--;
                                          lives--;
                                        $("#messageHL").text("You were wrong! Your score is now " + score + ".  LIVES remaining: " +lives);

                                              if(lives == 0) {
                                                let cards = [];
                                                endPlay(score);
                                              }
                                        }
      }


const endPlay = (s) => {
  //gets the nodelist of cards played in previous round:
  // let lastCards = document.querySelectorAll(".icard");
  // console.log(lastCards);
          document.getElementById('highLow').style.display='none';
          document.getElementById('score');
          $('#messageHL').text("Game over!  Your score was " + s);
          $('#start').css('display','block');
          let count = 0;
          let score = 0;
          let lives = 3;
          let cards = [" "];
          gameStart();
}

const winState = () => {

  document.getElementById('highLow').style.display='none';
  document.getElementById('score');
  $("#messageHL").text("Congratulations!  You've reached 5 points!  You're a High-Roller now! Press Start Game to play again!");
  $('#start').css('display','block');
  cardOutput.innerHTML = "";
  let count = 0;
  let score = 0;
  let lives = 3;
  let cards = [];

  gameStart();
}

const shuffleArray = (array) => {
          for(let i = array.length -1; i>0; i--){
            const holder = Math.floor(Math.random()* (i + 1));
            const temp = array[i];
            array[i] = array[holder];
            array[holder] = temp;
          }
          return array;
}

let showCard = () => {
        let c = cards[count];
        let bgColor = (c.icon == "H" || c.icon == "D")?'red':'black';
          return '<span class="icard" style="color:'+bgColor+'">'+cards[count].num+'&'+ cards[count].suit+';</span>';
}

const buildCards = () => {
        cards = [];
        for(s in suits){
          const suit = suits[s][0].toUpperCase();
          for(n in numbers){
              const card = {
               suit: suits[s],
               num: numbers[n],
               //think about where the card lies in the array to assign it value
               cardValue: parseInt(n) + 2,
               icon: suit
            }
            cards.push(card)
          }
        }
        // console.log(cards);
      }


// event listeners:
    $('#btnstart').on('click', (e) => {
      $("#cards").empty();
      // console.log('this is working');
      gameStart();
    })

    $('#btnhigh').on('click', (e) => {
      // console.log('High button working');
      hilo('high');
    })

    $('#btnlow').on('click', (e) => {
      // console.log('Low button working');
      hilo('low');
    })

});
