# Technology Decisions

This project is clearly going to need an API with client applications that the players can use to connect to the API. So we'll need something that can implement an API and something that can implement the client.

For ther server-side piece of the application, I'm going to use express and Node.js. 

The API will be a REST API, which can be used for authentication and game setup. Once the game is underway, realtime game updates can happen via websockets.

At first, I'm going to create a simple Node.js command line application that can act as a client. It won't be pretty, but it will get the job done. Then I can make things pretty with a nicer web client.

Jest will be used for unit testing, lodash will be used for its various useful functionality.

Initially, the game will be managed in memory, but I'll expand that later to a MongoDB data store. There's no particular reason that MongoDB has to be the data store; I just want to better learn MongoDB.

