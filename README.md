<p align="center">
  <img src="screens/preview.png" alt="Stay In Touch's Home Page" width="900" height="auto">

  <h1 align="center">🛸👾🕹️ Deep Space Defender</h1>


<h3 align='center'>
    A Retro Space Shooter, Made With Javascript, Phaser 3 and Webpack
</h3>
<p align="center">
    <br />
    <a href="https://secret-cliffs-91268.herokuapp.com/"><strong>Play The Game »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/archive/release/0.1.0.zip">Download this repository</a>
    |
    <a href="https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/issues/new/choose">Report A Bug</a>
    |
    <a href="https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/fork">Fork It</a>
  </p>
</p>


## 📑 Table of Contents
  - [The Project Brief](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#-the-project-brief)
  - [The Nitty Gritty](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#%EF%B8%8F-the-nitty-gritty)
  - [Tools & Technology Used](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#-tools--technology-used)
  - [Setup & Use](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#-setup--use)
  - [Showcase](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#-feature-previews)
  - [Contributions, Issues and Forking](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#%EF%B8%8F-contributions-issues-and-forking)
  - [Creator](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#-creator)
  - [Show Your Support!](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#-show-your-support)
  - [Credit & Acknowledgements](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#credits--acknowledgements)
  - [Licensing](https://github.com/Rhelli/RoR-Capstone---Activity-Tracker/tree/release/0.1.0#%EF%B8%8F-licensing)


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
 - Ruby 2.7.1
 - Ruby on Rails 6.0.3.1
 - SASS/CSS3
 - Bootstrap

**Gems of note**
 - [Devise](https://github.com/heartcombo/devise)
 - [Faker](https://github.com/faker-ruby/faker)
 - [HIRB](https://github.com/cldwalker/hirb)  (GOAT Award 🥇)
 - [Bullet](https://github.com/flyerhzm/bullet)
 - [FontAwesome](https://rubygems.org/gems/font-awesome-rails/versions/4.7.0.2)

**Testing**
 - [RSpec 3.9](https://rspec.info/)

**Database**
 - PostgreSQL

**Linters & Quality Control**
 - [Stickler CI](https://stickler-ci.com/)
 - [Rubocop 0.85.0](https://github.com/rubocop-hq/rubocop-rails)

**Deployment**
 - Heroku

### 💻 Setup & Use
Follow [this link](https://secret-cliffs-91268.herokuapp.com/) to see a live version of the project. If you'd like a closer look, continue reading....

#### Setup
Setup should be fairly straightforward. You will have to ensure your machine is properly equipped to run the code first:
  1. Make sure you have both [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and Ruby on Rails ([Mac](https://gorails.com/setup/osx/10.15-catalina) • [Linux](https://gorails.com/setup/ubuntu/19.10) • [Windows](https://gorails.com/setup/windows/10)) installed.
  2. Download this repository.
  3. **`cd`** into the root directory of wherever you download this repo. [What does 'cd' mean?](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html)
  4. Whilst at the root (home) directory of this project, enter **`bundle install`** to install the projects software dependencies.
  5. In your terminal window, enter **`rails server`** to start the server.
  6. Now navigate to **`localhost:3000`** in your browser to start playing around with the webpages!

Alternatively if you'd like to confirm the entire project is passing testing:
  1. **`cd`** into this repository in your terminal
  2. Enter **`bundle exec rspec`** to run all tests


******

## 🎬 Feature Previews

### Creating Activities, getting statistics and Deleting Activities


<a href="screens/creating-activities.gif"><img src="screens/creating-activities.gif" alt="Creating & Destroying Activities" width="800" height="auto"></a>

> Creating an activity will log it immediately, provide you with its statistics on the Activity Page and increment the weekly activity count on the users profile.

### Creating and Destroying Groups


<a href="screens/group-creation.gif"><img src="screens/group-creation.gif" alt="Creating and Destroying Groups" width="800" height="auto"></a>

> From the 'My Groups' page, the user can see all their active group memberships, as well as suggested groups not yet joined. Continuing to the 'Create Group' page allows the user to create a new group with a name, description and auto-populated group icon. A new group will appear site wide.

### The Group Page, KOMs and Membership


<a href="screens/group-membership.gif"><img src="screens/group-membership.gif" alt="Creating A New Post" width="800" height="auto"></a>

> Navigating from the 'My Groups' page, the user can find new groups in the 'Suggested Groups' section. On the Group page itself, the user is presented with the option to join (or leave) the group, the current member list with [KOMs](https://en.wikipedia.org/wiki/King_of_the_Mountains) and trophies and recent activities at the bottom.

*******

## 🛎️ Contributions, Issues and Forking

Contributions, issues and feature requests are more than welcome!

If you have any problems running or setting this project up, please submit it as a bug on the [issues page.](https://github.com/Rhelli/StayInTouch-Social-Media/issues) right away!

If you want to make your own changes, modifications or improvements, go ahead and Fork it!
1. [Fork it](https://github.com/Rhelli/StayInTouch-Social-Media/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request

## 💂🏽💻 Creator

Rory Hellier - [Github](https://github.com/Rhelli)

## 🖐🏼 Show Your Support!
Give a ⭐️ if you like this project!

## 🍻 Credits & Acknowledgements
The original design specifications and influence for this project are drawn from [Gregoire Vella's Snapscan](https://www.behance.net/gallery/19759151/Snapscan-iOs-design-and-branding?tracking_source=) design on Behance.

## ⚖️ Licensing
This project is [MIT](https://github.com/Rhelli/StayInTouch-Social-Media/LICENSE.txt) licensed.
