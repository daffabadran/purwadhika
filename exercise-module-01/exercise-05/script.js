<<<<<<< HEAD
/*
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
3. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]


1. Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
1. Write a function that will combine 2 given array into one array
b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
2. Write a function to find duplicate values in an array
b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
3. Write a function to find the difference in 2 given array
b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
2. Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
 */

//1. fungsi mendapatkan nilai terendah, tertinggi, dan rata-rata
console.log("1. fungsi mendapatkan nilai terendah, tertinggi, dan rata-rata");
console.log("");
function analisisArray(angkaArray) {
  let lowest = angkaArray[0];
  let highest = angkaArray[0];
  let total = 0;

  for (let i = 0; i < angkaArray.length; i++) {
    // Cari nilai terendah
    if (angkaArray[i] < lowest) {
      lowest = angkaArray[i];
    }
    // Cari nilai tertinggi
    if (angkaArray[i] > highest) {
      highest = angkaArray[i];
    }
    // Hitung total untuk rata-rata
    total += angkaArray[i];
  }

  let average = total / angkaArray.length;

  return {
    lowest: lowest,
    highest: highest,
    average: average,
  };
}

let arrAnalisis = [12, 5, 23, 18, 4, 45, 32];
let hasil = analisisArray(arrAnalisis);
console.log(hasil);
console.log("");

//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi analisisArray(angkaArray) menerima parameter angkaArray, yaitu array angka yang akan dianalisis.
// 2. Variabel lowest dan highest diinisialisasi dengan elemen pertama array untuk memulai pencarian nilai terendah dan tertinggi.
// 3. Variabel total diinisialisasi dengan 0 untuk menghitung jumlah total angka dalam array.
// 4. Looping for digunakan untuk iterasi melalui setiap elemen dalam array.
// 5. Di dalam loop, ada tiga operasi utama:
//    a. Kondisi if pertama memeriksa apakah elemen saat ini lebih kecil dari lowest. Jika ya, lowest diperbarui.
//    b. Kondisi if kedua memeriksa apakah elemen saat ini lebih besar dari highest. Jika ya, highest diperbarui.
//    c. Setiap elemen ditambahkan ke total untuk menghitung jumlah keseluruhan.
// 6. Setelah loop selesai, rata-rata dihitung dengan membagi total dengan panjang array.
// 7. Fungsi mengembalikan sebuah objek yang berisi nilai lowest, highest, dan average.
// 8. Fungsi dipanggil dengan array contoh [12, 5, 23, 18, 4, 45, 32], dan hasilnya dicetak ke konsol.

//2. fungsi untuk menggabungkan kata dengan format tertentu
console.log("2. fungsi untuk menggabungkan kata dengan format tertentu");
console.log("");
function gabungKata(kataArray) {
  if (kataArray.length === 0) return "";
  if (kataArray.length === 1) return kataArray[0];

  let result = kataArray.slice(0, -1).join(", ");
  result += ", and " + kataArray[kataArray.length - 1];

  return result;
}

let fruits = ["apple", "banana", "cherry", "date"];
console.log(gabungKata(fruits)); // "apple, banana, cherry, and date"
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi gabungKata(kataArray) menerima satu parameter: kataArray, yaitu array yang berisi kata-kata.
// 2. Fungsi pertama-tama memeriksa panjang array untuk menangani kasus khusus:
//    a. Jika array kosong, fungsi mengembalikan string kosong.
//    b. Jika array hanya memiliki satu elemen, fungsi mengembalikan elemen tersebut.
// 3. Untuk array dengan lebih dari satu elemen, fungsi menggunakan metode slice(0, -1) untuk mengambil semua elemen kecuali yang terakhir.
// 4. Metode join(", ") digunakan untuk menggabungkan elemen-elemen ini menjadi
//    sebuah string yang dipisahkan oleh koma dan spasi.
// 5. Kemudian, string ", and " ditambahkan diikuti oleh elemen terakhir dari array.
// 6. Fungsi mengembalikan string hasil penggabungan.
// 7. Fungsi dipanggil dengan array contoh ["apple", "banana", "cherry", "date"], dan hasilnya dicetak ke konsol.

//3. fungsi untuk mendapatkan bilangan terkecil kedua
console.log("3. fungsi untuk mendapatkan bilangan terkecil kedua");
console.log("");
function terkecilKedua(angkaArray) {
  // Hapus duplikat dan urutkan
  let uniqueSorted = [...new Set(angkaArray)].sort((a, b) => a - b);

  // Jika hanya ada 1 elemen, return elemen tersebut
  if (uniqueSorted.length < 2) return uniqueSorted[0];

  return uniqueSorted[1];
}

