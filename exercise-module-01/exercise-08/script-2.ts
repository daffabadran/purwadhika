class Player {
  name: string;
  health: number = 100;
  power: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  // Dikurangi health sesuai power musuh
  damage(power: number) {
    this.health -= power;
  }

  // Tambah health / power sesuai item
  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  // Tampilkan status pemain
  showStatus() {
    console.log(`${this.name} => Health: ${this.health}, Power: ${this.power}`);
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // Dapetin item random
  getRandomItem() {
    return {
      health: Math.random() > 0.5 ? 10 : 0,
      power: Math.random() > 0.5 ? 10 : 0,
    };
  }

  start() {
    console.log("=== GAME START ===");

    while (this.player1.health > 0 && this.player2.health > 0) {
      // Status sebelum serang
      this.player1.showStatus();
      this.player2.showStatus();

      // Dapet item
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());

      // Giliran tembak
      this.player2.damage(this.player1.power);
      if (this.player2.health > 0) {
        this.player1.damage(this.player2.power);
      }

      console.log("\n--- Setelah Menyerang ---");
    }

    console.log("\n=== GAME OVER ===");
    if (this.player1.health <= 0 && this.player2.health <= 0) {
      console.log("Hasil seri! Kedua pemain kalah.");
    } else if (this.player1.health <= 0) {
      console.log(`${this.player2.name} MENANG!`);
    } else {
      console.log(`${this.player1.name} MENANG!`);
    }
  }
}

const pemainA = new Player("Player A");
const pemainB = new Player("Player B");

const game = new ShootingGame(pemainA, pemainB);
game.start();

// penjelasan kode di atas:
// Kode di atas adalah implementasi sederhana dari sebuah permainan tembak-menembak (shooting game) antara dua pemain.
// Kelas Player merepresentasikan pemain dengan atribut nama, health, dan power. Pemain dapat menerima damage dari lawan
// dan menggunakan item untuk menambah health atau power. Kelas ShootingGame mengatur jalannya permainan, termasuk giliran
// menyerang dan mendapatkan item acak. Permainan berakhir ketika salah satu atau kedua pemain kehabisan health, dan pemenang
// diumumkan berdasarkan siapa yang masih memiliki health tersisa.

//cara kerja kodenya:
// 1. Kelas Player: Mewakili pemain dalam permainan dengan atribut nama, health, dan power. Pemain dapat menerima damage
//    dari lawan dan menggunakan item untuk menambah health atau power.
// 2. Kelas ShootingGame: Mengatur jalannya permainan, termasuk giliran menyerang dan mendapatkan item acak. Permainan berakhir ketika salah satu
//    atau kedua pemain kehabisan health.
// 3. Metode getRandomItem: Menghasilkan item acak yang dapat menambah health atau power pemain.
// 4. Metode start: Memulai permainan dan mengelola giliran menyerang antara dua pemain hingga salah satu atau kedua pemain kehabisan health.
// 5. Main Program: Membuat dua objek Player dan memulai permainan dengan objek ShootingGame.
