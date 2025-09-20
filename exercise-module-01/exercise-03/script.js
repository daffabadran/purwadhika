<<<<<<< HEAD
/*  
Write a code to display the multiplication table of a given integer.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ ...
■ 9 x 10

● Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome
● Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
● Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
● Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
● Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”


● Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
● Write a code to find the largest of two given integers
○ Example : num1 = 42, num2 = 27 → 42
● Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
● Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

//1. tabel perkalian
console.log("1. Tabel Perkalian");
console.log("");
function buatTabelPerkalian(angka) {
  console.log("Tabel perkalian " + angka + ":");

  for (let i = 1; i <= 10; i++) {
    let hasil = angka * i;
    console.log(angka + " x " + i + " = " + hasil);
  }
}

buatTabelPerkalian(9);

//atau memakai template literal:
// function buatTabelPerkalian(angka) {
//   console.log(`Tabel perkalian ${angka}:`);

//   for (let i = 1; i <= 10; i++) {
//     let hasil = angka * i;
//     console.log(`${angka} × ${i} = ${hasil}`);
//   }
// }

// buatTabelPerkalian(9);

//2. cek palindrome
console.log("\n2. Cek Palindrome");
console.log("");
function cekPalindrome(kata) {
  let kataTerbalik = kata.split("").reverse().join("");

  if (kata === kataTerbalik) {
    return `${kata} adalah palindrome`;
  } else {
    return `${kata} bukan palindrome`;
  }
}

console.log(cekPalindrome("madam"));
console.log(cekPalindrome("hello"));

//3. konversi cm ke km
console.log("\n3. Konversi cm ke km");
console.log("");
function cmKeKm(centimeter) {
  let kilometer = centimeter / 100000;
  return `${centimeter} cm = ${kilometer} km`;
}

console.log(cmKeKm(100000));
console.log(cmKeKm(50000));
// penjelasannya: 1 km = 1000 m, 1 m = 100 cm, jadi 1 km = 1000 * 100 cm = 100000 cm

//4. format mata uang (IDR)
console.log("\n4. Format Mata Uang (IDR)");
console.log("");
function formatMataUang(angka) {
  // Format angka dengan titik sebagai pemisah ribuan dan koma untuk desimal
  let format = "Rp " + angka.toLocaleString("id-ID") + ",00";
  return format;
}

console.log(formatMataUang(1000));
console.log(formatMataUang(1000000));

//penjelasannya: toLocaleString('id-ID') digunakan untuk memformat angka sesuai dengan konvensi Indonesia, yang menggunakan titik sebagai pemisah ribuan dan koma untuk desimal.

//5. hapus string pertama yang ditemukan
console.log("\n5. Hapus String Pertama yang Ditemukan");
console.log("");
function hapusStringPertama(teks, cari) {
  let posisi = teks.indexOf(cari);

  if (posisi === -1) {
    return teks;
  }

  //   ini bisa juga pakai replace:
  //   let hasil = teks.replace(cari, '');

  //   return `Awal: '${teks}' -> Hasil: '${hasil}'`;
  // }

  let hasil = teks.slice(0, posisi) + teks.slice(posisi + cari.length);
  return `Awal: '${teks}' -> Hasil: '${hasil}'`;
}

console.log(hapusStringPertama("Hello world", "ell"));

//penjelasan detailnya:
// indexOf(cari) digunakan untuk menemukan posisi pertama dari string yang dicari dalam teks. Jika string tidak ditemukan, fungsi akan mengembalikan teks asli.
// slice(0, posisi) mengambil bagian dari teks sebelum string yang dicari.
// slice(posisi + cari.length) mengambil bagian dari teks setelah string yang dicari.
// Hasilnya adalah penggabungan dari kedua bagian tersebut, sehingga string yang dicari dihapus dari teks asli.

//6. kapaitalisasi huruf pertama setiap kata
console.log("\n6. Kapitalisasi Huruf Pertama Setiap Kata");
console.log("");
function kapitalisasiKata(teks) {
  let kataArray = teks.split(" ");
  let hasilArray = [];

  for (let kata of kataArray) {
    let kataKapital = kata.charAt(0).toUpperCase() + kata.slice(1);
    hasilArray.push(kataKapital);
  }

  //penjelasan for disni:
  // for (let kata of kataArray) {
  //   ...
  // }
  // Digunakan untuk mengiterasi setiap elemen dalam array kataArray. Pada setiap iterasi, variabel kata akan berisi satu elemen dari array tersebut.
  // Ini memungkinkan kita untuk memproses setiap kata secara individual, seperti mengkapitalisasi huruf pertamanya.

  let hasil = hasilArray.join(" ");
  return `Awal: '${teks}' -> Hasil: '${hasil}'`;
  //   penjelasan join:
  // join(" ") digunakan untuk menggabungkan elemen-elemen dalam array hasilArray menjadi satu string, dengan spasi sebagai pemisah antar kata.
}

console.log(kapitalisasiKata("hello world"));

//cara kerja kodenya:
// split(" ") digunakan untuk memecah string teks menjadi array kata-kata berdasarkan spasi.
// charAt(0).toUpperCase() mengambil huruf pertama dari setiap kata dan mengubahnya menjadi huruf kapital.
// slice(1) mengambil sisa huruf dari kata tersebut, dimulai dari indeks 1 hingga akhir.
// Hasilnya adalah penggabungan dari huruf kapital pertama dan sisa huruf, yang kemudian ditambahkan ke array hasilArray.
// Akhirnya, join(" ") menggabungkan semua kata dalam hasilArray menjadi satu string dengan spasi di antara mereka.

//7. tukar besar kecil huruf
console.log("\n7. Tukar Besar Kecil Huruf");
console.log("");
function tukarCase(teks) {
  let hasil = "";

  for (let huruf of teks) {
    if (huruf === huruf.toUpperCase()) {
      hasil += huruf.toLowerCase();
    } else {
      hasil += huruf.toUpperCase();
    }
  }

  return `Awal: '${teks}' -> Hasil: '${hasil}'`;
}

console.log(tukarCase("The QuiCk BrOwN Fox"));
//penjelasan detailnya:
// for (let huruf of teks) {
//   ...
// }
// Digunakan untuk mengiterasi setiap karakter dalam string teks. Pada setiap iterasi, variabel huruf akan berisi satu karakter dari string tersebut.
// Ini memungkinkan kita untuk memproses setiap karakter secara individual, seperti menukar besar kecil huruf.
// huruf.toUpperCase() digunakan untuk memeriksa apakah karakter saat ini adalah huruf besar.
// huruf.toLowerCase() digunakan untuk mengubah huruf besar menjadi huruf kecil.
// huruf.toUpperCase() digunakan untuk mengubah huruf kecil menjadi huruf besar.
// Hasilnya adalah string baru yang dibentuk dengan menukar besar kecil setiap karakter dari string asli.

//8. cari bilangan terbesar dari dua angka
console.log("\n8. Cari Bilangan Terbesar dari Dua Angka");
console.log("");
function cariTerbesar(angka1, angka2) {
  if (angka1 > angka2) {
    return `Angka terbesar: ${angka1}`;
  } else if (angka2 > angka1) {
    return `Angka terbesar: ${angka2}`;
  } else {
    return `Kedua angka sama besar: ${angka1}`;
  }
}

console.log(cariTerbesar(42, 27));
console.log(cariTerbesar(15, 30));

// cara bacanya tempalte literal:
// `Angka terbesar: ${angka1}`
// Tanda backtick (`) digunakan untuk membuat template literal, yang memungkinkan penyisipan ekspresi di dalam string.
// ${angka1} adalah ekspresi yang akan dievaluasi dan hasilnya akan disisipkan ke dalam string pada posisi tersebut.
// Jadi, jika angka1 adalah 42, maka hasil akhirnya akan menjadi "Angka terbesar: 42".

//maksudnya pada console.log(cariTerbesar(42, 27)); adalah memanggil fungsi cariTerbesar dengan argumen 42 dan 27, lalu mencetak hasilnya ke konsol.

//9. urutkan tiga angka
console.log("\n9. Urutkan Tiga Angka");
console.log("");
function urutkanTigaAngka(angka1, angka2, angka3) {
  // Buat array dan urutkan
  let angkaArray = [angka1, angka2, angka3];
  angkaArray.sort(function (a, b) {
    return a - b;
  });

  return `Urutan: ${angkaArray[0]}, ${angkaArray[1]}, ${angkaArray[2]}`;
}

console.log(urutkanTigaAngka(42, 27, 18));

// penjelasan detailnya:
// let angkaArray = [angka1, angka2, angka3];
// Membuat array baru yang berisi ketiga angka yang diberikan sebagai argumen fungsi.
// array ini akan digunakan untuk menyimpan dan mengurutkan angka-angka tersebut.
// angkaArray.sort(function (a, b) {
//   return a - b;
// });
// Menggunakan metode sort() untuk mengurutkan elemen-elemen dalam array angkaArray.
// Fungsi pembanding (a, b) digunakan untuk menentukan urutan pengurutan. Dengan mengembalikan a - b, kita memastikan bahwa angka-angka diurutkan dalam urutan menaik (dari yang terkecil ke yang terbesar).
// Setelah pengurutan, elemen-elemen dalam angkaArray akan berada dalam urutan yang benar.
// return `Urutan: ${angkaArray[0]}, ${angkaArray[1]}, ${angkaArray[2]}`;
// Mengembalikan string yang menampilkan ketiga angka dalam urutan yang telah diurutkan.
// angkaArray[0], angkaArray[1], dan angkaArray[2] mengacu pada elemen pertama, kedua, dan ketiga dalam array yang telah diurutkan.

//10. cek tipe data
console.log("\n10. Cek Tipe Data");
console.log("");
function cekTipeData(input) {
  let tipe = typeof input;

  if (tipe === "string") {
    return "Input: '" + input + "' -> Tipe: String (1)";
  } else if (tipe === "number") {
    return "Input: " + input + " -> Tipe: Number (2)";
  } else {
    return "Input: " + input + " -> Tipe: Lainnya (3)";
  }
}

// penjelasan if else:
// if (tipe === "string") {
//   ...
// } else if (tipe === "number") {
//   ...
// } else {
//   ...
// }
// Struktur if-else ini digunakan untuk memeriksa tipe data dari input yang diberikan.
// Pertama, kita memeriksa apakah tipe data adalah "string". Jika ya, maka blok kode di dalam if akan dieksekusi.
// Jika tidak, kita lanjut ke kondisi else if untuk memeriksa apakah tipe data adalah "number". Jika ya, maka blok kode di dalam else if akan dieksekusi.
// Jika kedua kondisi sebelumnya tidak terpenuhi, maka blok kode di dalam else akan dieksekusi, yang menangani semua tipe data lainnya.
// Dengan cara ini, kita dapat mengkategorikan input berdasarkan tipe datanya dan memberikan output yang sesuai.

// Contoh penggunaan
console.log(cekTipeData("hello"));
console.log(cekTipeData(42));
console.log(cekTipeData(true));

//11. ganti huruf a jadi *
console.log("\n11. Ganti Huruf 'a' Jadi '*'");
console.log("");
function gantiHurufA(teks) {
  let hasil = "";

  for (let i = 0; i < teks.length; i++) {
    if (teks[i].toLowerCase() === "a") {
      hasil += "*";
    } else {
      hasil += teks[i];
    }
  }

  return "Awal: '" + teks + "' -> Hasil: '" + hasil + "'";
}

console.log(gantiHurufA("An apple a day keeps the doctor away"));

// penjelasan detailnya:
// for (let i = 0; i < teks.length; i++) {
//   ...
// }
// Digunakan untuk mengiterasi setiap karakter dalam string teks menggunakan indeks. Variabel i berfungsi sebagai penghitung yang dimulai dari 0 hingga panjang string (teks.length).
// Ini memungkinkan kita untuk mengakses setiap karakter dalam string berdasarkan posisinya menggunakan teks[i].
// teks[i].toLowerCase() digunakan untuk mengubah karakter saat ini menjadi huruf kecil sebelum dibandingkan dengan 'a'. Ini memastikan bahwa perbandingan tidak peka terhadap huruf besar/kecil, sehingga baik 'a' maupun 'A' akan diganti dengan '*'.
// hasil += teks[i]; digunakan untuk menambahkan karakter saat ini ke string hasil jika karakter tersebut bukan 'a' atau 'A'. Ini memastikan bahwa semua karakter lain tetap utuh dalam hasil akhir.
// Hasilnya adalah string baru yang dibentuk dengan mengganti semua kemunculan huruf 'a' atau 'A' dengan '*', sementara karakter lainnya tetap sama seperti aslinya.
=======
/*  
Write a code to display the multiplication table of a given integer.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ ...
■ 9 x 10

● Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome
● Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
● Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
● Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
● Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”


● Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
● Write a code to find the largest of two given integers
○ Example : num1 = 42, num2 = 27 → 42
● Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
● Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

//1. tabel perkalian
console.log("1. Tabel Perkalian");
console.log("");
function buatTabelPerkalian(angka) {
  console.log("Tabel perkalian " + angka + ":");

  for (let i = 1; i <= 10; i++) {
    let hasil = angka * i;
    console.log(angka + " x " + i + " = " + hasil);
  }
}

buatTabelPerkalian(9);

//atau memakai template literal:
// function buatTabelPerkalian(angka) {
//   console.log(`Tabel perkalian ${angka}:`);

//   for (let i = 1; i <= 10; i++) {
//     let hasil = angka * i;
//     console.log(`${angka} × ${i} = ${hasil}`);
//   }
// }

// buatTabelPerkalian(9);

//2. cek palindrome
console.log("\n2. Cek Palindrome");
console.log("");
function cekPalindrome(kata) {
  let kataTerbalik = kata.split("").reverse().join("");

  if (kata === kataTerbalik) {
    return `${kata} adalah palindrome`;
  } else {
    return `${kata} bukan palindrome`;
  }
}

console.log(cekPalindrome("madam"));
console.log(cekPalindrome("hello"));

//3. konversi cm ke km
console.log("\n3. Konversi cm ke km");
console.log("");
function cmKeKm(centimeter) {
  let kilometer = centimeter / 100000;
  return `${centimeter} cm = ${kilometer} km`;
}

console.log(cmKeKm(100000));
console.log(cmKeKm(50000));
// penjelasannya: 1 km = 1000 m, 1 m = 100 cm, jadi 1 km = 1000 * 100 cm = 100000 cm

//4. format mata uang (IDR)
console.log("\n4. Format Mata Uang (IDR)");
console.log("");
function formatMataUang(angka) {
  // Format angka dengan titik sebagai pemisah ribuan dan koma untuk desimal
  let format = "Rp " + angka.toLocaleString("id-ID") + ",00";
  return format;
}

console.log(formatMataUang(1000));
console.log(formatMataUang(1000000));

//penjelasannya: toLocaleString('id-ID') digunakan untuk memformat angka sesuai dengan konvensi Indonesia, yang menggunakan titik sebagai pemisah ribuan dan koma untuk desimal.

//5. hapus string pertama yang ditemukan
console.log("\n5. Hapus String Pertama yang Ditemukan");
console.log("");
function hapusStringPertama(teks, cari) {
  let posisi = teks.indexOf(cari);

  if (posisi === -1) {
    return teks;
  }

  //   ini bisa juga pakai replace:
  //   let hasil = teks.replace(cari, '');

  //   return `Awal: '${teks}' -> Hasil: '${hasil}'`;
  // }

  let hasil = teks.slice(0, posisi) + teks.slice(posisi + cari.length);
  return `Awal: '${teks}' -> Hasil: '${hasil}'`;
}

console.log(hapusStringPertama("Hello world", "ell"));

//penjelasan detailnya:
// indexOf(cari) digunakan untuk menemukan posisi pertama dari string yang dicari dalam teks. Jika string tidak ditemukan, fungsi akan mengembalikan teks asli.
// slice(0, posisi) mengambil bagian dari teks sebelum string yang dicari.
// slice(posisi + cari.length) mengambil bagian dari teks setelah string yang dicari.
// Hasilnya adalah penggabungan dari kedua bagian tersebut, sehingga string yang dicari dihapus dari teks asli.

//6. kapaitalisasi huruf pertama setiap kata
console.log("\n6. Kapitalisasi Huruf Pertama Setiap Kata");
console.log("");
function kapitalisasiKata(teks) {
  let kataArray = teks.split(" ");
  let hasilArray = [];

  for (let kata of kataArray) {
    let kataKapital = kata.charAt(0).toUpperCase() + kata.slice(1);
    hasilArray.push(kataKapital);
  }

  //penjelasan for disni:
  // for (let kata of kataArray) {
  //   ...
  // }
  // Digunakan untuk mengiterasi setiap elemen dalam array kataArray. Pada setiap iterasi, variabel kata akan berisi satu elemen dari array tersebut.
  // Ini memungkinkan kita untuk memproses setiap kata secara individual, seperti mengkapitalisasi huruf pertamanya.

  let hasil = hasilArray.join(" ");
  return `Awal: '${teks}' -> Hasil: '${hasil}'`;
  //   penjelasan join:
  // join(" ") digunakan untuk menggabungkan elemen-elemen dalam array hasilArray menjadi satu string, dengan spasi sebagai pemisah antar kata.
}

console.log(kapitalisasiKata("hello world"));

//cara kerja kodenya:
// split(" ") digunakan untuk memecah string teks menjadi array kata-kata berdasarkan spasi.
// charAt(0).toUpperCase() mengambil huruf pertama dari setiap kata dan mengubahnya menjadi huruf kapital.
// slice(1) mengambil sisa huruf dari kata tersebut, dimulai dari indeks 1 hingga akhir.
// Hasilnya adalah penggabungan dari huruf kapital pertama dan sisa huruf, yang kemudian ditambahkan ke array hasilArray.
// Akhirnya, join(" ") menggabungkan semua kata dalam hasilArray menjadi satu string dengan spasi di antara mereka.

//7. tukar besar kecil huruf
console.log("\n7. Tukar Besar Kecil Huruf");
console.log("");
function tukarCase(teks) {
  let hasil = "";

  for (let huruf of teks) {
    if (huruf === huruf.toUpperCase()) {
      hasil += huruf.toLowerCase();
    } else {
      hasil += huruf.toUpperCase();
    }
  }

  return `Awal: '${teks}' -> Hasil: '${hasil}'`;
}

console.log(tukarCase("The QuiCk BrOwN Fox"));
//penjelasan detailnya:
// for (let huruf of teks) {
//   ...
// }
// Digunakan untuk mengiterasi setiap karakter dalam string teks. Pada setiap iterasi, variabel huruf akan berisi satu karakter dari string tersebut.
// Ini memungkinkan kita untuk memproses setiap karakter secara individual, seperti menukar besar kecil huruf.
// huruf.toUpperCase() digunakan untuk memeriksa apakah karakter saat ini adalah huruf besar.
// huruf.toLowerCase() digunakan untuk mengubah huruf besar menjadi huruf kecil.
// huruf.toUpperCase() digunakan untuk mengubah huruf kecil menjadi huruf besar.
// Hasilnya adalah string baru yang dibentuk dengan menukar besar kecil setiap karakter dari string asli.

//8. cari bilangan terbesar dari dua angka
console.log("\n8. Cari Bilangan Terbesar dari Dua Angka");
console.log("");
function cariTerbesar(angka1, angka2) {
  if (angka1 > angka2) {
    return `Angka terbesar: ${angka1}`;
  } else if (angka2 > angka1) {
    return `Angka terbesar: ${angka2}`;
  } else {
    return `Kedua angka sama besar: ${angka1}`;
  }
}

console.log(cariTerbesar(42, 27));
console.log(cariTerbesar(15, 30));

// cara bacanya tempalte literal:
// `Angka terbesar: ${angka1}`
// Tanda backtick (`) digunakan untuk membuat template literal, yang memungkinkan penyisipan ekspresi di dalam string.
// ${angka1} adalah ekspresi yang akan dievaluasi dan hasilnya akan disisipkan ke dalam string pada posisi tersebut.
// Jadi, jika angka1 adalah 42, maka hasil akhirnya akan menjadi "Angka terbesar: 42".

//maksudnya pada console.log(cariTerbesar(42, 27)); adalah memanggil fungsi cariTerbesar dengan argumen 42 dan 27, lalu mencetak hasilnya ke konsol.

//9. urutkan tiga angka
console.log("\n9. Urutkan Tiga Angka");
console.log("");
function urutkanTigaAngka(angka1, angka2, angka3) {
  // Buat array dan urutkan
  let angkaArray = [angka1, angka2, angka3];
  angkaArray.sort(function (a, b) {
    return a - b;
  });

  return `Urutan: ${angkaArray[0]}, ${angkaArray[1]}, ${angkaArray[2]}`;
}

console.log(urutkanTigaAngka(42, 27, 18));

// penjelasan detailnya:
// let angkaArray = [angka1, angka2, angka3];
// Membuat array baru yang berisi ketiga angka yang diberikan sebagai argumen fungsi.
// array ini akan digunakan untuk menyimpan dan mengurutkan angka-angka tersebut.
// angkaArray.sort(function (a, b) {
//   return a - b;
// });
// Menggunakan metode sort() untuk mengurutkan elemen-elemen dalam array angkaArray.
// Fungsi pembanding (a, b) digunakan untuk menentukan urutan pengurutan. Dengan mengembalikan a - b, kita memastikan bahwa angka-angka diurutkan dalam urutan menaik (dari yang terkecil ke yang terbesar).
// Setelah pengurutan, elemen-elemen dalam angkaArray akan berada dalam urutan yang benar.
// return `Urutan: ${angkaArray[0]}, ${angkaArray[1]}, ${angkaArray[2]}`;
// Mengembalikan string yang menampilkan ketiga angka dalam urutan yang telah diurutkan.
// angkaArray[0], angkaArray[1], dan angkaArray[2] mengacu pada elemen pertama, kedua, dan ketiga dalam array yang telah diurutkan.

//10. cek tipe data
console.log("\n10. Cek Tipe Data");
console.log("");
function cekTipeData(input) {
  let tipe = typeof input;

  if (tipe === "string") {
    return "Input: '" + input + "' -> Tipe: String (1)";
  } else if (tipe === "number") {
    return "Input: " + input + " -> Tipe: Number (2)";
  } else {
    return "Input: " + input + " -> Tipe: Lainnya (3)";
  }
}

// penjelasan if else:
// if (tipe === "string") {
//   ...
// } else if (tipe === "number") {
//   ...
// } else {
//   ...
// }
// Struktur if-else ini digunakan untuk memeriksa tipe data dari input yang diberikan.
// Pertama, kita memeriksa apakah tipe data adalah "string". Jika ya, maka blok kode di dalam if akan dieksekusi.
// Jika tidak, kita lanjut ke kondisi else if untuk memeriksa apakah tipe data adalah "number". Jika ya, maka blok kode di dalam else if akan dieksekusi.
// Jika kedua kondisi sebelumnya tidak terpenuhi, maka blok kode di dalam else akan dieksekusi, yang menangani semua tipe data lainnya.
// Dengan cara ini, kita dapat mengkategorikan input berdasarkan tipe datanya dan memberikan output yang sesuai.

// Contoh penggunaan
console.log(cekTipeData("hello"));
console.log(cekTipeData(42));
console.log(cekTipeData(true));

//11. ganti huruf a jadi *
console.log("\n11. Ganti Huruf 'a' Jadi '*'");
console.log("");
function gantiHurufA(teks) {
  let hasil = "";

  for (let i = 0; i < teks.length; i++) {
    if (teks[i].toLowerCase() === "a") {
      hasil += "*";
    } else {
      hasil += teks[i];
    }
  }

  return "Awal: '" + teks + "' -> Hasil: '" + hasil + "'";
}

console.log(gantiHurufA("An apple a day keeps the doctor away"));

// penjelasan detailnya:
// for (let i = 0; i < teks.length; i++) {
//   ...
// }
// Digunakan untuk mengiterasi setiap karakter dalam string teks menggunakan indeks. Variabel i berfungsi sebagai penghitung yang dimulai dari 0 hingga panjang string (teks.length).
// Ini memungkinkan kita untuk mengakses setiap karakter dalam string berdasarkan posisinya menggunakan teks[i].
// teks[i].toLowerCase() digunakan untuk mengubah karakter saat ini menjadi huruf kecil sebelum dibandingkan dengan 'a'. Ini memastikan bahwa perbandingan tidak peka terhadap huruf besar/kecil, sehingga baik 'a' maupun 'A' akan diganti dengan '*'.
// hasil += teks[i]; digunakan untuk menambahkan karakter saat ini ke string hasil jika karakter tersebut bukan 'a' atau 'A'. Ini memastikan bahwa semua karakter lain tetap utuh dalam hasil akhir.
// Hasilnya adalah string baru yang dibentuk dengan mengganti semua kemunculan huruf 'a' atau 'A' dengan '*', sementara karakter lainnya tetap sama seperti aslinya.
>>>>>>> 9e68cf40c5b6a171d2ea8c61269021f372a59468
