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

This is where we discuss the architecture of the core game logic.

The game logic will assume that the commands it is given are valid. Input validation will be performed by the input validation module.

### Game State

The game state is stored in an object, and contains whose turn it is, the ship grids (stores how the ships are placed), the hit grids (stores where the hits and misses occurred), and a collection of ship objects containing information about the state of the ships. Each player has a ship grid (secret information), and hit grid (public information), and a collection of ship objects (secret information).

The ship grid contains a bunch of cells. Cells can either be water cells or ship cells. Each ship cell has a corresponding ship object, which we can look at to identify the state of the ship. Each ship object also has a collection of cells for each square the ship occupies, which we can use to track how damaged the ship is.

The ship placement is done by identifying a ship to be placed, the grid coordinates where it is to be placed (the front cell of the ship corresponds to the placement coordinate), and the orientation (vertical and horizontal). If the placement can be made, ship cells are placed in the grid at the appropriate location.

### Game Commands

Game commands are objects that identify an action command in the game and its associated parameters. Action commands can be originated from user input, network requests, or just some other code (such as an AI player). This decouples the action from the method of generating it.

### Game Logic Interface

The interface to the game logic will allow the game logic to be encapsulated in its module. The interface will provide the following functionality.

- Allows a game to be created (with a generated ID or an ID as input? How will this effect storage in a data store?) (User IDs for the players should be stored in the game state as well)
- Allows the game state to be retrieved for storage
- Allows a game to be resumed by passing it a game state
- Allows us to put a game action command on the game action command stream (one per game?)
- Exposes a game event stream, which consumers can subscribe to and handle the events (one per game?)
- Tells us whose turn it is

### Game Streams

We could have separate streams per game, but what may happen is that we have a master input stream and event stream that the core game logic will pull from and push to. It should be able to handle a stream of commands from multiple game just fine as long as the objects in the master command stream identify the game that it applies to.

At a higher level, there will likely be per-game streams where we pull the commands from those streams, wrap them in an object that identifies the game that it applies to, and merge them all into the master stream.  The outgoing event stream will be the opposite. A function will be reading all the events off of the master stream, and if they apply to a particular game, unwrapping them and putting them on the game-specific event stream.

## Input Validation

We can create an input to action pipeline in the following manner. We'll have a pipline of streams that will be read from, processed, and possibly transformed and passed to another stream. The final destination will be the game logic. The result will be put on an event stream to be read by the client. An input error will be placed on the client's game event stream, which will radiate events from the core game module outwards.

1. User types in a command in the client
2. Client puts raw input in a raw input stream
3. Client reads raw input from the raw input stream, transforms it into a game command, and puts it in an input command stream. Raw input errors will be placed in the outgoing event stream.
4. Input validation modules reads input commands from the input command stream, validates them using information from the game state, and transforms them into calls to the core game functionality. Input command errors will be placed in the outgoing event stream.

The client reads events from the game event stream and performs actions based on those events. The events may be coming from the server and the core game logic or they could be coming from other parts of the client. 

This model works best with a web sockets connection, but it could also work with REST API calls. We could have a function that reads the input stream on the client and makes the appropriate REST API calls. After the action is processed, the events in the game event stream would then be returned as part of the response and added to the client's game event stream.