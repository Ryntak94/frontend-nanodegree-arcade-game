// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0 - 101;
    this.y = 83 * Math.floor(Math.random() * (3) + 1) - 20;
    this.dx = (1 + Math.random() * 3)
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
    this.x += 101 * dt * this.dx;
    if(this.x > 505)  {
      this.x = -101;
      this.y = 83 * Math.floor(Math.random() * (3) + 1) - 20;
    }
    if(((player.x - this.x) < 79) && ((player.x - this.x) > 79 - 155) && this.y == player.y)  {
      

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 83*5 - 20;
}

Player.prototype.update = function()  {
  if(this.x < 0)  {
    this.x = 0;
  }
  if(this.x > 404)  {
    this.x = 404;
  }
  if(this.y < 0) {
    console.log("You win");
    this.y = -20;
  }
  if(this.y > 83 * 5 - 20)  {
    this.y = 83 * 5 - 20;
  }
}

Player.prototype.render = function()  {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.handleInput = function(keyPress) {
  if(keyPress == "up") {
    this.y -= 83;
  }
  else if(keyPress == "down") {
    this.y += 83;
  }
  else if(keyPress == "left") {
    this.x -= 101;
  }
  else if(keyPress == "right")  {
    this.x += 101;
  }
}

// Now instantiate your objects.
var bug = new Enemy();
var alphaBug = new Enemy();
var betaBug = new Enemy();
// Place all enemy objects in an array called allEnemies
var allEnemies = [bug, alphaBug, betaBug];
// Place the player object in a variable called player
var player = new Player();

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
