<<<<<<< HEAD
/*  
Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10

● Parameters : height → triangle height

● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z


Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]


Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/

//1. membuat pola segitiga
console.log("1. membuat pola segitiga");
console.log("");
function buatPolaSegitiga(tinggi) {
  console.log(`Membuat pola segitiga dengan tinggi: ${tinggi}`);

  let angka = 1;
  let hasil = "";

  for (let baris = 1; baris <= tinggi; baris++) {
    for (let kolom = 1; kolom <= baris; kolom++) {
      // Format angka dengan 2 digit menggunakan template literal
      hasil += `${angka < 10 ? "0" + angka : angka}`;

      // Tambahkan spasi jika bukan angka terakhir di baris
      if (kolom < baris) {
        hasil += " ";
      }

      angka++;
    }

    hasil += "\n";
  }

  return hasil;
}

console.log(buatPolaSegitiga(4));

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi buatPolaSegitiga(tinggi) menerima parameter tinggi yang menentukan jumlah baris segitiga.
// 2. Variabel angka diinisialisasi dengan nilai 1 untuk melacak angka yang akan dicetak.
// 3. Variabel hasil diinisialisasi sebagai string kosong untuk menyimpan pola segitiga yang akan dibentuk.
// 4. Loop pertama (for baris) berjalan dari 1 hingga tinggi, mengontrol jumlah baris segitiga.
// 5. Loop kedua (for kolom) berjalan dari 1 hingga baris saat ini, mengontrol jumlah angka yang dicetak di setiap baris.
// 6. Di dalam loop kedua, angka diformat menjadi 2 digit menggunakan template literal. Jika angka kurang dari 10, ditambahkan "0" di depannya.
// 7. Spasi ditambahkan setelah setiap angka kecuali angka terakhir di baris.
// 8. Setelah menyelesaikan satu baris, karakter newline ("\n") ditambahkan ke hasil untuk memulai baris baru.
// 9. Setelah kedua loop selesai, fungsi mengembalikan string hasil yang berisi pola segitiga lengkap.
// 10. Fungsi dipanggil dengan tinggi 4, dan hasilnya dicetak ke konsol.

//2. membuat fungsi fizzbuzz
console.log("");
console.log("2. membuat fungsi fizzbuzz");
console.log("");
function fizzBuzz(n) {
  console.log("=== PROGRAM FIZZBUZZ ===");
  console.log("Aturan:");
  console.log("- Kelipatan 3: Fizz");
  console.log("- Kelipatan 5: Buzz");
  console.log("- Kelipatan 3 dan 5: FizzBuzz");
  console.log("=========================");

  let hasil = "";

  for (let i = 1; i <= n; i++) {
    console.log("Memeriksa angka: " + i);

    let output = i; // Default: angka itu sendiri

    if (i % 3 === 0) {
      console.log("  " + i + " adalah kelipatan 3 → Fizz");
      output = "Fizz";
    }

    if (i % 5 === 0) {
      console.log("  " + i + " adalah kelipatan 5 → Buzz");
      // Jika sudah Fizz, jadi FizzBuzz. Jika belum, jadi Buzz
      output = output === "Fizz" ? "FizzBuzz" : "Buzz";
    }

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("  " + i + " adalah kelipatan 3 dan 5 → FizzBuzz");
    }

    hasil += output;

    if (i < n) {
      hasil += ", ";
    }

    console.log("Hasil sementara: " + hasil);
    console.log("----------------------");
  }

  return hasil;
}

console.log("n = 6: " + fizzBuzz(6));
console.log("n = 15: " + fizzBuzz(15));

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi fizzBuzz(n) menerima parameter n yang menentukan batas atas perulangan.
// 2. Variabel hasil diinisialisasi sebagai string kosong untuk menyimpan hasil akhir.
// 3. Loop for berjalan dari 1 hingga n, memeriksa setiap angka dalam rentang tersebut.
// 4. Di dalam loop, variabel output diinisialisasi dengan nilai i (angka itu sendiri) sebagai default.
// 5. Kondisi if pertama memeriksa apakah i adalah kelipatan 3. Jika ya, output diubah menjadi "Fizz" dan pesan log ditampilkan.
// 6. Kondisi if kedua memeriksa apakah i adalah kelipatan 5. Jika ya, output diubah menjadi "Buzz" atau "FizzBuzz" tergantung pada nilai sebelumnya, dan pesan log ditampilkan.
// 7. Kondisi if ketiga memeriksa apakah i adalah kelipatan 3 dan 5, menampilkan pesan log yang sesuai.
// 8. Setelah memeriksa kondisi, output ditambahkan ke hasil. Jika i bukan angka terakhir, koma dan spasi ditambahkan.
// 9. Pesan log menampilkan hasil sementara setelah setiap iterasi.
// 10. Setelah loop selesai, fungsi mengembalikan string hasil yang berisi urutan angka dan kata sesuai aturan FizzBuzz.
// 11. Fungsi dipanggil dengan n = 6 dan n = 15, dan hasilnya dicetak ke konsol.

//3. hitung BMI
console.log("");
console.log("3. hitung BMI");
console.log("");
function hitungBMI(berat, tinggi) {
  // Hitung BMI dengan rumus: berat (kg) / (tinggi (meter))²
  let bmi = berat / (tinggi * tinggi);

  // Tentukan kategori berdasarkan nilai BMI
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

let beratBadan = 65; // dalam kg
let tinggiBadan = 1.75; // dalam meter

let hasilBMI = hitungBMI(beratBadan, tinggiBadan);
console.log("BMI: " + (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1));
console.log("Kategori: " + hasilBMI);

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi hitungBMI(berat, tinggi) menerima dua parameter: berat dalam kilogram dan tinggi dalam meter.
// 2. Variabel bmi dihitung menggunakan rumus BMI: berat dibagi dengan kuadrat tinggi.
// 3. Kondisi if-else digunakan untuk menentukan kategori berdasarkan nilai BMI:
//    - Jika bmi kurang dari 18.5, mengembalikan "less weight".
//    - Jika bmi antara 18.5 dan 24.9, mengembalikan "ideal".
//    - Jika bmi antara 25.0 dan 29.9, mengembalikan "overweight".
//    - Jika bmi antara 30.0 dan 39.9, mengembalikan "very overweight".
//    - Jika bmi 40.0 atau lebih, mengembalikan "obesity".
// 4. Fungsi dipanggil dengan berat badan 65 kg dan tinggi badan 1.75 meter.
// 5. Hasil BMI dihitung ulang dan ditampilkan dengan satu angka desimal menggunakan toFixed(1).
// 6. Kategori BMI yang dihasilkan dari fungsi juga dicetak ke konsol.

//4. menghapus bilangan ganjil
console.log("");
console.log("4. menghapus bilangan ganjil");
console.log("");
function ambilBilanganGenap(angkaArray) {
  let arrayGenap = [];

  for (let i = 0; i < angkaArray.length; i++) {
    if (angkaArray[i] % 2 === 0) {
      arrayGenap.push(angkaArray[i]);
    }
  }

  return arrayGenap;
}

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let hasilGenap = ambilBilanganGenap(angka);

console.log("Array asli: " + angka);
console.log("Array genap: " + hasilGenap);
// //dengan template literal
// console.log(`Array asli: [${angka}]`);
// console.log(`Array genap: [${hasil}]`);

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi ambilBilanganGenap(angkaArray) menerima satu parameter: angkaArray, yaitu array yang berisi bilangan.
// 2. Variabel arrayGenap diinisialisasi sebagai array kosong untuk menyimpan bilangan genap.
// 3. Loop for berjalan melalui setiap elemen dalam angkaArray.
// 4. Di dalam loop, kondisi if memeriksa apakah elemen saat ini (angkaArray[i]) adalah bilangan genap dengan menggunakan operator modulus (%).
// 5. Jika elemen adalah bilangan genap (hasil modulus 2 adalah 0), elemen tersebut ditambahkan ke arrayGenap menggunakan metode push().
// 6. Setelah loop selesai, fungsi mengembalikan arrayGenap yang berisi hanya bilangan genap.
// 7. Fungsi dipanggil dengan array angka dari 1 hingga 10.
// 8. Hasil yang dikembalikan (array bilangan genap) disimpan dalam variabel hasil.
// 9. Array asli dan array bilangan genap dicetak ke konsol menggunakan template literal untuk format yang lebih baik.

//5. memisahkan string menjadi array
console.log("");
console.log("5. memisahkan string menjadi array");
console.log("");
function pisahKata(kalimat) {
  return kalimat.split(" ");
}

let teks = "Hello World";
let hasilPisah = pisahKata(teks);

console.log("String asli: '" + teks + "'");
console.log("Array hasil: ", hasilPisah);
//dengan template literal
// console.log(`String asli: '${teks}'`);
// console.log(`Array hasil: [${hasil}]`);

//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi pisahKata(kalimat) menerima satu parameter: kalimat, yaitu string yang akan dipisahkan.
// 2. Fungsi menggunakan metode split(" ") untuk memisahkan kalimat menjadi array kata-kata berdasarkan spasi.
// 3. Fungsi mengembalikan array yang dihasilkan.
// 4. Fungsi dipanggil dengan string "Hello World".
// 5. Hasil yang dikembalikan (array kata-kata) disimpan dalam variabel hasil.
// 6. String asli dan array hasil dicetak ke konsol.
=======
/*  
Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10

● Parameters : height → triangle height

● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z


Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]


Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/

//1. membuat pola segitiga
console.log("1. membuat pola segitiga");
console.log("");
function buatPolaSegitiga(tinggi) {
  console.log(`Membuat pola segitiga dengan tinggi: ${tinggi}`);

  let angka = 1;
  let hasil = "";

  for (let baris = 1; baris <= tinggi; baris++) {
    for (let kolom = 1; kolom <= baris; kolom++) {
      // Format angka dengan 2 digit menggunakan template literal
      hasil += `${angka < 10 ? "0" + angka : angka}`;

      // Tambahkan spasi jika bukan angka terakhir di baris
      if (kolom < baris) {
        hasil += " ";
      }

      angka++;
    }

    hasil += "\n";
  }

  return hasil;
}

console.log(buatPolaSegitiga(4));

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi buatPolaSegitiga(tinggi) menerima parameter tinggi yang menentukan jumlah baris segitiga.
// 2. Variabel angka diinisialisasi dengan nilai 1 untuk melacak angka yang akan dicetak.
// 3. Variabel hasil diinisialisasi sebagai string kosong untuk menyimpan pola segitiga yang akan dibentuk.
// 4. Loop pertama (for baris) berjalan dari 1 hingga tinggi, mengontrol jumlah baris segitiga.
// 5. Loop kedua (for kolom) berjalan dari 1 hingga baris saat ini, mengontrol jumlah angka yang dicetak di setiap baris.
// 6. Di dalam loop kedua, angka diformat menjadi 2 digit menggunakan template literal. Jika angka kurang dari 10, ditambahkan "0" di depannya.
// 7. Spasi ditambahkan setelah setiap angka kecuali angka terakhir di baris.
// 8. Setelah menyelesaikan satu baris, karakter newline ("\n") ditambahkan ke hasil untuk memulai baris baru.
// 9. Setelah kedua loop selesai, fungsi mengembalikan string hasil yang berisi pola segitiga lengkap.
// 10. Fungsi dipanggil dengan tinggi 4, dan hasilnya dicetak ke konsol.

//2. membuat fungsi fizzbuzz
console.log("");
console.log("2. membuat fungsi fizzbuzz");
console.log("");
function fizzBuzz(n) {
  console.log("=== PROGRAM FIZZBUZZ ===");
  console.log("Aturan:");
  console.log("- Kelipatan 3: Fizz");
  console.log("- Kelipatan 5: Buzz");
  console.log("- Kelipatan 3 dan 5: FizzBuzz");
  console.log("=========================");

  let hasil = "";

  for (let i = 1; i <= n; i++) {
    console.log("Memeriksa angka: " + i);

    let output = i; // Default: angka itu sendiri

    if (i % 3 === 0) {
      console.log("  " + i + " adalah kelipatan 3 → Fizz");
      output = "Fizz";
    }

    if (i % 5 === 0) {
      console.log("  " + i + " adalah kelipatan 5 → Buzz");
      // Jika sudah Fizz, jadi FizzBuzz. Jika belum, jadi Buzz
      output = output === "Fizz" ? "FizzBuzz" : "Buzz";
    }

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("  " + i + " adalah kelipatan 3 dan 5 → FizzBuzz");
    }

    hasil += output;

    if (i < n) {
      hasil += ", ";
    }

    console.log("Hasil sementara: " + hasil);
    console.log("----------------------");
  }

  return hasil;
}

console.log("n = 6: " + fizzBuzz(6));
console.log("n = 15: " + fizzBuzz(15));

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi fizzBuzz(n) menerima parameter n yang menentukan batas atas perulangan.
// 2. Variabel hasil diinisialisasi sebagai string kosong untuk menyimpan hasil akhir.
// 3. Loop for berjalan dari 1 hingga n, memeriksa setiap angka dalam rentang tersebut.
// 4. Di dalam loop, variabel output diinisialisasi dengan nilai i (angka itu sendiri) sebagai default.
// 5. Kondisi if pertama memeriksa apakah i adalah kelipatan 3. Jika ya, output diubah menjadi "Fizz" dan pesan log ditampilkan.
// 6. Kondisi if kedua memeriksa apakah i adalah kelipatan 5. Jika ya, output diubah menjadi "Buzz" atau "FizzBuzz" tergantung pada nilai sebelumnya, dan pesan log ditampilkan.
// 7. Kondisi if ketiga memeriksa apakah i adalah kelipatan 3 dan 5, menampilkan pesan log yang sesuai.
// 8. Setelah memeriksa kondisi, output ditambahkan ke hasil. Jika i bukan angka terakhir, koma dan spasi ditambahkan.
// 9. Pesan log menampilkan hasil sementara setelah setiap iterasi.
// 10. Setelah loop selesai, fungsi mengembalikan string hasil yang berisi urutan angka dan kata sesuai aturan FizzBuzz.
// 11. Fungsi dipanggil dengan n = 6 dan n = 15, dan hasilnya dicetak ke konsol.

//3. hitung BMI
console.log("");
console.log("3. hitung BMI");
console.log("");
function hitungBMI(berat, tinggi) {
  // Hitung BMI dengan rumus: berat (kg) / (tinggi (meter))²
  let bmi = berat / (tinggi * tinggi);

  // Tentukan kategori berdasarkan nilai BMI
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

let beratBadan = 65; // dalam kg
let tinggiBadan = 1.75; // dalam meter

let hasilBMI = hitungBMI(beratBadan, tinggiBadan);
console.log("BMI: " + (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1));
console.log("Kategori: " + hasilBMI);

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi hitungBMI(berat, tinggi) menerima dua parameter: berat dalam kilogram dan tinggi dalam meter.
// 2. Variabel bmi dihitung menggunakan rumus BMI: berat dibagi dengan kuadrat tinggi.
// 3. Kondisi if-else digunakan untuk menentukan kategori berdasarkan nilai BMI:
//    - Jika bmi kurang dari 18.5, mengembalikan "less weight".
//    - Jika bmi antara 18.5 dan 24.9, mengembalikan "ideal".
//    - Jika bmi antara 25.0 dan 29.9, mengembalikan "overweight".
//    - Jika bmi antara 30.0 dan 39.9, mengembalikan "very overweight".
//    - Jika bmi 40.0 atau lebih, mengembalikan "obesity".
// 4. Fungsi dipanggil dengan berat badan 65 kg dan tinggi badan 1.75 meter.
// 5. Hasil BMI dihitung ulang dan ditampilkan dengan satu angka desimal menggunakan toFixed(1).
// 6. Kategori BMI yang dihasilkan dari fungsi juga dicetak ke konsol.

//4. menghapus bilangan ganjil
console.log("");
console.log("4. menghapus bilangan ganjil");
console.log("");
function ambilBilanganGenap(angkaArray) {
  let arrayGenap = [];

  for (let i = 0; i < angkaArray.length; i++) {
    if (angkaArray[i] % 2 === 0) {
      arrayGenap.push(angkaArray[i]);
    }
  }

  return arrayGenap;
}

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let hasilGenap = ambilBilanganGenap(angka);

console.log("Array asli: " + angka);
console.log("Array genap: " + hasilGenap);
// //dengan template literal
// console.log(`Array asli: [${angka}]`);
// console.log(`Array genap: [${hasil}]`);

// penjelasan detail kodenya sebagai berikut:
// 1. Fungsi ambilBilanganGenap(angkaArray) menerima satu parameter: angkaArray, yaitu array yang berisi bilangan.
// 2. Variabel arrayGenap diinisialisasi sebagai array kosong untuk menyimpan bilangan genap.
// 3. Loop for berjalan melalui setiap elemen dalam angkaArray.
// 4. Di dalam loop, kondisi if memeriksa apakah elemen saat ini (angkaArray[i]) adalah bilangan genap dengan menggunakan operator modulus (%).
// 5. Jika elemen adalah bilangan genap (hasil modulus 2 adalah 0), elemen tersebut ditambahkan ke arrayGenap menggunakan metode push().
// 6. Setelah loop selesai, fungsi mengembalikan arrayGenap yang berisi hanya bilangan genap.
// 7. Fungsi dipanggil dengan array angka dari 1 hingga 10.
// 8. Hasil yang dikembalikan (array bilangan genap) disimpan dalam variabel hasil.
// 9. Array asli dan array bilangan genap dicetak ke konsol menggunakan template literal untuk format yang lebih baik.

//5. memisahkan string menjadi array
console.log("");
console.log("5. memisahkan string menjadi array");
console.log("");
function pisahKata(kalimat) {
  return kalimat.split(" ");
}

let teks = "Hello World";
let hasilPisah = pisahKata(teks);

console.log("String asli: '" + teks + "'");
console.log("Array hasil: ", hasilPisah);
//dengan template literal
// console.log(`String asli: '${teks}'`);
// console.log(`Array hasil: [${hasil}]`);

//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi pisahKata(kalimat) menerima satu parameter: kalimat, yaitu string yang akan dipisahkan.
// 2. Fungsi menggunakan metode split(" ") untuk memisahkan kalimat menjadi array kata-kata berdasarkan spasi.
// 3. Fungsi mengembalikan array yang dihasilkan.
// 4. Fungsi dipanggil dengan string "Hello World".
// 5. Hasil yang dikembalikan (array kata-kata) disimpan dalam variabel hasil.
// 6. String asli dan array hasil dicetak ke konsol.
>>>>>>> 9e68cf40c5b6a171d2ea8c61269021f372a59468
