$(() => {

    // console.log('time to place your bets');

//==========================================================================
// variables:
let myDollars = 0;
let cardOutput = document.getElementById('cards');
let count = 0;
let score = 0;
let lives = 3;
let cards = [];
const suits = ['spades', 'hearts', 'clubs', 'diams'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const $message = $('#message');
let scoreOutput = document.getElementById('score');
//==========================================================================

const gameStart = () => {
//
        const messageChange = $('#start').on('click', (e) => {
  //when press start the message changes
             $("#message").text("Game Started!");
  // after start button is pressed, it disappears
             $(e.currentTarget).css('display', 'none');
             $('#highLow').css('display','block');
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
                                        $("#message").text("You were correct! :)")
                                        score++
                                        } else {
                                        $("#message").text("You were wrong! :(")
                                        lives--;
                                              if(lives<1) {
                                                endPlay();
                                              }
                                        scoreOutput.innerHTML = "SCORE: "+score+"LIVES: ("+lives+")";
                                        }
}



const endPlay = () => {
          document.getElementById('highLow').style.display='none';
          $('#message').text("Game over!  Your score was " + score);
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
        console.log(cards);
      }


// event listeners:

    $('#btnstart').on('click', (e) => {
      console.log('this is working');
      gameStart();
    })

    $('#btnhigh').on('click', (e) => {
      console.log('High button working');
      hilo('high');

    })

    $('#btnlow').on('click', (e) => {
      console.log('Low button working');
      hilo('low');
    })



  });
