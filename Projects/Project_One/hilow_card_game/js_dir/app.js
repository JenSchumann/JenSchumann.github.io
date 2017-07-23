$(() => {

    // console.log('time to place your bets');
    let myDollars = 100;
    let cards = [];
    const suits = ['spades', 'hearts', 'clubs', 'diams'];
    //ace has highest value so it is placed last in the array
    const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];






      const gameStart = () => {

      const messageChange = $('#btnstart').on('click', (e) => {
//when press start the message changes
           $("#message").text("Game Started!");
// after start button is pressed, it disappears
           $(e.currentTarget).css('display', 'none');

        })

          $('#message').append(message);
          buildCards();
          shuffleArray(cards);
}

      const shuffleArray = (array) => {
          for(let i = array.length -1; i>0; i--){
            const holder = Math.floor(Math.random()* (i + 1));
            // console.log(holder);
            // console.log(array[i]);
            // console.log(array[holder]);
            //randomizing the array
            const temp = array[i];
            array[i] = array[holder];
            array[holder] = temp;

          }


        return array;
      }


      const buildCards = () => {
        //need to clear out array each time
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


gameStart();














    $('#btnstart').on('click', (e) => {
      console.log('this is working');

})

  });
