<<<<<<< HEAD
/*
Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
● Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
● Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
● Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
● Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/

//1.  Mengecek Bilangan Ganjil atau Genap
console.log("1. Mengecek Bilangan Ganjil atau Genap");
function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return `${angka} adalah bilangan genap`;
  } else {
    return `${angka} adalah bilangan ganjil`;
  }
}

console.log(cekGanjilGenap(25));
console.log(cekGanjilGenap(2));

//2. Mengecek Bilangan Prima
console.log("\n2. Mengecek Bilangan Prima");
function cekBilanganPrima(angka) {
  console.log("Memeriksa apakah " + angka + " adalah bilangan prima...");

  // Langkah 1: Bilangan kurang dari 2 bukan prima
  if (angka < 2) {
    console.log(angka + " kurang dari 2, bukan bilangan prima");
    return angka + " bukan bilangan prima";
  }

  // Langkah 2: Cek pembagi dari 2 sampai angka-1
  for (let pembagi = 2; pembagi < angka; pembagi++) {
    console.log("Memeriksa apakah " + angka + " habis dibagi " + pembagi);

    if (angka % pembagi === 0) {
      console.log(
        angka + " habis dibagi " + pembagi + ", bukan bilangan prima"
      );
      return angka + " bukan bilangan prima";
    }
  }

  // Langkah 3: Jika tidak ada pembagi selain 1 dan dirinya sendiri
  console.log(
    angka + " hanya habis dibagi 1 dan dirinya sendiri, adalah bilangan prima"
  );
  return angka + " adalah bilangan prima";
}

console.log("--- Memeriksa 7 ---");
console.log(cekBilanganPrima(7));

console.log("--- Memeriksa 6 ---");
console.log(cekBilanganPrima(6));

// 3. Menjumlahkan Bilangan dari 1 sampai N
console.log("\n3. Menjumlahkan Bilangan dari 1 sampai N");
function jumlahkanBilangan(n) {
  console.log(`Menjumlahkan bilangan dari 1 sampai ${n}`);

  let total = 0;
  let proses = "";

  for (let i = 1; i <= n; i++) {
    total += i; // Sama dengan: total = total + i
    proses += i; // Sama dengan: proses = proses + i

    if (i < n) {
      proses += " + ";
    }

    console.log(`Langkah ${i}: Total sementara = ${total}`);
  }

  return `${proses} = ${total}`;
}

console.log(jumlahkanBilangan(5));
console.log(jumlahkanBilangan(3));

//4. meghitung Faktorial
console.log("\n4. Menghitung Faktorial");
function hitungFaktorial(angka) {
  console.log(`Menghitung ${angka}!`);

  if (angka === 0 || angka === 1) {
    return "1 = 1";
  }

  let hasil = 1;
  let proses = "";

  for (let i = angka; i >= 1; i--) {
    hasil *= i;
    proses += i;

    if (i > 1) {
      proses += " × ";
    }

    console.log(`Langkah ${angka - i + 1}: Hasil sementara = ${hasil}`);
  }

  return `${proses} = ${hasil}`;
}

console.log(hitungFaktorial(4));
console.log(hitungFaktorial(6));

// jika tanpa template literal:
// function hitungFaktorial(angka) {
//   console.log("Menghitung " + angka + "!");

//   if (angka === 0 || angka === 1) {
//     console.log("Angka 0 atau 1, faktorialnya selalu 1");
//     return "1 = 1";
//   }

//   let hasil = 1;
//   let proses = "";

//   for (let i = angka; i >= 1; i--) {
//     hasil = hasil * i;
//     proses = proses + i;

//     if (i > 1) {
//       proses = proses + " × ";
//     }

//     console.log("Langkah " + (angka - i + 1) + ": Hasil sementara = " + hasil);
//   }

//   return proses + " = " + hasil;
// }

// console.log(hitungFaktorial(4));
// console.log(hitungFaktorial(6));

//5. deret Fibonacci
console.log("\n5. Deret Fibonacci");
function deretFibonacci(n) {
  console.log("Membuat deret Fibonacci dengan " + n + " angka");

  if (n <= 0) return "Masukkan angka positif";
  if (n === 1) return "0";

  // Inisialisasi dua angka pertama Fibonacci
  let fibonacci = [0, 1];
  console.log("Angka 1: " + fibonacci[0]);
  console.log("Angka 2: " + fibonacci[1]);

  // Generate angka Fibonacci berikutnya
  for (let i = 2; i < n; i++) {
    // Angka Fibonacci = jumlah dua angka sebelumnya
    let angkaBerikutnya = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(angkaBerikutnya);
    console.log("Angka " + (i + 1) + ": " + angkaBerikutnya);
  }

  return "Deret Fibonacci: " + fibonacci.join(", ");
}

console.log(deretFibonacci(10));
// konsepnya Setiap angka adalah jumlah dua angka sebelumnya
=======
/*
Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
● Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
● Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
● Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
● Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/

//1.  Mengecek Bilangan Ganjil atau Genap
console.log("1. Mengecek Bilangan Ganjil atau Genap");
function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    return `${angka} adalah bilangan genap`;
  } else {
    return `${angka} adalah bilangan ganjil`;
  }
}

console.log(cekGanjilGenap(25));
console.log(cekGanjilGenap(2));

//2. Mengecek Bilangan Prima
console.log("\n2. Mengecek Bilangan Prima");
function cekBilanganPrima(angka) {
  console.log("Memeriksa apakah " + angka + " adalah bilangan prima...");

  // Langkah 1: Bilangan kurang dari 2 bukan prima
  if (angka < 2) {
    console.log(angka + " kurang dari 2, bukan bilangan prima");
    return angka + " bukan bilangan prima";
  }

  // Langkah 2: Cek pembagi dari 2 sampai angka-1
  for (let pembagi = 2; pembagi < angka; pembagi++) {
    console.log("Memeriksa apakah " + angka + " habis dibagi " + pembagi);

    if (angka % pembagi === 0) {
      console.log(
        angka + " habis dibagi " + pembagi + ", bukan bilangan prima"
      );
      return angka + " bukan bilangan prima";
    }
  }

  // Langkah 3: Jika tidak ada pembagi selain 1 dan dirinya sendiri
  console.log(
    angka + " hanya habis dibagi 1 dan dirinya sendiri, adalah bilangan prima"
  );
  return angka + " adalah bilangan prima";
}

console.log("--- Memeriksa 7 ---");
console.log(cekBilanganPrima(7));

console.log("--- Memeriksa 6 ---");
console.log(cekBilanganPrima(6));

// 3. Menjumlahkan Bilangan dari 1 sampai N
console.log("\n3. Menjumlahkan Bilangan dari 1 sampai N");
function jumlahkanBilangan(n) {
  console.log(`Menjumlahkan bilangan dari 1 sampai ${n}`);

  let total = 0;
  let proses = "";

  for (let i = 1; i <= n; i++) {
    total += i; // Sama dengan: total = total + i
    proses += i; // Sama dengan: proses = proses + i

    if (i < n) {
      proses += " + ";
    }

    console.log(`Langkah ${i}: Total sementara = ${total}`);
  }

  return `${proses} = ${total}`;
}

console.log(jumlahkanBilangan(5));
console.log(jumlahkanBilangan(3));

//4. meghitung Faktorial
console.log("\n4. Menghitung Faktorial");
function hitungFaktorial(angka) {
  console.log(`Menghitung ${angka}!`);

  if (angka === 0 || angka === 1) {
    return "1 = 1";
  }

  let hasil = 1;
  let proses = "";

  for (let i = angka; i >= 1; i--) {
    hasil *= i;
    proses += i;

    if (i > 1) {
      proses += " × ";
    }

    console.log(`Langkah ${angka - i + 1}: Hasil sementara = ${hasil}`);
  }

  return `${proses} = ${hasil}`;
}

console.log(hitungFaktorial(4));
console.log(hitungFaktorial(6));

// jika tanpa template literal:
// function hitungFaktorial(angka) {
//   console.log("Menghitung " + angka + "!");

//   if (angka === 0 || angka === 1) {
//     console.log("Angka 0 atau 1, faktorialnya selalu 1");
//     return "1 = 1";
//   }

//   let hasil = 1;
//   let proses = "";

//   for (let i = angka; i >= 1; i--) {
//     hasil = hasil * i;
//     proses = proses + i;

//     if (i > 1) {
//       proses = proses + " × ";
//     }

//     console.log("Langkah " + (angka - i + 1) + ": Hasil sementara = " + hasil);
//   }

//   return proses + " = " + hasil;
// }

// console.log(hitungFaktorial(4));
// console.log(hitungFaktorial(6));

//5. deret Fibonacci
console.log("\n5. Deret Fibonacci");
function deretFibonacci(n) {
  console.log("Membuat deret Fibonacci dengan " + n + " angka");

  if (n <= 0) return "Masukkan angka positif";
  if (n === 1) return "0";

  // Inisialisasi dua angka pertama Fibonacci
  let fibonacci = [0, 1];
  console.log("Angka 1: " + fibonacci[0]);
  console.log("Angka 2: " + fibonacci[1]);

  // Generate angka Fibonacci berikutnya
  for (let i = 2; i < n; i++) {
    // Angka Fibonacci = jumlah dua angka sebelumnya
    let angkaBerikutnya = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(angkaBerikutnya);
    console.log("Angka " + (i + 1) + ": " + angkaBerikutnya);
  }

  return "Deret Fibonacci: " + fibonacci.join(", ");
}

console.log(deretFibonacci(10));
// konsepnya Setiap angka adalah jumlah dua angka sebelumnya
>>>>>>> 9e68cf40c5b6a171d2ea8c61269021f372a59468