let numbers = [5, 3, 1, 7, 2, 6];
console.log(terkecilKedua(numbers)); // 2
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi terkecilKedua(angkaArray) menerima satu parameter: angkaArray, yaitu array yang berisi bilangan.
// 2. Fungsi ini pertama-tama menghapus duplikat dari array menggunakan Set dan kemudian mengurutkan elemen-elemennya.
// 3. Jika setelah penghapusan duplikat hanya ada satu elemen, fungsi akan mengembalikan elemen tersebut.
// 4. Jika ada lebih dari satu elemen, fungsi akan mengembalikan elemen terkecil kedua.
// 5. Fungsi dipanggil dengan array contoh [5, 3, 1, 7, 2, 6], dan hasilnya dicetak ke konsol.

//4. fungsi untuk menjumlahkan dua array
console.log("4. fungsi untuk menjumlahkan dua array");
console.log("");
function jumlahDuaArray(array1, array2) {
  let hasil = [];

  for (let i = 0; i < array1.length; i++) {
    hasil.push(array1[i] + array2[i]);
  }

  return hasil;
}

let arrJumlah1 = [1, 2, 3];
let arrJumlah2 = [3, 2, 1];
console.log(jumlahDuaArray(arrJumlah1, arrJumlah2));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi jumlahDuaArray(array1, array2) menerima dua parameter: array1 dan array2, yaitu dua array yang akan dijumlahkan.
// 2. Variabel hasil diinisialisasi sebagai array kosong untuk menyimpan hasil penjumlahan.
// 3. Loop for berjalan melalui setiap elemen dalam array1 (asumsi kedua array memiliki panjang yang sama).
// 4. Di dalam loop, elemen pada posisi yang sama dari kedua array dijumlahkan dan hasilnya ditambahkan ke array hasil menggunakan metode push().
// 5. Setelah loop selesai, fungsi mengembalikan array hasil yang berisi penjumlahan elemen-elemen dari kedua array.
// 6. Fungsi dipanggil dengan dua array contoh [1, 2, 3] dan [3, 2, 1], dan hasilnya dicetak ke konsol.

//5. fungsi untuk menambahkan elemen ke array jika belum ada
console.log("5. fungsi untuk menambahkan elemen ke array jika belum ada");
console.log("");
function tambahkanUnik(array, newElement) {
  if (!array.includes(newElement)) {
    array.push(newElement);
  }
  return array;
}

let arrUnik = [1, 2, 3, 4];
console.log(tambahkanUnik(arrUnik, 4)); // [1, 2, 3, 4]
console.log(tambahkanUnik(arrUnik, 7)); // [1, 2, 3, 4, 7]

console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi tambahkanUnik(array, newElement) menerima dua parameter: array, yaitu array tempat elemen akan ditambahkan, dan newElement, yaitu elemen yang akan ditambahkan.
// 2. Fungsi menggunakan metode includes() untuk memeriksa apakah newElement sudah ada dalam array.
// 3. Jika newElement tidak ada dalam array (hasil includes() adalah false), elemen tersebut ditambahkan ke array menggunakan metode push().
// 4. Fungsi mengembalikan array yang telah diperbarui.
// 5. Fungsi dipanggil dua kali dengan array contoh [1, 2, 3, 4] dan elemen baru 4 dan 7, dan hasilnya dicetak ke konsol.

