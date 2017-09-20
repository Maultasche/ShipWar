# Software Architecture

## Overview

We're going to go for a microservices architecture, although this is a small enough application that we won't need very many services. I'm envisioning a service that will handle authentication and user management, which I'll call the user service. Then there will be a service that will handle matchmaking and various other bits of metagame functionality, which I'll call the metagame service. Then there will be a service for handling ongoing gameplay, which I'll call the game service. We can also have a service for handling data storage, which will do the work of fetching and storing data. The data storage service is an internal service.

Internal services will be contained in Docker containers that aren't publically accessible.
 
I'm going to be creating the APIs for these services using express. I don't plan on using any authentication method early on. I'll implement some hacky method of returning some hard-coded user IDs so that I can distinguish one player from the other, and real authentication and authorization can come later.

Real-time updates will be done via web sockets.

The initial Node.js client will just print characters showing the state of the game and allow the user to enter some simple commands. 

I really want to do some unit tests, because I love unit tests. Having unit tests automatically validate my code is really nice and tends to expose both code and design flaws early on.

I think what I'll do is implement the core logic first, unit test it, and then start working on the API for the game service after that.

I'm not an accomplished functional programmer, but I want to use a more functional style in this implementation. It's a lot easier to unit test.

I'm going to be prioritizing the game logic first, then the API functionality (test with Postman), and then work on the client.

## Game Logic

The game state is stored in an object, and contains whose turn it is, the ship grids (stores how the ships are placed), the hit grids (stores where the hits and misses occurred), and a collection of ship objects containing information about the state of the ships. Each player has a ship grid (secret information), and hit grid (public information), and a collection of ship objects (secret information).

The ship grid contains a bunch of cells. Cells can either be water cells or ship cells. Each ship cell has a corresponding ship object, which we can look at to identify the state of the ship. Each ship object also has a collection of cells for each square the ship occupies, which we can use to track how damaged the ship is.

The ship placement is done by identifying a ship to be placed, the grid coordinates where it is to be placed (the front cell of the ship corresponds to the placement coordinate), and the orientation (vertical and horizontal). If the placement can be made, ship cells are placed in the grid at the appropriate location.

The game logic will assume that the commands it is given are valid. Input validation will be performed by the input validation module.

## Input Validation

We can create an input to action pipeline in the following manner. We'll have a pipline of streams that will be read from, processed, and possibly transformed and passed to another stream. The final destination will be the game logic. The result will be put on an event stream to be read by the client. An input error will be placed on the client's game event stream, which will radiate events from the core game module outwards.

1. User types in a command in the client
2. Client puts raw input in a raw input stream
3. Client reads raw input from the raw input stream, transforms it into a game command, and puts it in an input command stream. Raw input errors will be placed in the outgoing event stream.
4. Input validation modules reads input commands from the input command stream, validates them using information from the game state, and transforms them into calls to the core game functionality. Input command errors will be placed in the outgoing event stream.

The client reads events from the game event stream and performs actions based on those events. The events may be coming from the server and the core game logic or they could be coming from other parts of the client. 

This model works best with a web sockets connection, but it could also work with REST API calls. We could have a function that reads the input stream on the client and makes the appropriate REST API calls. After the action is processed, the events in the game event stream would then be returned as part of the response and added to the client's game event stream.