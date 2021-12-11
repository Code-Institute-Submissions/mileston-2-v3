# Flappy Dragon

My project is a click / tapping javascript game called "Flappy Dragon", inspired by the hit game flappy bird. This game is very simple, all you have to do is click or tap your screen
to fly your dragon between the deadly water pipes.
 
## UX
### Targeted User
* This website is targeted at gamers that are interested in video games.
* People of all ages.
* Have an interest in mobile style games.
* Enjoy trying to get go as far as you possibly can within a video game.

### User Story
1. As a new user to this Website, I want to easily navigate the website so i can find 
the information i need.
2. As a new user to this Website, I want important information I need on the home page so
I can make a decision quicker.
3. As a new user to this Website, I want to be able to know what this website is about and what it can do.
4. As a new user to this Website, I want to know how to play the game that is being shown.
5. As a new user to this Website, I want to be able to play the game as easily as possible. 
6. As a new user to this Website, I want to know when the game has ended.

### Wireframes
My wireframes can be found within my files as seen bellow.

#### Wireframe 1.o
Stored in this repository as "wireframe-1.0.pdf"

## Features
* Each page features the same navigation bar to create consistency
throughout the webpage.
* Each page is also reponsive.
* The home page features a hero image with overlayed text, this hero image is the first thing 
you see when you load up the webpage and it is supposed to grab the users attention and tell the user what the website is about.
* There is a how to play button in the navigation menu that triggers a pop up on how to play the game.
* There is a play now button in the navigation bar which allows the user to play the game imediately. 
 
### Existing Features
* Navigation Bar - allows user to easily navigate the entire website. Exists on every page 
* Home Page (index.html) - Allows user to get all information that they would need in order 
to make a decision on if they would like to play the game, such as what to expect the game to be about, and how to navigate the site.
* How to play button - Pop up that allows user to understand how the game is played. 
* Play The Game (game.html) - Allows user to allows user to play the game.

### Features Left to Implement
* A feature I would like to implement in the future would be video a video tutorial in the how to play pop-up, so that a user can get
a even better understanding of how to play the game.
* A high score counter so the user knows how far they got.
* Sound Effects
* Allow users to share their high score via social media.

## Technologies Used
* This website uses HTML programming language.
* This website uses CSS programming language.
* This website uses Javascript programming language.
* This website uses Bootstrap CDN. bootstrap was used to ensure a responsive and consistent 
website. [https://www.bootstrapcdn.com/] 

## Testing
W3C Markup Validation ans W3C CSS Validation were used to validate the code of the website.
* [https://validator.w3.org/]
* [https://jigsaw.w3.org/css-validator/]


### Testing User Stories
1. As a new user to this Website, I want to easily navigate the website so i can find 
the information i need.
* The navigation bar can be easily found on every page of the website.
* When you hover on the links in the navigation bar, the links change color to let the user know what they are about to click.

2. As a new user to this Website, I want important information I need on the home page so
I can make a decision quicker.
* The hero image has core information overlayed on to it about the Website
* The user is presented with all information needed to make a decision on wheter to continue or not.

3. As a new user to this Website, I want to be able to know what this website is about and what it can do.
* The Home page has all information imediately available to the user.

4. As a new user to this Website, I want to know how to play the game that is being shown.
* The navigation bar on the top of the page has a how to play button that triggers a pop up for the user on how to play.
* Information on the home page tells you how to find information on how to play the game.

5. As a new user to this Website, I want to be able to play the game as easily as possible. 
* Information on the home page tells you how you can play the game imediately.
* The navigation bar on the top of the page has a play now button that brings you directy to the game.
* The game only requires one input from the user, a click.

6. As a new user to this Website, I want to know when the game has ended.
* Once the game has ended or the user fails, a popup is triggered congratulating the user and letting them know the game is over.

### Manually testing functionality of the website
#### Home Page:
1. Navigation Bar:
* Go to the homepage with a desktop screen size.
* Hover over "home", "how to play" and "Play now" ensureing that the text changes colour when hovering
and colour goes away when you finish hovering.
* Click on each link making sure that you arive to the correct destination.
* Change screen size from desktop to tablet to make sure the navigation bar is responsive and
that there is no overflow issues.
* Change screensize from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet.

2. Hero image / Overlayered text:
* Go to the homepage with a desktop screen size
* Make sure image take up 100% of the width.
* Make sure transparent layer completely covers image
* Ensure overlayed text is in the correct position and is easy to read
* Change screen size from desktop to tablet checking responsiveness of the image and the text.
* Change screen size from tablet to mobile and repeat the above step. 
* Repeat these steps again using a mobile device and a tablet.

3. How to play button:
* Go to the homepage with a desktop screen size
* Click the how to play button ensureing the pop up does pop up
* Ensure the pop up has a header with a title
* Ensure the pop up has a main content section detailing how to play.
* Allow user to click out of the popup
* Repeat on every page.
* Change screen size from desktop to tablet to make sure the all content responds properly and
that there is no overflow issues with padding or margins.
* Change screen size from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet.

#### Play Now Page:
1. Navigation Bar:
* Repeat the same steps for navigation bar on Home Page
* Ensure the code is identical

2. Game:
* Game should start imdediately
* Clicking only the game area only should make the dragon fly
* Dragon should not be able to fly off of the top of the screen
* Waterpipes should move towards the dragon
* Waterpipes should contiuously spawn until pipes are hit by dragon
* When dragon hits a pip the game should end and trigger game over pop up.
* Change screen size from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet

3. Game Over pop-Up:
* Once game over is triggered a pop up should be triggered
* ensure pop up has a header with correct content
* Ensure the pop up has a main content section detailing correct information.
* Allow user to click out of the popup
* Ensure this pop up only triggers from the game.html page.
* Change screen size from tablet to mobile and repeat the above step.
* Repeat these steps again using a mobile device and a tablet

### More Testing
1. Asked family and friends to look at the site to see if they could find any bugs. 
(This happened after I had done all my own testing and they were unable to find any bugs)

## Deployment

### This project was deployed using Github Pages using github repositories
1. Go to github.com
2. Sign into your account
3. On the Left handside you sould see a list of your repositories, click the repository
you wish to deploy.
4. Click on the settings tab in your repository
5. Click "options" within settings on the left tab 
6. Scroll down until you see the heading Github Pages
7. Select branch "master" and click save
8. A page is then automatically deployed using your username as a domain name
(you also have the choice of uding a custom domain)
9. In my case my deployed with the domain https://github.com/Robertl231/mileston-2-v3
### How to run this project locally
You will need a Github account and a browser (chrome)
1. Install the gitpod chrome extension to your browser. 
[https://www.gitpod.io/docs/browser-extension/]
2. After installation, go to github.com and find this project repository.
[https://github.com/Robertl231/mileston-2-v3] 
3. Click on the green "Gitpod Button" in the top right above the repository.
4. Once this is done the site will create a new workspace for this project.


## Credits

### Content
All Content is my own unless stated otherwise here or in the form of comments in the html 
code

### Media
#### The photos used in this site were obtained from sources listed below:
1. dragon.png
[https://depositphotos.com/portfolio-1032932.html]
2. hero-dragon.png
[https://depositphotos.com/portfolio-1032932.html]
3. water-pipe.png
[https://depositphotos.com/portfolio-1032932.html]


### Acknowledgements

I would like to thank my Mentor Miguel for all his help and guidance, aswell as my friends and family