//6. fungsi untuk menjumlahkan semua angka dalam array campuran
console.log("6. fungsi untuk menjumlahkan semua angka dalam array campuran");
console.log("");
function jumlahAngkaDalamArray(mixedArray) {
  let total = 0;

  for (let i = 0; i < mixedArray.length; i++) {
    // Convert ke number dan cek jika valid number
    let num = Number(mixedArray[i]);
    if (!isNaN(num) && typeof mixedArray[i] !== "boolean") {
      total += num;
    }
  }

  return total;
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(jumlahAngkaDalamArray(mixedArray));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi jumlahAngkaDalamArray(mixedArray) menerima satu parameter: mixedArray, yaitu array yang berisi berbagai tipe data.
// 2. Variabel total diinisialisasi dengan 0 untuk menyimpan jumlah angka.
// 3. Loop for berjalan melalui setiap elemen dalam mixedArray.
// 4. Di dalam loop, setiap elemen dikonversi ke tipe number menggunakan fungsi Number().
// 5. Kondisi if memeriksa apakah hasil konversi adalah angka valid (bukan NaN) dan memastikan elemen asli bukan boolean.
// 6. Jika elemen adalah angka valid, nilainya ditambahkan ke total.
// 7. Setelah loop selesai, fungsi mengembalikan total jumlah angka dalam array.
// 8. Fungsi dipanggil dengan array contoh ["3", 1, "string", null, false, undefined, 2], dan hasilnya dicetak ke konsol.
// Fungsi ini mengkonversi setiap elemen ke number dan hanya menambahkan yang benar-benar angka (bukan boolean).

//7. fungsi untuk memasukan integer ke array dengan ukuran maksimum atau batas maksimum
console.log(
  "7. fungsi untuk memasukan integer ke array dengan ukuran maksimum atau batas maksimum"
);
console.log("");
function batasiArray(maxSize, ...numbers) {
  let result = [];

  for (let i = 0; i < Math.min(maxSize, numbers.length); i++) {
    result.push(numbers[i]);
  }

  return result;
}

console.log(batasiArray(5, 5, 10, 24, 3, 6, 7, 8));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi batasiArray(maxSize, ...numbers) menerima satu parameter tetap maxSize dan parameter rest numbers yang memungkinkan memasukkan sejumlah integer.
// 2. Variabel result diinisialisasi sebagai array kosong untuk menyimpan angka yang akan dimasukkan.
// 3. Loop for berjalan dari 0 hingga nilai minimum antara maxSize dan panjang numbers, memastikan tidak melebihi batas maksimum.
// 4. Di dalam loop, setiap angka dari numbers ditambahkan ke array result menggunakan metode push().
// 5. Setelah loop selesai, fungsi mengembalikan array result yang berisi angka-angka hingga batas maksimum.
// 6. Fungsi dipanggil dengan maxSize 5 dan beberapa angka, dan hasilnya dicetak ke konsol.

//8. fungsi untuk menggabungkan dua array
console.log("8. fungsi untuk menggabungkan dua array");
console.log("");
function gabungDuaArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

let arrGabung1 = [1, 2, 3];
let arrGabung2 = [4, 5, 6];
console.log(gabungDuaArray(arrGabung1, arrGabung2));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi gabungDuaArray(arr1, arr2) menerima dua parameter: arr1 dan arr2, yaitu dua array yang akan digabungkan.
// 2. Fungsi menggunakan spread operator (...) untuk menggabungkan elemen-elemen dari kedua array ke dalam array baru.
// 3. Fungsi mengembalikan array baru yang berisi semua elemen dari arr1 diikuti oleh semua elemen dari arr2.
// 4. Fungsi dipanggil dengan dua array contoh [1, 2, 3] dan [4, 5, 6], dan hasilnya dicetak ke konsol.

//9. fungsi untuk menemukan nilai duplikat dalam array
console.log("9. fungsi untuk menemukan nilai duplikat dalam array");
console.log("");
function cariDuplikat(arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      seen[arr[i]] = true;
    }
  }

  return duplicates;
}

let arrDuplikat = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(cariDuplikat(arrDuplikat));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi cariDuplikat(arr) menerima satu parameter: arr, yaitu array yang berisi bilangan.
// 2. Variabel duplicates diinisialisasi sebagai array kosong untuk menyimpan bilangan duplikat.
// 3. Variabel seen diinisialisasi sebagai objek kosong untuk melacak bilangan yang sudah pernah ditemui.
// 4. Loop for berjalan melalui setiap elemen dalam arr.
// 5. Di dalam loop, kondisi if pertama memeriksa apakah elemen saat ini sudah ada dalam objek seen.
//    a. Jika sudah ada, kondisi if kedua memeriksa apakah elemen tersebut sudah ada dalam array duplicates. Jika belum, elemen tersebut ditambahkan ke duplicates.
//    b. Jika elemen belum ada dalam seen, elemen tersebut ditandai sebagai sudah pernah ditemui dengan menambahkannya ke objek seen.
// 6. Setelah loop selesai, fungsi mengembalikan array duplicates yang berisi bilangan duplikat.
// 7. Fungsi dipanggil dengan array contoh [1, 2, 2, 2, 3, 3, 4, 5, 5], dan hasilnya dicetak ke konsol. // Output: [2, 3, 5] // Output: [2, 3, 5]

//10. fungsi untuk mencari perbedaan antara dua array
console.log("10. fungsi untuk mencari perbedaan antara dua array");
console.log("");
function perbedaanDuaArray(arr1, arr2) {
  let diff1 = arr1.filter((item) => !arr2.includes(item));
  let diff2 = arr2.filter((item) => !arr1.includes(item));

  return [...diff1, ...diff2];
}

let arrBeda1 = [1, 2, 3, 4, 5];
let arrBeda2 = [3, 4, 5, 6, 7];
console.log(perbedaanDuaArray(arrBeda1, arrBeda2));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi perbedaanDuaArray(arr1, arr2) menerima dua parameter: arr1 dan arr2, yaitu dua array yang akan dibandingkan.
// 2. Variabel diff1 diinisialisasi dengan hasil filter dari arr1, yang hanya menyertakan elemen-elemen yang tidak ada dalam arr2.
// 3. Variabel diff2 diinisialisasi dengan hasil filter dari arr2, yang hanya menyertakan elemen-elemen yang tidak ada dalam arr1.
// 4. Fungsi mengembalikan array baru yang merupakan gabungan dari diff1 dan diff2 menggunakan spread operator (...).
// 5. Fungsi dipanggil dengan dua array contoh [1, 2, 3, 4, 5] dan [3, 4, 5, 6, 7], dan hasilnya dicetak ke konsol. // Output: [1, 2, 6, 7] // Output: [1, 2, 6, 7]

