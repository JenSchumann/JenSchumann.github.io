console.log('nines gonna happen quickly');

$(() => {

console.log('nines alive');

let score = 0;
let time = 30;
let round = 1;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

$('<body>').append('#playerOneBoard');
$('<body>').append('#playerTwoBoard');

const createSquares = (NumberOfSquares) => {
  for(let i = 0; i < NumberOfSquares; i++) {
    const square = $('<div/>').on('click', (e) => {
//next line of code retrieves the target number 9 for us:
    const nineVictim = $(e.currentTarget).val('9');
    // console.log(nineVictim);
    checkNineKill(nineVictim)
      $(e.currentTarget).css('opacity', 0);
    })

    applyRandomNumberOne(numbers);

    $('.squares').append(square);
  }
}

const checkNineKill = (square) => {
  // console.log(square, typofsquare)
  const nineVictim = 9;

  // create for loop which iterates over numbers array and returns a value for all the numbers that are not nine which add a value to the score = to their value if all the nines are not gone by the end of the round
  //for now.. this:
  const otherNumbers = [1,2,3,4,5,6,7,8]

  if(nineVictim) {
    console.log('this is passing')
    score++;

  //need to create scoreboard functionality for both players:
    $('h1').text('scoreboard: ' + score)
  } else {
    score--;
    $('h1').text('scoreboard: ' + score)
  }
}






//apply random number
const applyRandomNumberOne = (numbers) => {
  const randNum = Math.floor(Math.random() * (10-1)) + 1
    numbers[randNum];
    $('#playerOneBoard').append('<p>' + numbers[randNum] + '</p>');
    //slice those numbers to drawCardPile where top "card" is hidden until clicked upon?
}

const applyRandomNumberTwo = (numbers) => {
  const randNum = Math.floor(Math.random() * (10-1)) + 1
    numbers[randNum];
    $('#playerTwoBoard').append('<p>' + numbers[randNum] + '</p>');


}



























//set up timer to include clear interval timer
const setTimer = () => {

}



//setup round to include what happens at beginning of each round, and what happens different for each round until the last round
const setUpRound = () => {


}






// activating the begin button and load the squares

$('button').on('click', (e) => {
  console.log('this is working');

  setUpRound();
  setTimer();


})







//maybe add when a 9 is clicked
// playSound();

















});
