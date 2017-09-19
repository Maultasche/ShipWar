# Software Architecture

## Overview

I'm going to be creating an API using express. I don't plan on using any authentication method early on. I'll implement some hacky method of returning some hard-coded user IDs so that I can distinguish one player from the other, and real authentication and authorization can come later.

Real-time updates will be done via web sockets.

The Node.js client will just print characters showing the state of the game and allow the user to enter some simple commands. 

I really want to do some unit tests, because I love unit tests. Having unit tests automatically validate my code is really nice and tends to expose both code and design flaws early on.

I think what I'll do is implement the core logic first, unit test it, and then start working on the API after that.

I'm not an accomplished functional programmer, but I want to use a more functional style in this implementation. It's a lot easier to unit test.

I'm going to be prioritizing the game logic first, then the API functionality (test with Postman), and then work on the client.

## Game Logic

The game state is stored in an object, and contains whose turn it is, the ship grids (stores how the ships are placed), the hit grids (stores where the hits and misses occurred), and a collection of ship objects containing information about the state of the ships. Each player has a ship grid (secret information), and hit grid (public information), and a collection of ship objects (secret information).

The ship grid contains a bunch of cells. Cells can either be water cells or ship cells. Each ship cell has a corresponding ship object, which we can look at to identify the state of the ship. Each ship object also has a collection of cells for each square the ship occupies, which we can use to track how damaged the ship is.

The ship placement is done by identifying a ship to be placed, the grid coordinates where it is to be placed (the front cell of the ship corresponds to the placement coordinate), and the orientation (vertical and horizontal). If the placement can be made, ship cells are placed in the grid at the appropriate location.