//11.  fungsi untuk Mengembalikan Hanya Tipe Data Primitive
console.log("11. fungsi untuk Mengembalikan Hanya Tipe Data Primitive");
console.log("");
function ambilPrimitiveSaja(arr) {
  return arr.filter((item) => {
    // Tipe data primitive: bukan object dan bukan array
    return (
      item === null || (typeof item !== "object" && typeof item !== "function")
    );
  });
}

let arrPrimitive = [1, [], undefined, {}, "string", {}, []];
console.log(ambilPrimitiveSaja(arrPrimitive)); // Output: [1, undefined, "string"]
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi ambilPrimitiveSaja(arr) menerima satu parameter: arr, yaitu array yang berisi berbagai tipe data.
// 2. Fungsi menggunakan metode filter() untuk membuat array baru yang hanya berisi elemen-elemen dengan tipe data primitive.
// 3. Di dalam callback filter, kondisi memeriksa apakah elemen adalah null atau bukan objek dan bukan fungsi (tipe data primitive).
// 4. Fungsi mengembalikan array baru yang hanya berisi elemen-elemen dengan tipe data primitive.
// 5. Fungsi dipanggil dengan array contoh [1, [], undefined, {}, "string", {}, []], dan hasilnya dicetak ke konsol. // Output: [1, undefined, "string"]    // Output: [1, undefined, "string"]
//Fungsi ini memfilter hanya elemen yang merupakan tipe data primitive (bukan object/array).

//12.fungsi untuk menjumlahkan nilai duplikat
console.log("12.fungsi untuk menjumlahkan nilai duplikat");
console.log("");
function jumlahDuplikat(arr) {
  let count = {};
  let total = 0;

  // Hitung kemunculan setiap angka
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }

  // Jumlahkan hanya nilai yang muncul lebih dari 1 kali
  for (let key in count) {
    if (count[key] > 1) {
      total += parseInt(key) * (count[key] - 1);
    }
  }

  return total;
}

let arrJumlahDuplikat = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(jumlahDuplikat(arrJumlahDuplikat)); // Output: 40

//Angka 10 muncul 4 kali, jadi duplikatnya = 10 × (4-1) = 30
//Tidak ada angka lain yang duplikat
//Total = 30

console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi jumlahDuplikat(arr) menerima satu parameter: arr, yaitu array yang berisi bilangan.
// 2. Di dalam fungsi, dibuat objek count untuk menyimpan jumlah kemunculan setiap angka.
// 3. Menggunakan loop, setiap angka dalam array dihitung kemunculannya dan disimpan dalam objek count.
// 4. Setelah itu, dilakukan loop lagi untuk menjumlahkan nilai duplikat (angka yang muncul lebih dari 1 kali).
// 5. Fungsi mengembalikan total jumlah duplikat yang ditemukan.
// 6. Fungsi dipanggil dengan array contoh [10, 20, 40, 10, 50, 30, 10, 60, 10], dan hasilnya dicetak ke konsol. // Output: 40
// Angka 10 muncul 4 kali, jadi duplikatnya = 10 × (4-1) = 30
// Tidak ada angka lain yang duplikat
// Total = 30

//13. game suit
console.log("13. game suit");
console.log("");
function gameBatuGuntingKertas(pilihanUser) {
  // Pilihan komputer secara random
  const pilihan = ["batu", "gunting", "kertas"];
  const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];

  console.log("User: " + pilihanUser);
  console.log("Komputer: " + pilihanKomputer);

  // Aturan permainan
  if (pilihanUser === pilihanKomputer) {
    return "Seri!";
  }

  if (
    (pilihanUser === "batu" && pilihanKomputer === "gunting") ||
    (pilihanUser === "gunting" && pilihanKomputer === "kertas") ||
    (pilihanUser === "kertas" && pilihanKomputer === "batu")
  ) {
    return "Win!";
  } else {
    return "Lose!";
  }
}

console.log(gameBatuGuntingKertas("batu"));
console.log("");

//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi gameBatuGuntingKertas(pilihanUser) menerima satu parameter: pilihanUser, yaitu pilihan pemain (batu, gunting, atau kertas).
// 2. Di dalam fungsi, dibuat array pilihan yang berisi tiga opsi permainan.
// 3. Pilihan komputer diambil secara acak dari array pilihan.
// 4. Hasil permainan ditentukan berdasarkan aturan yang telah ditetapkan.
// 5. Jika pilihan pemain sama dengan pilihan komputer, hasilnya adalah "Seri!".
// 6. Jika pilihan pemain menang berdasarkan aturan permainan, hasilnya adalah "Win!".
// 7. Jika pilihan pemain kalah, hasilnya adalah "Lose!".
// 8. Fungsi mengembalikan hasil permainan.
// 9. Fungsi dipanggil dengan pilihan pemain "batu", dan hasilnya dicetak ke konsol. // Hasil komputer akan berbeda setiap kali karena diambil secara acak.
=======
/*
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
3. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]


1. Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
1. Write a function that will combine 2 given array into one array
b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
2. Write a function to find duplicate values in an array
b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
3. Write a function to find the difference in 2 given array
b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”]
2. Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
 */

