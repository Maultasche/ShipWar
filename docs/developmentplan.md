# Development Plan

This is a plan with how I will proceed with the development of this application. I'm not yet certain how far down this list I will go. It's possible I may just declare it good enough if I'm not seeing any value from continuing it. The primary purpose is to practice what I know and learn new things.

1. Start with the game logic
	- This is where we will implement the basic game logic and unit tests
	- We should be able to take this logic and drop it into any kind of service or application
	- The core game logic should assume that the input is valid
2. Create the input validation logic that sanitizes the input to the core game logic, returning appropriate error codes and messages for bad input.
3. Create the game service with a REST API layer and web socket connections
	- The game state will be stored in memory
	- This game service will initially only support a single game at one time
	- Test the REST API manually with Postman, and then create automated scripts to test the REST API and the web sockets connections
	- The game service has a hard-coded game already set up, and the users will pass their their authentication tokens when they want to do something
	- The API should respond with an appropriate error when the user tries to do something that is not allowed, such as making a bad move or trying to play the game before the placement phase has been completed
	- The API should allow the user to retrieve the current game state at any time
	- The game should be recoverable if the connection gets broken
4. Create a very basic user service which authenticates two hard-coded users, and issues hardcoded tokens for use with the game service.
5. Create the command-line client application, which should be able login and play a full game
6. Create wireframes for web application to demonstrate functionality and flow
7. Create static designs for web application
8. Create static HTML pages with styles for web application
9. Implement basic web application with simple login screen that either starts a new game or continues existing game
10. Create data service to store information regarding users and games in a MongoDB database
11. Enhance the game service to use the data service for storing and retrieving data
12. Enhance the user service to do the registration, authentication, and user management functionality necessary for real user accounts
	- Username/password authentication
	- Google authentication?
	- Github authentication?
13. Enhance game service to handle multiple users playing games at once
	- Each user can only play one game at a time
14. Create a basic metagame service to match two players to a game
15. Enhance the web application to make use of the new user functionality
	- Users should be able to log in, start a game and wait for someone to join
	- If they are already in a game, and the other player isn't connected, they must wait for other player to connect
	- User can abandon game at any time
	- After abandoning a game, a user can start a new one
	- User can log out
	- Landing page should contain functionality for use when not in a game
16. Enhance application to handle multiple games per user
	- Metagame service will be greatly expanded
	- Users can see all their games, whether their opponent is connected, and if it is their turn
	- Users should be able to switch between multiple game easily
	- User should be notified when it is their turn in a game they are playing
		- Perhaps we can display some sort of notification badge that displays a game switcher widget when clicked on, or we can have a sidebar with status badges when an opponent is connected and another status badge when it is the player's turn.
	- User should be able to start a new game without an opponent and then wait for matchmaking while playing other games
17. Implement bonus features

This is a lot of work, so the features toward the end may not happen or may be a long time coming. We'll see!
