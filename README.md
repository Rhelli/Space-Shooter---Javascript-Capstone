<p align="center">
  <img src="previews/title-scene.gif" alt="Deep Space Defenders Main Menu" width="800" height="auto">

  <h1 align="center">🛸👾 Deep Space Defender</h1>


<h3 align='center'>
    A Retro Space Shooter, Made With Javascript, Phaser 3 and Webpack
</h3>
<p align="center">
    <br />
    <a href="https://rhelli.github.io/Space-Shooter---Javascript-Capstone/"><strong>🕹️ Play The Game »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/archive/feature/readme.zip">Download this repository</a>
    |
    <a href="https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/issues/new/choose">Report A Bug</a>
    |
    <a href="https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/fork">Fork It</a>
  </p>
</p>


## 📑 Table of Contents
  - [The Project Brief](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#-the-project-brief)
  - [The Nitty Gritty](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#%EF%B8%8F-the-nitty-gritty)
  - [Tools & Technology Used](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#-tools--technology-used)
  - [Setup & Use](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#-setup--use)
  - [Showcase](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#-feature-previews)
  - [Contributions, Issues and Forking](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#%EF%B8%8F-contributions-issues-and-forking)
  - [Creator](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#-creator)
  - [Show Your Support!](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#-show-your-support)
  - [Licensing](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/tree/feature/readme#%EF%B8%8F-licensing)


## 🔰 The Project Brief

This is the Javascript Capstone Project, to be completed by students of [Microverse](https://www.microverse.org/).

With 5 days to complete the Javascript Capstone project, there's a lot of work to be done - but that's the point. The Javascript Capstone, much like those before it, are meant to test us in more realistic, industry-like situations. We're given a project to tackle, which often includes a new piece of tech and given a tight deadline to adhere to.

For this particular Capstone project, I was tasked with creating a 'shooting' game in 5 days, using Phaser - a new technology to me at the beginning of the 5 days. Additional requirements were to build in functionality for a scoreboard and storing via a provided Service API, as well as include tests for all functions not encased in Phaser classes.

## 🛠️ The Nitty Gritty
The Capstone project was broken down into 5 particular days of events:

### Day 1 - Learning About the Phaser Javascript Library
This step included getting to grips with the potential that Phaser held. Additionally, ensuring that Phaser was set up correctly with Webpack was a crucial first step - if they wern't playing nice from the get-go, no progress was going to be made anytime soon.

### Day 2 - Game Design and Assembling Assets
The design direction I chose was a typical, retro feeling game. The tutorial that was initially provided created the basis for the game that I finalised in the end, however there were multiple changes, tweaks and additions I made to make a game that was more engaging than that suggested in the tutorial. Namely, I wanted to include:
  - A parallax effect for the background
  - Multiple enemies
  - A progression in the difficulty as the player's score increased
  - Messages for the player
  - Some semblance of a story for the player to follow

The result of wanting to make the game more dynamic than suggested by the tutorial was a greatly increased need for assets. As a result, a lot of searching was done on [OpenGameArt](https://opengameart.org/), which is a fantastic source for anyone looking for assets for non-commercialised games.

### Day 3 - Game Setup (Basic scene creation, player movement, game boot, etc)
Following a previous tutorial and mixing it with other tutorials, this stage included creating the numerous scenes that would be completed at a later stage. Namely;
  - The 'Boot Scene', which starts the game;
  - The 'Preloader Scene', which is responsible for pre-loading all game assets so they do not need to be loaded at each scene start;
  - The 'Player Name' scene, where the user enters their user name (or pilot name) for use in the highscore screens;
  - The 'Title Scene', otherwise known as the 'Main Menu' to the player;
  - The 'Story Scene', where a basic story is relayed to the user for a bit of fun;
  - The 'Game Scene', where all the action is at;
  - The 'Game Over' scene, where all the action ain't;
  - The 'Post Game Highscore Scene', where the users recently attained score is uploaded to online storage via the provided service API. Previous scores are also shown.
  - The regular 'Highscore Scene', accessible from the Main menu, this is where the user goes to see the current leaderboard of scores.
  - The 'Options Scene', where game options can be managed, and;
  - The 'Credits Scene'

In addition to the creation of these scenes, enabling player movement in the 'Game Scene' was of paramount importance in order to begin creating some interactivity.

### Day 4 - Enemy Creation and Spawning Enemies
Once the basics of the scenes had been set up and player movement had been introduced, enemies were defined, created and a spawning system was created. However, as this game includes 5 different enemies, this in turn meant creating:
  - 5 different spawning systems - We don't want all the enemies to spawn at the same time or simply staggered... Thats boring!
  - 5 different classes for the enemies - They have to act differently too!
  - 5 different classes for the enemies weapons - Again, these can't all be the same!

### Day 5 - Score System implementation & Finalisation with additional features
This stage entailed piecing together the different enemies and the player's interaction. In reality, the scoring system is fairly basic:
  - Gunships (i.e. the Pink and Green ships) are worth 1 point each;
  - Chaser Ships (i.e. the Blue ones which follow you if you get too close) are worth 2 points each;
  - The Carrier Ships (i.e. the Yellow one) are worth 4 points each.

Additionally, we were required to connect our in game scores with a service API in order to make the storage of our scores a tad more persistent. It was also at this stage that I decided to include a few features which I thought would benefit the final outcome of the game. Namely:
  - Difficulty progression: The more ships you destroy, the greater the decrease in time between the spawn of a new ship;
  - Filling out the Story Scene
  - Adding messages for the player depending on the number of ships they have downed

## 🔬 Tools & Technology Used
**Languages & Frameworks**
 - Javascript
 - [Phaser 3.24.1](http://phaser.io/)
 - Webpack 5.4.0

**Package Management**
 - NPM

**Testing**
 - [JEst 26.6.3](https://jestjs.io/)

**Linters & Quality Control**
 - [ESLint](https://eslint.org/)
 - [StyleLint](https://stylelint.io/)

**Deployment**
 - Github Pages

### 💻 Setup & Use
Follow [this link]() to see a live version of the project. If you'd like a closer look, continue reading....

#### Setup
For a direct link to the game, [head here.](https://rhelli.github.io/Space-Shooter---Javascript-Capstone/)

1. To inspect and tinker with the code on your system, download this repo either [here](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/archive/feature/readme.zip) or from the link at the top of the page

2. Now it's time to ensure you've got Node and NPM installed. If you do, skip this step. Otherwise, head on over to [nodejs's website](https://nodejs.org/en/) to download node with npm.

3. Time to go back to the project! Open your terminal (either in your text editor or otherwise) and 'cd' (i.e. navigate) to the root of this repo.

4. Time to install Webpack! Ensuring you're at this repo's root, enter the following command into your terminal. This will install webpack locally (to this project only):

        npm install --save-dev webpack

5. Finally, once webpack has installed successfully, run the following command to install all of the projects dependencies:

        npm install

#### Code Usage
There are a few commands that you can use interact with the project:
 - `$npm run build` - This will build the project using webpack and bundle everything into the `/dist` folder. From here, you can open the `index.html` in your browser to play the game.

 - `$npm run watch` - This will build and update the project in the `/dist` folder **actively**, meaning changes will update `/dist`. You will, however, have to refresh the browser to see changes.

 - `$npm run start` - This will build and update the project with changes. No browser refresh required. This is appropriate for if you want to edit the games files and have the page update on save.

 - `$npm run test` - This will run all tests for the project with the written Jest tests.

#### Playing the Game ⬆️⬇️⬅️➡️
The game has a very basic control system all gamers will be familiar with - WASD!
 - W - Move the ship forwards;
 - S - Move the ship backwards;
 - A - Move the ship left;
 - D - Move the ship right;
 - Spacebar - Fire the lasers!

The objective of the game? Destroy as many of the enemy as possible! The game is set up so that it will progressively get more difficult the more enemies you defeat, so keep at it!

******

## 🎬 Feature Previews

### The Main Game Scene

<p align="center">
<a href="previews/game-scene.gif"><img src="previews/game-scene.gif" alt="The Main Game Scene" width="800" height="auto"></a>
</p>

> A Quick Preview of the In-Game action

### The Post-Match Highscores

<p align="center">
<a href="previews/highscore-scene.gif"><img src="previews/highscore-scene.gif" alt="The Highscore Scene" width="800" height="auto"></a>
</p>
> A preview of the Post-game highscore scene, where users can see their scores stack up against those previously attained. All previous highscores are fetched via service API.


*******

## 🛎️ Contributions, Issues and Forking

Contributions, issues and feature requests are more than welcome!

If you have any problems playing the game or setting it up, please submit it as a bug on the [issues page.](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/blob/feature/readme/issues) right away!

If you want to make your own changes, modifications or improvements, go ahead and Fork it!
1. [Fork it](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/blob/feature/readme)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request

## 💂🏽💻 Creator

Rory Hellier - [Github](https://github.com/Rhelli)

## 🖐🏼 Show Your Support!
Give a ⭐️ if you like this project!

## ⚖️ Licensing
This project is [GNU](https://github.com/Rhelli/Space-Shooter---Javascript-Capstone/blob/feature/readme/LICENSE.TXT) licensed.