//1. fungsi mendapatkan nilai terendah, tertinggi, dan rata-rata
console.log("1. fungsi mendapatkan nilai terendah, tertinggi, dan rata-rata");
console.log("");
function analisisArray(angkaArray) {
  let lowest = angkaArray[0];
  let highest = angkaArray[0];
  let total = 0;

  for (let i = 0; i < angkaArray.length; i++) {
    // Cari nilai terendah
    if (angkaArray[i] < lowest) {
      lowest = angkaArray[i];
    }
    // Cari nilai tertinggi
    if (angkaArray[i] > highest) {
      highest = angkaArray[i];
    }
    // Hitung total untuk rata-rata
    total += angkaArray[i];
  }

  let average = total / angkaArray.length;

  return {
    lowest: lowest,
    highest: highest,
    average: average,
  };
}

let arrAnalisis = [12, 5, 23, 18, 4, 45, 32];
let hasil = analisisArray(arrAnalisis);
console.log(hasil);
console.log("");

//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi analisisArray(angkaArray) menerima parameter angkaArray, yaitu array angka yang akan dianalisis.
// 2. Variabel lowest dan highest diinisialisasi dengan elemen pertama array untuk memulai pencarian nilai terendah dan tertinggi.
// 3. Variabel total diinisialisasi dengan 0 untuk menghitung jumlah total angka dalam array.
// 4. Looping for digunakan untuk iterasi melalui setiap elemen dalam array.
// 5. Di dalam loop, ada tiga operasi utama:
//    a. Kondisi if pertama memeriksa apakah elemen saat ini lebih kecil dari lowest. Jika ya, lowest diperbarui.
//    b. Kondisi if kedua memeriksa apakah elemen saat ini lebih besar dari highest. Jika ya, highest diperbarui.
//    c. Setiap elemen ditambahkan ke total untuk menghitung jumlah keseluruhan.
// 6. Setelah loop selesai, rata-rata dihitung dengan membagi total dengan panjang array.
// 7. Fungsi mengembalikan sebuah objek yang berisi nilai lowest, highest, dan average.
// 8. Fungsi dipanggil dengan array contoh [12, 5, 23, 18, 4, 45, 32], dan hasilnya dicetak ke konsol.

//2. fungsi untuk menggabungkan kata dengan format tertentu
console.log("2. fungsi untuk menggabungkan kata dengan format tertentu");
console.log("");
function gabungKata(kataArray) {
  if (kataArray.length === 0) return "";
  if (kataArray.length === 1) return kataArray[0];

  let result = kataArray.slice(0, -1).join(", ");
  result += ", and " + kataArray[kataArray.length - 1];

  return result;
}

let fruits = ["apple", "banana", "cherry", "date"];
console.log(gabungKata(fruits)); // "apple, banana, cherry, and date"
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi gabungKata(kataArray) menerima satu parameter: kataArray, yaitu array yang berisi kata-kata.
// 2. Fungsi pertama-tama memeriksa panjang array untuk menangani kasus khusus:
//    a. Jika array kosong, fungsi mengembalikan string kosong.
//    b. Jika array hanya memiliki satu elemen, fungsi mengembalikan elemen tersebut.
// 3. Untuk array dengan lebih dari satu elemen, fungsi menggunakan metode slice(0, -1) untuk mengambil semua elemen kecuali yang terakhir.
// 4. Metode join(", ") digunakan untuk menggabungkan elemen-elemen ini menjadi
//    sebuah string yang dipisahkan oleh koma dan spasi.
// 5. Kemudian, string ", and " ditambahkan diikuti oleh elemen terakhir dari array.
// 6. Fungsi mengembalikan string hasil penggabungan.
// 7. Fungsi dipanggil dengan array contoh ["apple", "banana", "cherry", "date"], dan hasilnya dicetak ke konsol.

//3. fungsi untuk mendapatkan bilangan terkecil kedua
console.log("3. fungsi untuk mendapatkan bilangan terkecil kedua");
console.log("");
function terkecilKedua(angkaArray) {
  // Hapus duplikat dan urutkan
  let uniqueSorted = [...new Set(angkaArray)].sort((a, b) => a - b);

  // Jika hanya ada 1 elemen, return elemen tersebut
  if (uniqueSorted.length < 2) return uniqueSorted[0];

  return uniqueSorted[1];
}

let numbers = [5, 3, 1, 7, 2, 6];
console.log(terkecilKedua(numbers)); // 2
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi terkecilKedua(angkaArray) menerima satu parameter: angkaArray, yaitu array yang berisi bilangan.
// 2. Fungsi ini pertama-tama menghapus duplikat dari array menggunakan Set dan kemudian mengurutkan elemen-elemennya.
// 3. Jika setelah penghapusan duplikat hanya ada satu elemen, fungsi akan mengembalikan elemen tersebut.
// 4. Jika ada lebih dari satu elemen, fungsi akan mengembalikan elemen terkecil kedua.
// 5. Fungsi dipanggil dengan array contoh [5, 3, 1, 7, 2, 6], dan hasilnya dicetak ke konsol.

