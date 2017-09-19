# Game Rules

## Setup
1. Each player starts off with a 10x10 board. Players cannot see their opponent's board, but they can see where each player has fired shots, and whether those shots hit or miss.
2. Before the start of the game, each player must place five ships: Carrier (occupies 5 spaces), Battleship (4), Cruiser (3), Submarine (3), and Destroyer (2).
3. Ship can be placed vertically or horizontally on the board. A ship may not overlap or be adjacent to another ship, although they may touch on the diagonal.

## Game Play
1. A player selects a location on their opponents grid to shoot at.
2. The shot either hits or misses, and that is recorded on the player's hit grid.
4. When all squares occupied by a given ship are hit, the game indicates that a ship has been sunk. A player is able to see how many ships have been sunk.
5. The opponent now gets a turn.
5. The game ends once all of one player's ships have been sunk.

## Bonus Rules
I'll implement these once the basic gameplay has been implemented.

1. Prior to attacking, each player may move one undamaged ship one square along the axis the ship is placed on, or may rotate the ship 90 degrees along either end of the ship. Any movement which would result in an invalid board position (overlapping ships, adjacent ships, or off-the-board ships) is prohibited. Damaged ships cannot move or rotate.
2. If all squares of a ship have been hit, the ship is considered sunk. The attacking player is not informed when a ship is sunk.
3. If the shot is a “hit” and the attacking player has more than one undamaged ship, the attacking player may immediately fire a second time. Regardless of whether the second shot is a hit or a miss, the attacker’s turn is over.
4. If a player believes to have sunk all of their opponent’s ships, they indicate victory prior to attacking. If they are incorrect, they lose their attack that turn. (The game is over once all of one player’s ships have been sunk and the other player realizes this fact. If they do not, the player whose ships are all sunk may continue to attack, potentially winning the game if they correctly declare victory first.)
