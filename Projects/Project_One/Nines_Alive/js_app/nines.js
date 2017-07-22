// console.log('nines gonna happen quickly');

$(() => {

// console.log('nines alive');

let score = 0;
let time = 30;
let round = 1;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let value = 0;
// let randNum = '';
// let numberNine = 9;


const createSquares = (NumberOfSquares) => {
  for(let i = 0; i < NumberOfSquares; i++) {
    const square = $('<div/>').on('click', (e) => {

    const numberSquare = $(e.currentTarget).text(numbers[i])

    // calculateScore(numberSquare)
      $(e.currentTarget).css('opacity', 0);
    })

    applyRandomNumber(square);

    $('.squares').append(square);
  }
}

// const calculateScore = (square) => {
        // console.log(typeof square);
      //   const valueOfSquare = applyRandomNumber.randNum.value;
      //
      //
      //
      //   // if(valueOfSquare !== ?????) {
      //
      //     score = score + randNum.value;
      //     console.log('value errors are not happening but do i see value updating score yet');
      //
      // $('h1').text('Scoreboard: ' + score)
    // }







const setTimer = () => {
  const timer = setInterval(()=>{
    time--
    if(time === 0) {
    // calculateScore();
    clearInterval(timer);
    // $('.squares').empty();
    round++;
  }

  $('#timer').text('Timer: ' + time + "s")

  }, 1000)
}


const setUpRound = () => {
      $('.squares').empty();

      $('#round').text('Round: ' + round);

            if(round === 1){
              createSquares(50);
              time = 20;
            } else if(round === 2) {
              createSquares(100);
              time = 20;
            } else if(round === 3) {
              createSquares(150);
              time = 20;
            } else if (round < 10) {
              createSquares(250);
              time = 20;
            } else {
              //needs a message alert that game is over
              //win/loss status
            }

}

// activating the begin button and load the squares

$('button').on('click', (e) => {
  console.log('this is working');

  setUpRound();
  setTimer();

  })

  const applyRandomNumber = (square) => {
              const randNum = Math.floor(Math.random() * 9) + 1
              //call randNum to make sure it is working
                        if(randNum === 1) {
                          square.text(1).on('click', (e) => {
                          score-=1
                          // let value = -1
                          // score = score + this.value;
                          // console.log('value errors are not happening but do i see value updating score yet');
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 2) {
                          square.text(2).on('click', (e) => {
                          score-=2
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 3) {
                          square.text(3).on('click', (e) => {
                          score-=3
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 4) {
                          square.text(4).on('click', (e) => {
                          score-=4
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 5) {
                          square.text(5).on('click', (e) => {
                          score-=5
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 6) {
                          square.text(6).on('click', (e) => {
                          score-=6
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 7) {
                          square.text(7).on('click', (e) => {
                          score-=7
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 8) {
                          square.text(8).on('click', (e) => {
                          score-=8
                          $('h1').text('Scoreboard: ' + score)
                        })

                        } else if(randNum === 9) {
                          square.text(9).on('click', (e) => {
                          score+=9
                          $('h1').text('Scoreboard: ' + score)
                        })

                        }
  }







});
