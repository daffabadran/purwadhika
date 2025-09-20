// Class Player
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.health = 100; // default
        this.power = 10; // default
    }
    // method untuk menerima damage dari lawan
    Player.prototype.damage = function (power) {
        this.health -= power;
    };
    // method untuk memakai item (dapat dari getRandomItem)
    Player.prototype.useItem = function (item) {
        this.health += item.health;
        this.power += item.power;
    };
    // menampilkan status player
    Player.prototype.showStatus = function () {
        console.log("".concat(this.name, " (Health => ").concat(this.health, ", Power => ").concat(this.power, ")"));
    };
    return Player;
}());
// Class ShootingGame
var ShootingGame = /** @class */ (function () {
    function ShootingGame(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    // method untuk memberi item random
    ShootingGame.prototype.getRandomItem = function () {
        // hasil item random: bisa health +10 atau power +10
        var health = Math.random() > 0.5 ? 10 : 0;
        var power = health === 0 ? 10 : 0; // biar salah satu aja
        return { health: health, power: power };
    };
    // method untuk memulai game
    ShootingGame.prototype.start = function () {
        var turn = 1;
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("\n=== Turn ".concat(turn, " ==="));
            // status sebelum shooting
            this.player1.showStatus();
            this.player2.showStatus();
            // masing-masing dapat item random
            this.player1.useItem(this.getRandomItem());
            this.player2.useItem(this.getRandomItem());
            console.log("\nSetelah dapat item:");
            this.player1.showStatus();
            this.player2.showStatus();
            // player1 menyerang player2
            this.player2.damage(this.player1.power);
            // kalau player2 masih hidup, dia balas serang
            if (this.player2.health > 0) {
                this.player1.damage(this.player2.power);
            }
            console.log("\nSetelah saling menyerang:");
            this.player1.showStatus();
            this.player2.showStatus();
            turn++;
        }
        console.log("\n=== GAME OVER ===");
        if (this.player1.health <= 0 && this.player2.health <= 0) {
            console.log("Hasil seri! Kedua pemain kalah.");
        }
        else if (this.player1.health <= 0) {
            console.log("".concat(this.player2.name, " MENANG!"));
        }
        else {
            console.log("".concat(this.player1.name, " MENANG!"));
        }
    };
    return ShootingGame;
}());
var pemainA = new Player("Player A");
var pemainB = new Player("Player B");
var game = new ShootingGame(pemainA, pemainB);
game.start();
