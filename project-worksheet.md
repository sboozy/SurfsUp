# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

    My game is a timed, surfer-themed game where an object (the surfer) tries to avoid hitting other objects (turtles.) I'm going to use the 2D-collision detection function to record when the two objects collide, and the player then gets a time penalty.  When the game ends the player is rated on a scale based on their time. 

## Wireframes
  ![](images/wireframe.jpg)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

-obtain necessary imagery for files
-animate the background image and creat surfer div
-assign event listeners for keyup/keydown so that keyboard arrows can move surfer on the Y-axis
-create turtle divs and test for 2D-collision 
-visually alert the user that there has been a collision
-assign positioning to turtles
-turn on/off display of positioned turtles
-use Math.random to give "turtles" random positioning (but limited so they don't fly in the sky)
-store collision events and equate to time penalty
-add end game function
-add timing function (also show timing)
-add landing page choose player option
-add audio and option to turn off
-make surfer "shimmy"
-if X amt of collisions occur, animate wave across page and pop up "GAME OVER"

## Game Components

### Landing Page
What will a player see when they start your game?
    -Welcome page that asks you to choose guy/girl surfer
    -option to listen to music 
    -instructions on how to use up/down arrows to move surfer

### Game Initialization
What will a player see when the game is started? 
    -A surfer on a surf board and the background with a delayed start to moving on the X-axis.

### Playing The Game
What will be the flow of the game, what will the user be expected to do and what will the user expect from the game.
    -User is expected to use up and down arrows to move surfer up and down the screen to avoid collision objects (turtles).  If there is a collision there will be a visual cue that alerts the user but the game will continue on.

### Winning The Game
What does it look like when the game ends, what determines winning or losing?
    -The game runs an allotted amt of time so when that time is up the game is up.  Any collisions add time to the total time.  The user's time total is measured against a scale which determines which of 3 messages appear to the user at the end of the game. 


### Game Reset
How will the user restart the game once it has been completed.
    -Reset button following end of game prompt

## MVP 
Include the full list of features that will be part of your MVP 
-landing page with choices
-game page
-moving divs
-detect and log collisions
-timer
-end game
-reset game

## POST MVP
-surfer shimmy
-multiple types of "road blocks"
-game over wave


Include the full list of features that you are considering for POST MVP
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Landing Page HTML/CSS| H | 4hrs| 0hrs | XXhrs |
| Gaming Page HTML/CSS | H | 4hrs| 0hrs | XXhrs |
| Logic for moving background  | H | 2hrs| 0hrs | XXhrs |
| Logic for collision and visual indicator| H | 10hrs| 0hrs | XXhrs |
| Logic for turtle display and location| H | 8hrs| 0hrs | XXhrs |
| Logic for timing | H | 5hrs| 0hrs | XXhrs |
| Logic for Game Over | H | 5hrs| 0hrs | XXhrs |
| Logic for restart | H | 2hrs| 0hrs | XXhrs |
| add landing page options | H | 6hrs| 0hrs | XXhrs |
| Bonus - surfer shimmy | H | 2hrs| 0hrs | XXhrs |
| Bonus - game over wave & logic | H | 6hrs| 0hrs | XXhrs |
| Total |  | 48hrs| 0hrs | XXhrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