//4. fungsi untuk menjumlahkan dua array
console.log("4. fungsi untuk menjumlahkan dua array");
console.log("");
function jumlahDuaArray(array1, array2) {
  let hasil = [];

  for (let i = 0; i < array1.length; i++) {
    hasil.push(array1[i] + array2[i]);
  }

  return hasil;
}

let arrJumlah1 = [1, 2, 3];
let arrJumlah2 = [3, 2, 1];
console.log(jumlahDuaArray(arrJumlah1, arrJumlah2));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi jumlahDuaArray(array1, array2) menerima dua parameter: array1 dan array2, yaitu dua array yang akan dijumlahkan.
// 2. Variabel hasil diinisialisasi sebagai array kosong untuk menyimpan hasil penjumlahan.
// 3. Loop for berjalan melalui setiap elemen dalam array1 (asumsi kedua array memiliki panjang yang sama).
// 4. Di dalam loop, elemen pada posisi yang sama dari kedua array dijumlahkan dan hasilnya ditambahkan ke array hasil menggunakan metode push().
// 5. Setelah loop selesai, fungsi mengembalikan array hasil yang berisi penjumlahan elemen-elemen dari kedua array.
// 6. Fungsi dipanggil dengan dua array contoh [1, 2, 3] dan [3, 2, 1], dan hasilnya dicetak ke konsol.

//5. fungsi untuk menambahkan elemen ke array jika belum ada
console.log("5. fungsi untuk menambahkan elemen ke array jika belum ada");
console.log("");
function tambahkanUnik(array, newElement) {
  if (!array.includes(newElement)) {
    array.push(newElement);
  }
  return array;
}

let arrUnik = [1, 2, 3, 4];
console.log(tambahkanUnik(arrUnik, 4)); // [1, 2, 3, 4]
console.log(tambahkanUnik(arrUnik, 7)); // [1, 2, 3, 4, 7]

console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi tambahkanUnik(array, newElement) menerima dua parameter: array, yaitu array tempat elemen akan ditambahkan, dan newElement, yaitu elemen yang akan ditambahkan.
// 2. Fungsi menggunakan metode includes() untuk memeriksa apakah newElement sudah ada dalam array.
// 3. Jika newElement tidak ada dalam array (hasil includes() adalah false), elemen tersebut ditambahkan ke array menggunakan metode push().
// 4. Fungsi mengembalikan array yang telah diperbarui.
// 5. Fungsi dipanggil dua kali dengan array contoh [1, 2, 3, 4] dan elemen baru 4 dan 7, dan hasilnya dicetak ke konsol.

//6. fungsi untuk menjumlahkan semua angka dalam array campuran
console.log("6. fungsi untuk menjumlahkan semua angka dalam array campuran");
console.log("");
function jumlahAngkaDalamArray(mixedArray) {
  let total = 0;

  for (let i = 0; i < mixedArray.length; i++) {
    // Convert ke number dan cek jika valid number
    let num = Number(mixedArray[i]);
    if (!isNaN(num) && typeof mixedArray[i] !== "boolean") {
      total += num;
    }
  }

  return total;
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(jumlahAngkaDalamArray(mixedArray));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi jumlahAngkaDalamArray(mixedArray) menerima satu parameter: mixedArray, yaitu array yang berisi berbagai tipe data.
// 2. Variabel total diinisialisasi dengan 0 untuk menyimpan jumlah angka.
// 3. Loop for berjalan melalui setiap elemen dalam mixedArray.
// 4. Di dalam loop, setiap elemen dikonversi ke tipe number menggunakan fungsi Number().
// 5. Kondisi if memeriksa apakah hasil konversi adalah angka valid (bukan NaN) dan memastikan elemen asli bukan boolean.
// 6. Jika elemen adalah angka valid, nilainya ditambahkan ke total.
// 7. Setelah loop selesai, fungsi mengembalikan total jumlah angka dalam array.
// 8. Fungsi dipanggil dengan array contoh ["3", 1, "string", null, false, undefined, 2], dan hasilnya dicetak ke konsol.
// Fungsi ini mengkonversi setiap elemen ke number dan hanya menambahkan yang benar-benar angka (bukan boolean).

//7. fungsi untuk memasukan integer ke array dengan ukuran maksimum atau batas maksimum
console.log(
  "7. fungsi untuk memasukan integer ke array dengan ukuran maksimum atau batas maksimum"
);
console.log("");
function batasiArray(maxSize, ...numbers) {
  let result = [];

  for (let i = 0; i < Math.min(maxSize, numbers.length); i++) {
    result.push(numbers[i]);
  }

  return result;
}

console.log(batasiArray(5, 5, 10, 24, 3, 6, 7, 8));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi batasiArray(maxSize, ...numbers) menerima satu parameter tetap maxSize dan parameter rest numbers yang memungkinkan memasukkan sejumlah integer.
// 2. Variabel result diinisialisasi sebagai array kosong untuk menyimpan angka yang akan dimasukkan.
// 3. Loop for berjalan dari 0 hingga nilai minimum antara maxSize dan panjang numbers, memastikan tidak melebihi batas maksimum.
// 4. Di dalam loop, setiap angka dari numbers ditambahkan ke array result menggunakan metode push().
// 5. Setelah loop selesai, fungsi mengembalikan array result yang berisi angka-angka hingga batas maksimum.
// 6. Fungsi dipanggil dengan maxSize 5 dan beberapa angka, dan hasilnya dicetak ke konsol.

//8. fungsi untuk menggabungkan dua array
console.log("8. fungsi untuk menggabungkan dua array");
console.log("");
function gabungDuaArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

let arrGabung1 = [1, 2, 3];
let arrGabung2 = [4, 5, 6];
console.log(gabungDuaArray(arrGabung1, arrGabung2));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi gabungDuaArray(arr1, arr2) menerima dua parameter: arr1 dan arr2, yaitu dua array yang akan digabungkan.
// 2. Fungsi menggunakan spread operator (...) untuk menggabungkan elemen-elemen dari kedua array ke dalam array baru.
// 3. Fungsi mengembalikan array baru yang berisi semua elemen dari arr1 diikuti oleh semua elemen dari arr2.
// 4. Fungsi dipanggil dengan dua array contoh [1, 2, 3] dan [4, 5, 6], dan hasilnya dicetak ke konsol.

//9. fungsi untuk menemukan nilai duplikat dalam array
console.log("9. fungsi untuk menemukan nilai duplikat dalam array");
console.log("");
function cariDuplikat(arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      seen[arr[i]] = true;
    }
  }

  return duplicates;
}

