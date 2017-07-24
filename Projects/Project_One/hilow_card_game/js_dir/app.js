$(() => {

    // console.log('time to place your bets');
    // let myDollars = 100;
    // let cards = [];
    // let count = 0;
    // let score = 0;
    // let lives = 3;
    //
    // const suits = ['spades', 'hearts', 'clubs', 'diams'];
    // //ace has highest value so it is placed last in the array
    // const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    // const $message = $('#message');
    // // $('#message').append(message);
    //
    // let scoreOutput = $('#score')
    // // let scoreOutput = $('#score').append(score);
    // // const $cards = $('#cards')
    // let cardOutput = document.getElementById('cards');


    //GO BACK AND PUT THIS INTO PROPER JQUERY LANGUAGE!

    //TRY THIS:
//also try w/#
    // $('cards').attr(cardOutput);

    ///this line doesn't work
    // const cardOutput = document.getElementById('#cards');


//==========================================================================
// = () => {
//
//         const messageChange
// const $highLowClick =
// $('#highLow').css('display,' 'block')
//
// .on('click', (e) => {
//
//      $(e.currentTarget).css('display', 'block');
//
// });
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
          //does cardOutput need to be called in another area?
          ////GO BACK AND PUT THIS INTO PROPER JQUERY LANGUAGE!

          ///this line doesn't work
          // cardOutput.html += showCard();
          // $(cardOutput).html += showCard();
          cardOutput.innerHTML +=showCard();
          // scoreOutput.html = "SCORE: " + score+ " LIVES:("+lives+")";
          // scoreOutput.innerHTML = "SCORE: "+score+"LIVES: ("+lives+")";


}


let hilo = (a) => {

            //calculate winner
            let win = false;
            let oldCard = cards[count].cardValue;
            count++;
            ////GO BACK AND PUT THIS INTO PROPER JQUERY LANGUAGE!
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

          // '<span class="icard" style ="color:' + bgColor + ' ">' + c.num +'&'+ c.suit +';</span>';
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
