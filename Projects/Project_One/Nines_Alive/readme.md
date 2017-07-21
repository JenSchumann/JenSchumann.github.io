//started new game based off of most basic MVP game logic from my Golf Game idea to get basic functionality first, and then build off from there to include Golf Game logic later

==============================================================================>

MVP Planning:

1.  Nines alive will have 9 rounds
2.  Game will begin w/use of start button, app will update scores each round and show which round is currently in play on a stat board in the header
3.  Win state: whoever has the least amount of points at the end of 9 rounds wins.. which is determined by whether all nines were clicked on during each round (if they weren't values of the numbers remaining were added as a sum for that round's score for each player)
4.  Lose state: whoever has the most points at the end of the 9th round loses
5.  2 player game: flow of game is controlled by mouse (could build in functionality for touch screens/phones later)
6.  Player 1 & 2 stats are distinguished with their respective player positions in the header (this could be updated to include input function allowing users to update header w/their name).

==============================================================================>

Game Logic:

1. After MVP established: Player 1 & 2 (prompted?) to input their names to be shown above their playing field (see wireframe).

2. When user presses start game (or deal cards) computer deals 9 random squares w/numbers printed on them to to player 1.  They have 30 seconds to click on all the 9s on the screen.  Then player 2 has their turn.

3.  Rounds 2-9 repeat w/some variation in time & number squares to address.

4.  When the timer runs out for each round OR all 9s in that round for that player are clicked, a tallyScore function is activated which totals the sum of numbers remaining if there were any 9s still on their player board.

5.  After Round 9, there is a message from the computer dealer announcing the winner and loser of the game.  Perhaps there is also a message prompt asking if the users would like to play again - when yes is entered, a restart function takes the app back to beginningPlay function.

==============================================================================>

Programmatic Planning:

1. computerDealer = using JQuery & a for loop, 9 random number squares will be dealt to each user's playing field (see wireframe) w/either a start game or deal cards button. Need to address functionality  to load number squares for player 1 & 2 at appropriate intervals.

2. let score = 0, let round = 0 set to global variables at beginning of program.

3. need on.click target listener set for "killing" nines from the round (make them disappear when clicked on & subtract their value)

4. need to create if/else if statement for tally points after each round.. if has 9s, add values of other numbers remaining... if has no 9s score for that round is 0 added to the player's scoreboard.

5. Needs player 1 & 2 scoreboards updated at the end of each round before the next round begins.

6.  user interface methods that update the DOM stored in a UI object.

10. application logic could be stored together in an object (computerDealer?): (start game, update score, update round #, gameover message, start again prompt, etc.)

==============================================================================>
