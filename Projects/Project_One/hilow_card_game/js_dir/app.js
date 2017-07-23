$(() => {

    // console.log('time to place your bets');
    let myDollars = 100;
    let cards = [];
    let count = 0;
    let score = 0;
    let lives = 3;

    const suits = ['spades', 'hearts', 'clubs', 'diams'];
    //ace has highest value so it is placed last in the array
    const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    $('#message').append(message);
    $('#score').append(score);
    $('#cards').append(cards);


    //GO BACK AND PUT THIS INTO PROPER JQUERY LANGUAGE!

    ///this line doesn't work
    const cardOutput = document.getElementById('cards');
    // console.log(cardOutput);




      const gameStart = () => {

        const messageChange = $('#start').on('click', (e) => {
  //when press start the message changes
             $("#message").text("Game Started!");
  // after start button is pressed, it disappears
             $(e.currentTarget).css('display', 'none');

          })

        const $highLowClick = $('#highLow').on('click', (e) => {
  // after start button is pressed, it disappears

  ///this line doesn't work
             $(e.currentTarget).css('display', 'block');

          })

          buildCards();
          shuffleArray(cards);
          //does cardOutput need to be called in another area?
          ////GO BACK AND PUT THIS INTO PROPER JQUERY LANGUAGE!

          ///this line doesn't work
          cardOutput.innerHTML += showCard();
}

          const hilo = (a) => {

            //calculate winner
            const win = false;
            const oldCard = cards[count].cardValue;
            count++;
            ////GO BACK AND PUT THIS INTO PROPER JQUERY LANGUAGE!
            cardOutput.innerHTML += showCard();
            const newCard = cards[count].cardValue;
            if(a === 'high' && oldCard < newCard) {
              win = true;
            } else if (a === 'low' && oldCard > newCard) {
                  win = true;
            } if(win) {
              $("#message").text("You were correct! :)")
              score++
            } else {
              $("#message").text("You were wrong! :(")
              endPlay();
            }
            //try to update score like was done in pokeASquare w/h1 takg
            //update to jquery language from this below
            score.innerHTML = "SCORE: " + score;
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



      const showCard = () => {
        let c = cards[count];
          const bgColor = (c.icon === "H" || c.icon === "D")?'red':'black';
          return '<span class=icard style="color:+bgColor+">'+cards[count].num+'&'+cards[count].suit+'</span>';
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


gameStart();














    $('#btnstart').on('click', (e) => {
      console.log('this is working');
    })

    $('#btnhigh').on('click', (e) => {
      console.log('High button working');
    })

    $('#btnlow').on('click', (e) => {
      console.log('Low button working');
    })

  });
