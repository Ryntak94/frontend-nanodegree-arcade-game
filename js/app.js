var characters = ["images/char-boy.png", "images/char-cat-girl.png", "images/char-horn-girl.png", "images/char-pink-girl.png", "images/char-princess-girl.png"]
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -101; //creates each Enemy off the left side of screen
    this.y = 83 * Math.floor(Math.random() * (3) + 1) - 20; //places each bug in a random row
    this.dx = (1 + Math.random() * 3); //random number generated within a range to affect speed of bug
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 101 * dt * this.dx; //moves enemy based on the time that has passed and dx speed manipulator
    if (this.x > 505) { //checks to see if bug exited the right side of screen
        this.x = -101; //if it has it moves it to left side of screen
        this.y = 83 * Math.floor(Math.random() * (3) + 1) - 20; //sets it to a random row
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() { //used for creating player object
    this.sprite; //gives the player the char-boy sprite
    this.x = 202; //puts player character in middle column
    this.y = 83 * 5 - 20; //puts player on bottom row
};

Player.prototype.update = function() {
    if (this.x < 0) { //ensures player can't cross left bound of screen
        this.x = 0;
    }
    if (this.x > 404) { //ensures player can't leave right bound of screen
        this.x = 404;
    }
    if (this.y > 83 * 5 - 20) { //ensures player can't cross lower bound of screen
        this.y = 83 * 5 - 20;
    }
};

Player.prototype.render = function() { //renders player on screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) { //checks for player key iput
    if (keyPress == "up") { //moves character up one square if the up arrow key is pressed
        this.y -= 83;
    } else if (keyPress == "down") { //moves character down one square if down arrow key is pressed
        this.y += 83;
    } else if (keyPress == "left") { //moves character left one square if the left arrow key is pressed
        this.x -= 101;
    } else if (keyPress == "right") { //moves character right one suqare if the right arrow key is pressed
        this.x += 101;
    }
};

// Now instantiate your objects.
var bug = new Enemy(); //creates the first bug object
var alphaBug = new Enemy(); //creates the second bug object
var betaBug = new Enemy(); //creates the third bug object
// Place all enemy objects in an array called allEnemies
var allEnemies = [bug, alphaBug, betaBug]; //array of bug objects
// Place the player object in a variable called player
var player = new Player(); //creates the player object

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
