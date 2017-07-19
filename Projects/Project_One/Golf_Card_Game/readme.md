==============================================================================>

MVP Planning:

1. Golf will have 9 rounds of playing
2. game will begin w/use of a start button, app will update scores each round and show which round is currently in play
3. Win state = whoever has the least points at the end of round 9 wins
4. Lose state = whoever has the most points at the end of round 9 loses
5. 2 player game: flow of game is controlled by mouse (not sure I like this but is what it is for now)
6.  Player 1 & 2 names are displayed above playing field, and next to them their current score (updated at the end of each round).

==============================================================================>

Game Logic:

1. Player 1 & 2 (prompted?) to input their names to be shown above their playing field (see wireframe).

2. When user presses start game (or deal cards) computer deals 9 random cards to each player, facedown, in each user's playing field which stays the same the entire game.

3. Play deck is up at top of screen, and after cards are dealt, on card is placed faced up for "dealer player" (which alternates each round) has the first turn.

4. First act of both players is to click on any 2 of their 9 cards in their playing field.

5.  Cards, when clicked, reveal random face value card side from standard deck of 52 cards.  

6.  Player that has first turn at the beginning of each round alternates, and on each turn they have the option of picking up the card that is displayed from the player deck at top, or drawing a card from the facedown deck.  

7.  If player chooses to keep either card they drag it over to one of the facedown cards in their playing field.  

8. The facedown card is then placed in the dealer pile at top, face up - and this process is repeated each turn by each player.

9.  If a player has a set of three cards w/the same value either vertical or horizontal, those cards either: 1) disappear automatically, 2) turn to another color, 3) the user must identify that they exist in that game state somehow - maybe by clicking on all three together - or drag/highlight all three and then they disappear, etc.. open to other ideas.  The value of those cards will then not count again the player at the end of the current round.  They are also NOT replaced.  Perhaps 3 matching (horizontal or vertical) cards light up with a different border color to be clicked sequentially to trigger them being removed from the playing field.  

10.  Player has the option of drawing a card from the deck on their turn & choosing not to place it in their playing field, and thus leaving the same number of cards facedown as was at the beginning of their turn.

10.  The end of the round is triggered by a player, placing a card from the dealer deck into the spot where the last face down card was.  Once their remaining cards are revealed, the value of those cards is the basis for their score at the end of the current round.

11.  In the tally of points for the value of each card, there is one exception to the traditional value of cards, and that is with the King card.  The King card is worth zero points.  Any card which does not exist within a matching set of 3 horizontal or vertical cards w/the same number value will impact the score negatively.  Not as a negative integer, but the value of each card unmatched will be added to the player's score.  The player wins by having the least number of points.  So, each player's mission each round is to earn the least points possible by trying to obtain the most matches of 3 in row (horizontal or vertical), and/or having cards in playing field w/the least number value.

12.  The value of the other cards is according to traditional card play values (Ace = 1, 2 = 2, face cards = 10/with the exception of the king).  The jokers are not played in this game.  Color/suit of card played doesn't figure in the game logic.

13.  Once the end of round is triggered, the player who did not turn over their last card has one turn after the player who did trigger the end of the round.  The last turn for that player is the same as all turns.  At the end of this last turn, remaining cards that are in the playing field are totaled by the computer for their number value & matching status & the player's scoreboard is updated before the next round begins.

14.  After Round 9, there is a message from the computer dealer announcing the winner and loser of the game.  Perhaps there is also a message prompt asking if the users would like to play again - when yes is entered, a restart function takes the app back to beginningPlay function.

==============================================================================>

Programmatic Planning:

1. computerDealer = using JQuery & a for loop, 9 random cards will be dealt to each user's playing field (see wireframe) w/either a start game or deal cards button. (like pokeASquare).  Cards a placed facedown (card image png facedown).

2. let score = 0, let round = 0 set to global variables at beginning of program.

3. Each card is a png stored in images. Each card has properties: 1) number value, 2) image path- already stored in this directory, 3) 2 image states: beginning state is facedown image, clicked state is face up,  4) button properties [facedown, faceup, highlighted when in a set of 3 vertically/horizontally, possibly a hidden state after it has been activated as a match set card].  

4. Perhaps cards should be grouped by value?  First thinking is to store them in an array, but with their properties - would be best to store them as objects (grouped by number value in arrays?), or as classes in a factory.  Still pondering this one.

5. Needs player 1 & 2 scoreboards updated at the end of each round (if last card by player 1 & player 2 is faceup or button clicked, computer adds number values of unmatched remaining cards and takes that sum and prints it to the appropriate player's scoreboard before the next round begins).

6. lots of jquery on.click functionality (multiple for each card at specific intervals)

7. maybe a dealer class to store all the functions for gameplay?

8. maybe a eventHandler object for all buttonHandlers, input functions, etc.

9.  user interface methods that update the DOM stored in a UI object... needs clarification

10. application logic could be stored together in an object (computerDealer?): (start game, update score, update round #, gameover message, start again prompt, etc.)