let arrDuplikat = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(cariDuplikat(arrDuplikat));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi cariDuplikat(arr) menerima satu parameter: arr, yaitu array yang berisi bilangan.
// 2. Variabel duplicates diinisialisasi sebagai array kosong untuk menyimpan bilangan duplikat.
// 3. Variabel seen diinisialisasi sebagai objek kosong untuk melacak bilangan yang sudah pernah ditemui.
// 4. Loop for berjalan melalui setiap elemen dalam arr.
// 5. Di dalam loop, kondisi if pertama memeriksa apakah elemen saat ini sudah ada dalam objek seen.
//    a. Jika sudah ada, kondisi if kedua memeriksa apakah elemen tersebut sudah ada dalam array duplicates. Jika belum, elemen tersebut ditambahkan ke duplicates.
//    b. Jika elemen belum ada dalam seen, elemen tersebut ditandai sebagai sudah pernah ditemui dengan menambahkannya ke objek seen.
// 6. Setelah loop selesai, fungsi mengembalikan array duplicates yang berisi bilangan duplikat.
// 7. Fungsi dipanggil dengan array contoh [1, 2, 2, 2, 3, 3, 4, 5, 5], dan hasilnya dicetak ke konsol. // Output: [2, 3, 5] // Output: [2, 3, 5]

//10. fungsi untuk mencari perbedaan antara dua array
console.log("10. fungsi untuk mencari perbedaan antara dua array");
console.log("");
function perbedaanDuaArray(arr1, arr2) {
  let diff1 = arr1.filter((item) => !arr2.includes(item));
  let diff2 = arr2.filter((item) => !arr1.includes(item));

  return [...diff1, ...diff2];
}

let arrBeda1 = [1, 2, 3, 4, 5];
let arrBeda2 = [3, 4, 5, 6, 7];
console.log(perbedaanDuaArray(arrBeda1, arrBeda2));
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi perbedaanDuaArray(arr1, arr2) menerima dua parameter: arr1 dan arr2, yaitu dua array yang akan dibandingkan.
// 2. Variabel diff1 diinisialisasi dengan hasil filter dari arr1, yang hanya menyertakan elemen-elemen yang tidak ada dalam arr2.
// 3. Variabel diff2 diinisialisasi dengan hasil filter dari arr2, yang hanya menyertakan elemen-elemen yang tidak ada dalam arr1.
// 4. Fungsi mengembalikan array baru yang merupakan gabungan dari diff1 dan diff2 menggunakan spread operator (...).
// 5. Fungsi dipanggil dengan dua array contoh [1, 2, 3, 4, 5] dan [3, 4, 5, 6, 7], dan hasilnya dicetak ke konsol. // Output: [1, 2, 6, 7] // Output: [1, 2, 6, 7]

