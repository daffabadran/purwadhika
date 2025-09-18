/*
Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average



● Create a program to create transaction
● Product Class
○ Properties
■ Name
■ Price
● Transaction Class
○ Properties
■ Total
■ Product
● All product data
● Qty

○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data
*/

//1. membuat fungsi untuk menghitung data array siswa
console.log("1. membuat fungsi untuk menghitung data array siswa");
console.log("");
function hitungDataSiswa(students) {
  // Validasi input
  if (!Array.isArray(students) || students.length === 0) {
    return {
      Score: { Highest: 0, Lowest: 0, Average: 0 },
      Age: { Highest: 0, Lowest: 0, Average: 0 },
    };
  }

  // Hitung umur dari tanggal lahir
  function hitungUmur(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  // Extract scores dan ages
  const scores = students.map((student) => student.Score);
  const ages = students.map((student) => hitungUmur(student.Age));

  // Hitung statistics untuk Score
  const scoreHighest = Math.max(...scores);
  const scoreLowest = Math.min(...scores);
  const scoreAverage =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  // Hitung statistics untuk Age
  const ageHighest = Math.max(...ages);
  const ageLowest = Math.min(...ages);
  const ageAverage = ages.reduce((sum, age) => sum + age, 0) / ages.length;

  return {
    Score: {
      Highest: scoreHighest,
      Lowest: scoreLowest,
      Average: parseFloat(scoreAverage.toFixed(2)),
    },
    Age: {
      Highest: ageHighest,
      Lowest: ageLowest,
      Average: parseFloat(ageAverage.toFixed(2)),
    },
  };
}

const students = [
  {
    Name: "John Doe",
    Email: "john@example.com",
    Age: "2000-05-15", // Format tanggal: YYYY-MM-DD
    Score: 85,
  },
  {
    Name: "Jane Smith",
    Email: "jane@example.com",
    Age: "1999-12-20",
    Score: 92,
  },
  {
    Name: "Bob Johnson",
    Email: "bob@example.com",
    Age: "2001-03-10",
    Score: 78,
  },
  {
    Name: "Alice Brown",
    Email: "alice@example.com",
    Age: "2002-07-25",
    Score: 88,
  },
];

const hasil = hitungDataSiswa(students);
console.log(hasil);
console.log("");
//penjelasan kode secara detail sebagai berikut:
// 1. Fungsi hitungDataSiswa(students) menerima parameter berupa array objek siswa.
// 2. Validasi input dilakukan untuk memastikan parameter adalah array dan tidak kosong.
// 3. Fungsi hitungUmur(tanggalLahir) digunakan untuk menghitung umur berdasarkan tanggal lahir.
// 4. Array scores dan ages diekstrak dari objek siswa menggunakan map().
// 5. Statistik tertinggi, terendah, dan rata-rata dihitung untuk skor dan umur.
// 6. Hasil dikembalikan dalam format objek yang diinginkan dengan nilai rata-rata dibulatkan ke dua desimal.

// Typescript
// interface Student {
//     Name: string;
//     Email: string;
//     Age: string; // Date string
//     Score: number;
// }

// interface Statistics {
//     Highest: number;
//     Lowest: number;
//     Average: number;
// }

// interface StudentData {
//     Score: Statistics;
//     Age: Statistics;
// }

// function hitungDataSiswa(students: Student[]): StudentData {
// }

console.log("2. membuat program untuk membuat transaksi");
console.log("");
// Class Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Class Transaction
class Transaction {
  constructor() {
    this.total = 0;
    this.products = []; // Menyimpan object {product, qty}
    this.transactionData = null;
  }

  // Method untuk menambah produk ke keranjang
  addToCart(product, qty) {
    if (!(product instanceof Product)) {
      console.log("Error: Produk tidak valid");
      return;
    }

    if (qty <= 0) {
      console.log("Error: Quantity harus lebih dari 0");
      return;
    }

    // Cek apakah produk sudah ada di keranjang
    const existingProductIndex = this.products.findIndex(
      (item) => item.product.name === product.name
    );

    if (existingProductIndex !== -1) {
      // Jika produk sudah ada, update quantity
      this.products[existingProductIndex].qty += qty;
    } else {
      // Jika produk belum ada, tambahkan baru
      this.products.push({
        product: product,
        qty: qty,
      });
    }

    // Update total
    this.total += product.price * qty;
    console.log(`Ditambahkan: ${qty} ${product.name} ke keranjang`);
  }

  // Method untuk menampilkan total transaksi saat ini
  showTotal() {
    console.log("=== TOTAL TRANSAKSI SAAT INI ===");
    console.log(`Total: Rp ${this.total.toLocaleString("id-ID")}`);

    console.log("\nDetail Produk:");
    this.products.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.product.name} - ${
          item.qty
        } x Rp ${item.product.price.toLocaleString("id-ID")} = Rp ${(
          item.product.price * item.qty
        ).toLocaleString("id-ID")}`
      );
    });

    return this.total;
  }

  // Method untuk menyelesaikan transaksi
  checkout() {
    if (this.products.length === 0) {
      console.log("Keranjang kosong, tidak bisa checkout");
      return null;
    }

    this.transactionData = {
      total: this.total,
      products: [...this.products], // Copy array
      timestamp: new Date().toISOString(),
      transactionId: "TXN-" + Date.now(),
    };

    console.log("=== CHECKOUT BERHASIL ===");
    console.log(`Transaction ID: ${this.transactionData.transactionId}`);
    console.log(`Total Pembayaran: Rp ${this.total.toLocaleString("id-ID")}`);
    console.log(
      `Waktu: ${new Date(this.transactionData.timestamp).toLocaleString(
        "id-ID"
      )}`
    );

    // Reset transaksi setelah checkout
    const completedTransaction = this.transactionData;
    this.total = 0;
    this.products = [];
    this.transactionData = null;

    return completedTransaction;
  }
}

// 1. Buat beberapa produk
const laptop = new Product("Laptop", 10000000);
const mouse = new Product("Mouse Gaming", 500000);
keyboard = new Product("Keyboard Mechanical", 800000);

// 2. Buat transaksi baru
const transaction = new Transaction();

// 3. Tambahkan produk ke keranjang
transaction.addToCart(laptop, 1);
transaction.addToCart(mouse, 2);
transaction.addToCart(keyboard, 1);
transaction.addToCart(mouse, 1); // Menambah mouse lagi

// 4. Tampilkan total sementara
transaction.showTotal();

// 5. Checkout
const completedTransaction = transaction.checkout();

// 6. Coba showTotal setelah checkout (harusnya 0)
console.log("\nSetelah checkout:");
transaction.showTotal();