//11.  fungsi untuk Mengembalikan Hanya Tipe Data Primitive
console.log("11. fungsi untuk Mengembalikan Hanya Tipe Data Primitive");
console.log("");
function ambilPrimitiveSaja(arr) {
  return arr.filter((item) => {
    // Tipe data primitive: bukan object dan bukan array
    return (
      item === null || (typeof item !== "object" && typeof item !== "function")
    );
  });
}

let arrPrimitive = [1, [], undefined, {}, "string", {}, []];
console.log(ambilPrimitiveSaja(arrPrimitive)); // Output: [1, undefined, "string"]
console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi ambilPrimitiveSaja(arr) menerima satu parameter: arr, yaitu array yang berisi berbagai tipe data.
// 2. Fungsi menggunakan metode filter() untuk membuat array baru yang hanya berisi elemen-elemen dengan tipe data primitive.
// 3. Di dalam callback filter, kondisi memeriksa apakah elemen adalah null atau bukan objek dan bukan fungsi (tipe data primitive).
// 4. Fungsi mengembalikan array baru yang hanya berisi elemen-elemen dengan tipe data primitive.
// 5. Fungsi dipanggil dengan array contoh [1, [], undefined, {}, "string", {}, []], dan hasilnya dicetak ke konsol. // Output: [1, undefined, "string"]    // Output: [1, undefined, "string"]
//Fungsi ini memfilter hanya elemen yang merupakan tipe data primitive (bukan object/array).

//12.fungsi untuk menjumlahkan nilai duplikat
console.log("12.fungsi untuk menjumlahkan nilai duplikat");
console.log("");
function jumlahDuplikat(arr) {
  let count = {};
  let total = 0;

  // Hitung kemunculan setiap angka
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }

  // Jumlahkan hanya nilai yang muncul lebih dari 1 kali
  for (let key in count) {
    if (count[key] > 1) {
      total += parseInt(key) * (count[key] - 1);
    }
  }

  return total;
}

let arrJumlahDuplikat = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(jumlahDuplikat(arrJumlahDuplikat)); // Output: 40

//Angka 10 muncul 4 kali, jadi duplikatnya = 10 × (4-1) = 30
//Tidak ada angka lain yang duplikat
//Total = 30

console.log("");
//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi jumlahDuplikat(arr) menerima satu parameter: arr, yaitu array yang berisi bilangan.
// 2. Di dalam fungsi, dibuat objek count untuk menyimpan jumlah kemunculan setiap angka.
// 3. Menggunakan loop, setiap angka dalam array dihitung kemunculannya dan disimpan dalam objek count.
// 4. Setelah itu, dilakukan loop lagi untuk menjumlahkan nilai duplikat (angka yang muncul lebih dari 1 kali).
// 5. Fungsi mengembalikan total jumlah duplikat yang ditemukan.
// 6. Fungsi dipanggil dengan array contoh [10, 20, 40, 10, 50, 30, 10, 60, 10], dan hasilnya dicetak ke konsol. // Output: 40
// Angka 10 muncul 4 kali, jadi duplikatnya = 10 × (4-1) = 30
// Tidak ada angka lain yang duplikat
// Total = 30

//13. game suit
console.log("13. game suit");
console.log("");
function gameBatuGuntingKertas(pilihanUser) {
  // Pilihan komputer secara random
  const pilihan = ["batu", "gunting", "kertas"];
  const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];

  console.log("User: " + pilihanUser);
  console.log("Komputer: " + pilihanKomputer);

  // Aturan permainan
  if (pilihanUser === pilihanKomputer) {
    return "Seri!";
  }

  if (
    (pilihanUser === "batu" && pilihanKomputer === "gunting") ||
    (pilihanUser === "gunting" && pilihanKomputer === "kertas") ||
    (pilihanUser === "kertas" && pilihanKomputer === "batu")
  ) {
    return "Win!";
  } else {
    return "Lose!";
  }
}

console.log(gameBatuGuntingKertas("batu"));
console.log("");

//penjelasan detail kodenya sebagai berikut:
// 1. Fungsi gameBatuGuntingKertas(pilihanUser) menerima satu parameter: pilihanUser, yaitu pilihan pemain (batu, gunting, atau kertas).
// 2. Di dalam fungsi, dibuat array pilihan yang berisi tiga opsi permainan.
// 3. Pilihan komputer diambil secara acak dari array pilihan.
// 4. Hasil permainan ditentukan berdasarkan aturan yang telah ditetapkan.
// 5. Jika pilihan pemain sama dengan pilihan komputer, hasilnya adalah "Seri!".
// 6. Jika pilihan pemain menang berdasarkan aturan permainan, hasilnya adalah "Win!".
// 7. Jika pilihan pemain kalah, hasilnya adalah "Lose!".
// 8. Fungsi mengembalikan hasil permainan.
// 9. Fungsi dipanggil dengan pilihan pemain "batu", dan hasilnya dicetak ke konsol. // Hasil komputer akan berbeda setiap kali karena diambil secara acak.
>>>>>>> 9e68cf40c5b6a171d2ea8c61269021f372a59468
